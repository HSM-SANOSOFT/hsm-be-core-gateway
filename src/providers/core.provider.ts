import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

export const CoreProvider = ClientsModule.register([
  {
    name: sNames.hsm_be_core_auth_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_auth_host,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  },
  {
    name: sNames.hsm_be_core_common_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_common_host,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  },
  {
    name: sNames.hsm_be_core_coms_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_coms_host,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  },
  {
    name: sNames.hsm_be_core_docs_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_docs_host,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  },
  {
    name: sNames.hsm_be_core_users_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_users_host,
      retryAttempts: 5,
      retryDelay: 3000,
    },
  },
]);
