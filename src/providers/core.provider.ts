import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

export const CoreProvider = ClientsModule.register([
  {
    name: sNames.hsm_be_core_auth_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_auth_host,
    },
  },
  {
    name: sNames.hsm_be_core_common_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_common_host,
    },
  },
  {
    name: sNames.hsm_be_core_coms_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_coms_host,
    },
  },
  {
    name: sNames.hsm_be_core_docs_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_docs_host,
    },
  },
  {
    name: sNames.hsm_be_core_users_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_core_users_host,
    },
  },
]);
