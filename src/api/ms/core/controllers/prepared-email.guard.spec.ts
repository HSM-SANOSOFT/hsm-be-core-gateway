import { PreparedEmailGuard } from './prepared-email.guard';
describe('prepared transport authorization', () => {
  const context = (token?: string) => ({ switchToHttp: () => ({ getRequest: () => ({ headers: { 'x-mail-prepared-token': token } }) }) }) as never;
  const previous = process.env.MAIL_PREPARED_API_TOKEN;
  afterEach(() => { if (previous === undefined) delete process.env.MAIL_PREPARED_API_TOKEN; else process.env.MAIL_PREPARED_API_TOKEN = previous; });
  it('fails closed when no service secret is configured', () => {
    delete process.env.MAIL_PREPARED_API_TOKEN;
    expect(() => new PreparedEmailGuard().canActivate(context())).toThrow();
  });
  it('accepts only the configured service token', () => {
    process.env.MAIL_PREPARED_API_TOKEN = 'x'.repeat(40);
    expect(() => new PreparedEmailGuard().canActivate(context('wrong'))).toThrow();
    expect(new PreparedEmailGuard().canActivate(context('x'.repeat(40)))).toBe(true);
  });
});
