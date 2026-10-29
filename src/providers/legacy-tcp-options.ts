/** Preserve the existing runtime options while avoiding fresh-object excess checks in Nest 11. */
export function legacyTcpOptions(host: string) {
  return { host, retryAttempts: 5, retryDelay: 3000 };
}
