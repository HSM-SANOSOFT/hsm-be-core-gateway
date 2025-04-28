import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  JWT_SECRET: string;

  hsm_be_core_auth_host: string;
  hsm_be_core_coms_host: string;
  hsm_be_core_users_host: string;
  hsm_be_core_common_host: string;
  hsm_be_core_docs_host: string;

  hsm_be_has_gaa_gth_gsr_postulantes_host: string;
  hsm_be_has_gaa_gth_gsr_trabajos_host: string;

  hsm_be_has_cob_gdp_transaccion_host: string;
  hsm_be_has_cob_gdp_compensacion_host: string;
  hsm_be_has_cob_gdp_recaudo_host: string;
}

const envSchema = joi
  .object({
    JWT_SECRET: joi.string().default('sanosoft'),

    hsm_be_core_auth_host: joi.string().required(),
    hsm_be_core_coms_host: joi.string().required(),
    hsm_be_core_users_host: joi.string().required(),
    hsm_be_core_common_host: joi.string().required(),
    hsm_be_core_docs_host: joi.string().required(),

    hsm_be_has_gaa_gth_gsr_postulantes_host: joi.string().required(),
    hsm_be_has_gaa_gth_gsr_trabajos_host: joi.string().required(),

    hsm_be_has_cob_gdp_transaccion_host: joi.string().required(),
    hsm_be_has_cob_gdp_compensacion_host: joi.string().required(),
    hsm_be_has_cob_gdp_recaudo_host: joi.string().required(),
  })
  .unknown()
  .required();

const validation = envSchema.validate(process.env);

if (validation.error) {
  throw new Error(`Config validation error: ${validation.error.message}`);
}

const envVars: EnvVars = validation.value as EnvVars;

export const envs = {
  JWT_SECRET: envVars.JWT_SECRET,

  hsm_be_core_auth_host: envVars.hsm_be_core_auth_host,
  hsm_be_core_coms_host: envVars.hsm_be_core_coms_host,
  hsm_be_core_users_host: envVars.hsm_be_core_users_host,
  hsm_be_core_common_host: envVars.hsm_be_core_common_host,
  hsm_be_core_docs_host: envVars.hsm_be_core_docs_host,

  hsm_be_has_gaa_gth_gsr_postulantes_host:
    envVars.hsm_be_has_gaa_gth_gsr_postulantes_host,
  hsm_be_has_gaa_gth_gsr_trabajos_host:
    envVars.hsm_be_has_gaa_gth_gsr_trabajos_host,

  hsm_be_has_cob_gdp_transaccion_host:
    envVars.hsm_be_has_cob_gdp_transaccion_host,
  hsm_be_has_cob_gdp_compensacion_host:
    envVars.hsm_be_has_cob_gdp_compensacion_host,
  hsm_be_has_cob_gdp_recaudo_host: envVars.hsm_be_has_cob_gdp_recaudo_host,
};
