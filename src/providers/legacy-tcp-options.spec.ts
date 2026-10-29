import { legacyTcpOptions } from './legacy-tcp-options';
it('preserves existing TCP provider values exactly', () => {
  expect(legacyTcpOptions('fixture-host')).toEqual({ host: 'fixture-host', retryAttempts: 5, retryDelay: 3000 });
});
