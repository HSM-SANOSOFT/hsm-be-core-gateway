import 'dotenv/config';

import * as dotenv from 'dotenv';
import * as joi from 'joi';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../kubernetes/envs/global.env'),
});
dotenv.config({
  path: path.resolve(__dirname, '../../../kubernetes/envs/gateway.env'),
});

interface EnvVars {
  ENVIRONMENT: string;

  JWT_SECRET: string;

  HSM_BE_CORE_GATEWAY_NAME: string;
  HSM_BE_CORE_GATEWAY_HOST: string;
  HSM_BE_CORE_GATEWAY_PORT: number;

  HSM_BE_CORE_AUTH_NAME: string;
  HSM_BE_CORE_AUTH_HOST: string;
  HSM_BE_CORE_AUTH_PORT: number;

  HSM_BE_CORE_COMS_NAME: string;
  HSM_BE_CORE_COMS_HOST: string;
  HSM_BE_CORE_COMS_PORT: number;

  HSM_BE_CORE_USERS_NAME: string;
  HSM_BE_CORE_USERS_HOST: string;
  HSM_BE_CORE_USERS_PORT: number;

  HSM_BE_CORE_COMMON_NAME: string;
  HSM_BE_CORE_COMMON_HOST: string;
  HSM_BE_CORE_COMMON_PORT: number;

  HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME: string;
  HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_HOST: string;
  HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_PORT: number;

  HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_NAME: string;
  HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_HOST: string;
  HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_PORT: number;

  HSM_BE_CORE_DOCS_NAME: string;
  HSM_BE_CORE_DOCS_HOST: string;
  HSM_BE_CORE_DOCS_PORT: number;
}

const envsSchema = joi
  .object({
    ENVIRONMENT: joi.string().required(),

    JWT_SECRET: joi.string().default('sanosoft'),

    HSM_BE_CORE_GATEWAY_NAME: joi.string().required(),
    HSM_BE_CORE_GATEWAY_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_GATEWAY_PORT: joi.number().required(),

    HSM_BE_CORE_AUTH_NAME: joi.string().required(),
    HSM_BE_CORE_AUTH_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_AUTH_PORT: joi.number().required(),

    HSM_BE_CORE_COMS_NAME: joi.string().required(),
    HSM_BE_CORE_COMS_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_COMS_PORT: joi.number().required(),

    HSM_BE_CORE_USERS_NAME: joi.string().required(),
    HSM_BE_CORE_USERS_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_USERS_PORT: joi.number().required(),

    HSM_BE_CORE_COMMON_NAME: joi.string().required(),
    HSM_BE_CORE_COMMON_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_COMMON_PORT: joi.number().required(),

    HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME: joi.string().required(),
    HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_HOST: joi.string().default('localhost'),
    HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_PORT: joi.number().required(),

    HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_NAME: joi.string().required(),
    HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_HOST: joi.string().default('localhost'),
    HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_PORT: joi.number().required(),

    HSM_BE_CORE_DOCS_NAME: joi.string().required(),
    HSM_BE_CORE_DOCS_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_DOCS_PORT: joi.number().required(),

  })
  .unknown()
  .required();

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  ENVIRONMENT: envVars.ENVIRONMENT,

  JWT_SECRET: envVars.JWT_SECRET,

  HSM_BE_CORE_GATEWAY_NAME: envVars.HSM_BE_CORE_GATEWAY_NAME,
  HSM_BE_CORE_GATEWAY_HOST: envVars.HSM_BE_CORE_GATEWAY_HOST,
  HSM_BE_CORE_GATEWAY_PORT: envVars.HSM_BE_CORE_GATEWAY_PORT,

  HSM_BE_CORE_AUTH_NAME: envVars.HSM_BE_CORE_AUTH_NAME,
  HSM_BE_CORE_AUTH_HOST: envVars.HSM_BE_CORE_AUTH_HOST,
  HSM_BE_CORE_AUTH_PORT: envVars.HSM_BE_CORE_AUTH_PORT,

  HSM_BE_CORE_COMS_NAME: envVars.HSM_BE_CORE_COMS_NAME,
  HSM_BE_CORE_COMS_HOST: envVars.HSM_BE_CORE_COMS_HOST,
  HSM_BE_CORE_COMS_PORT: envVars.HSM_BE_CORE_COMS_PORT,

  HSM_BE_CORE_USERS_NAME: envVars.HSM_BE_CORE_USERS_NAME,
  HSM_BE_CORE_USERS_HOST: envVars.HSM_BE_CORE_USERS_HOST,
  HSM_BE_CORE_USERS_PORT: envVars.HSM_BE_CORE_USERS_PORT,

  HSM_BE_CORE_COMMON_NAME: envVars.HSM_BE_CORE_COMMON_NAME,
  HSM_BE_CORE_COMMON_HOST: envVars.HSM_BE_CORE_COMMON_HOST,
  HSM_BE_CORE_COMMON_PORT: envVars.HSM_BE_CORE_COMMON_PORT,

  HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME: envVars.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME,
  HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_HOST: envVars.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_HOST,
  HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_PORT: envVars.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_PORT,

  HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_NAME: envVars.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_NAME,
  HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_HOST: envVars.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_HOST,
  HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_PORT: envVars.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_PORT,

  HSM_BE_CORE_DOCS_NAME: envVars.HSM_BE_CORE_DOCS_NAME,
  HSM_BE_CORE_DOCS_HOST: envVars.HSM_BE_CORE_DOCS_HOST,
  HSM_BE_CORE_DOCS_PORT: envVars.HSM_BE_CORE_DOCS_PORT,
};
