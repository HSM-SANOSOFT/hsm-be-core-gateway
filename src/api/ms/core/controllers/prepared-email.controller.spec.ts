import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { of } from 'rxjs';
import { PreparedEmailController } from './prepared-email.controller';
import { sNames } from '../../../../config/sNames';

describe('prepared email HTTP boundary', () => {
  let app: INestApplication;
  const send = jest.fn(() => of([{ _id: 'fixture-receipt', status: 'queued' }]));
  const data = { email: 'test@example.org', subject: 'Desde Sanosoft', html: '<p>{{literal}}</p>', text: '{{literal}}', model: 24 };
  beforeAll(async () => {
    const module = await Test.createTestingModule({ controllers: [PreparedEmailController], providers: [{ provide: sNames.hsm_be_core_coms_name, useValue: { send } }] }).compile();
    app = module.createNestApplication(); await app.init();
  });
  afterAll(async () => { await app.close(); });
  beforeEach(() => send.mockClear());
  it('accepts valid requests without a service token', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').send({ data }).expect(201);
    expect(send).toHaveBeenCalledWith('sendPreparedEmail', { data, files: [] });
  });
  it('preserves complete content and repeated multipart attachments', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').field('data', JSON.stringify(data)).attach('files', Buffer.from('one'), 'one.txt').attach('files', Buffer.from('two'), 'two.txt').expect(201);
    const payload = (send.mock.calls[0] as unknown as [string, { data: unknown; files: Express.Multer.File[] }])[1];
    expect((send.mock.calls[0] as unknown as [string, unknown])[0]).toBe('sendPreparedEmail');
    expect(payload.data).toEqual(data);
    expect(payload.files.map(f => f.buffer.toString())).toEqual(['one', 'two']);
  });
  it('rejects malformed JSON and subject header injection', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').field('data', '{bad').expect(400);
    await request(app.getHttpServer()).post('/coms/email/send-prepared').send({ data: { ...data, subject: 'x\r\nBcc: another' } }).expect(400);
    expect(send).not.toHaveBeenCalled();
  });
  it('rejects more than ten attachments before dispatch', async () => {
    let req = request(app.getHttpServer()).post('/coms/email/send-prepared').field('data', JSON.stringify(data));
    for (let i = 0; i < 11; i++) req = req.attach('files', Buffer.from('fixture'), `file-${i}.txt`);
    await req.expect(400);
    expect(send).not.toHaveBeenCalled();
  });
  it('rejects an attachment larger than ten MiB before dispatch', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').field('data', JSON.stringify(data)).attach('files', Buffer.alloc(10485761), 'large.bin').expect(413);
    expect(send).not.toHaveBeenCalled();
  });
});
