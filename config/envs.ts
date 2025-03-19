import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  ENVIRONMENT: string;
  JWT_SECRET: string;

  hsm_be_core_gateway: string;
  hsm_be_core_gateway_port: number;

  hsm_be_core_auth: string;
  hsm_be_core_coms: string;
  hsm_be_core_users: string;
  hsm_be_core_common: string;
  hsm_be_core_docs: string;

  hsm_be_has_gaa_gth_gsr_postulantes: string;
  hsm_be_has_gaa_gth_gsr_trabajos: string;

  hsm_be_has_cob_gdp_transaccion: string;
  hsm_be_has_cob_gdp_compensacion: string;
  hsm_be_has_cob_gdp_recaudo: string;
}

const envSchema = joi
  .object({
    ENVIRONMENT: joi.string().required(),
    JWT_SECRET: joi.string().default('sanosoft'),

    hsm_be_core_gateway: joi.string().required(),
    hsm_be_core_gateway_port: joi.number().default(41000),

    hsm_be_core_auth: joi.string().required(),
    hsm_be_core_coms: joi.string().required(),
    hsm_be_core_users: joi.string().required(),
    hsm_be_core_common: joi.string().required(),
    hsm_be_core_docs: joi.string().required(),

    hsm_be_has_gaa_gth_gsr_postulantes: joi.string().required(),
    hsm_be_has_gaa_gth_gsr_trabajos: joi.string().required(),

    hsm_be_has_cob_gdp_transaccion: joi.string().required(),
    hsm_be_has_cob_gdp_compensacion: joi.string().required(),
    hsm_be_has_cob_gdp_recaudo: joi.string().required(),
  })
  .unknown()
  .required();

const validation = envSchema.validate(process.env);

if (validation.error) {
  throw new Error(`Config validation error: ${validation.error.message}`);
}

const envVars: EnvVars = validation.value as EnvVars;

export const envs = {
  ENVIRONMENT: envVars.ENVIRONMENT,
  JWT_SECRET: envVars.JWT_SECRET,

  hsm_be_core_gateway: envVars.hsm_be_core_gateway,
  hsm_be_core_gateway_port: envVars.hsm_be_core_gateway_port,

  hsm_be_core_auth: envVars.hsm_be_core_auth,
  hsm_be_core_coms: envVars.hsm_be_core_coms,
  hsm_be_core_users: envVars.hsm_be_core_users,
  hsm_be_core_common: envVars.hsm_be_core_common,
  hsm_be_core_docs: envVars.hsm_be_core_docs,

  hsm_be_has_gaa_gth_gsr_postulantes:
    envVars.hsm_be_has_gaa_gth_gsr_postulantes,
  hsm_be_has_gaa_gth_gsr_trabajos: envVars.hsm_be_has_gaa_gth_gsr_trabajos,

  hsm_be_has_cob_gdp_transaccion: envVars.hsm_be_has_cob_gdp_transaccion,
  hsm_be_has_cob_gdp_compensacion: envVars.hsm_be_has_cob_gdp_compensacion,
  hsm_be_has_cob_gdp_recaudo: envVars.hsm_be_has_cob_gdp_recaudo,
};
