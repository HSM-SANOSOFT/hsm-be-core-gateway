import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';
import { legacyTcpOptions } from './legacy-tcp-options';

export const HisProvider = ClientsModule.register([
  {
    name: sNames.hsm_be_his_paciente,
    transport: Transport.TCP,
    options: legacyTcpOptions(envs.hsm_be_his_paciente_host),
  },
]);
