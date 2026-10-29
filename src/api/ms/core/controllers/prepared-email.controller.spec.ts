import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { of } from 'rxjs';
import { PreparedEmailController } from './prepared-email.controller';
import { PreparedEmailGuard } from './prepared-email.guard';
import { sNames } from '../../../../config/sNames';

describe('prepared email HTTP boundary', () => {
  let app: INestApplication;
  const send = jest.fn(() => of([{ _id: 'fixture-receipt', status: 'queued' }]));
  const token = 'fixture-service-token-not-for-production';
  const data = { email: 'test@example.org', subject: 'Desde Sanosoft', html: '<p>{{literal}}</p>', text: '{{literal}}', model: 24 };
  beforeAll(async () => {
    process.env.MAIL_PREPARED_API_TOKEN = token;
    const module = await Test.createTestingModule({ controllers: [PreparedEmailController], providers: [PreparedEmailGuard, { provide: sNames.hsm_be_core_coms_name, useValue: { send } }] }).compile();
    app = module.createNestApplication(); await app.init();
  });
  afterAll(async () => { await app.close(); delete process.env.MAIL_PREPARED_API_TOKEN; });
  beforeEach(() => send.mockClear());
  it('rejects requests without the service token before dispatch', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').send({ data }).expect(401);
    expect(send).not.toHaveBeenCalled();
  });
  it('preserves complete content and repeated multipart attachments', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').set('X-Mail-Prepared-Token', token).field('data', JSON.stringify(data)).attach('files', Buffer.from('one'), 'one.txt').attach('files', Buffer.from('two'), 'two.txt').expect(201);
    const payload = (send.mock.calls[0] as unknown as [string, { data: unknown; files: Express.Multer.File[] }])[1];
    expect((send.mock.calls[0] as unknown as [string, unknown])[0]).toBe('sendPreparedEmail');
    expect(payload.data).toEqual(data);
    expect(payload.files.map(f => f.buffer.toString())).toEqual(['one', 'two']);
  });
  it('rejects malformed JSON and subject header injection', async () => {
    await request(app.getHttpServer()).post('/coms/email/send-prepared').set('X-Mail-Prepared-Token', token).field('data', '{bad').expect(400);
    await request(app.getHttpServer()).post('/coms/email/send-prepared').set('X-Mail-Prepared-Token', token).send({ data: { ...data, subject: 'x\r\nBcc: another' } }).expect(400);
    expect(send).not.toHaveBeenCalled();
  });
});
