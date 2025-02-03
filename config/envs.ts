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

  HSM_BE_CORE_GATEWAY_NAME: string;
  HSM_BE_CORE_GATEWAY_HOST: string;
  HSM_BE_CORE_GATEWAY_PORT: number;

  JWT_SECRET: string;

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
}

const envsSchema = joi
  .object({
    ENVIRONMENT: joi.string().required(),

    HSM_BE_CORE_GATEWAY_NAME: joi.string().required(),
    HSM_BE_CORE_GATEWAY_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_GATEWAY_PORT: joi.number().required(),

    JWT_SECRET: joi.string().default('sanosoft'),

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

  HSM_BE_CORE_GATEWAY_NAME: envVars.HSM_BE_CORE_GATEWAY_NAME,
  HSM_BE_CORE_GATEWAY_HOST: envVars.HSM_BE_CORE_GATEWAY_HOST,
  HSM_BE_CORE_GATEWAY_PORT: envVars.HSM_BE_CORE_GATEWAY_PORT,

  JWT_SECRET: envVars.JWT_SECRET,

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
};
