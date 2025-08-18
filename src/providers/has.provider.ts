import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

export const HasProvider = ClientsModule.register([
  {
    name: sNames.hsm_be_has_cob_gdp_compensacion_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_has_cob_gdp_compensacion_host,
    },
  },
  {
    name: sNames.hsm_be_has_cob_gdp_recaudo_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_has_cob_gdp_recaudo_host,
    },
  },
  {
    name: sNames.hsm_be_has_cob_gdp_transaccion_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_has_cob_gdp_transaccion_host,
    },
  },
  {
    name: sNames.hsm_be_has_gaa_gth_gsr_postulantes_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_has_gaa_gth_gsr_postulantes_host,
    },
  },
  {
    name: sNames.hsm_be_has_gaa_gth_gsr_trabajos_name,
    transport: Transport.TCP,
    options: {
      host: envs.hsm_be_has_gaa_gth_gsr_trabajos_host,
    },
  },
]);
