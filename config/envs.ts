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
  GATEWAY_MICROSERVICE_HOST: string;
  GATEWAY_MICROSERVICE_PORT: number;

  ENVIRONMENT: string;

  DB_USER: string;
  DB_PASSWORD: string;
  DB_CONNECTION_STRING: string;
  ORACLE_CLIENT_PATH: string;

  JWT_SECRET: string;

  AUTH_MICROSERVICE_HOST: string;
  AUTH_MICROSERVICE_PORT: number;

  COMS_MICROSERVICE_HOST: string;
  COMS_MICROSERVICE_PORT: number;

  EXAMENES_MICROSERVICE_HOST: string;
  EXAMENES_MICROSERVICE_PORT: number;

  FACTURACION_MICROSERVICE_HOST: string;
  FACTURACION_MICROSERVICE_PORT: number;

  FARMACIA_MICROSERVICE_HOST: string;
  FARMACIA_MICROSERVICE_PORT: number;

  HOSPITALIZACION_MICROSERVICE_HOST: string;
  HOSPITALIZACION_MICROSERVICE_PORT: number;

  MEDICOS_MICROSERVICE_HOST: string;
  MEDICOS_MICROSERVICE_PORT: number;

  PACIENTES_MICROSERVICE_HOST: string;
  PACIENTES_MICROSERVICE_PORT: number;

  PERSONAL_MICROSERVICE_HOST: string;
  PERSONAL_MICROSERVICE_PORT: number;

  USERS_MICROSERVICE_HOST: string;
  USERS_MICROSERVICE_PORT: number;
}

const envsSchema = joi
  .object({
    GATEWAY_MICROSERVICE_HOST: joi.string().default('localhost'),
    GATEWAY_MICROSERVICE_PORT: joi.number().required(),

    ENVIRONMENT: joi.string().required(),

    JWT_SECRET: joi.string().default('sanosoft'),

    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_CONNECTION_STRING: joi.string().required(),
    ORACLE_CLIENT_PATH: joi.string().default('C:/ORACLE/instantclient_12_1'),

    AUTH_MICROSERVICE_HOST: joi.string().default('localhost'),
    AUTH_MICROSERVICE_PORT: joi.number().required(),

    COMS_MICROSERVICE_HOST: joi.string().default('localhost'),
    COMS_MICROSERVICE_PORT: joi.number().required(),

    EXAMENES_MICROSERVICE_HOST: joi.string().default('localhost'),
    EXAMENES_MICROSERVICE_PORT: joi.number().required(),

    FACTURACION_MICROSERVICE_HOST: joi.string().default('localhost'),
    FACTURACION_MICROSERVICE_PORT: joi.number().required(),

    FARMACIA_MICROSERVICE_HOST: joi.string().default('localhost'),
    FARMACIA_MICROSERVICE_PORT: joi.number().required(),

    HOSPITALIZACION_MICROSERVICE_HOST: joi.string().default('localhost'),
    HOSPITALIZACION_MICROSERVICE_PORT: joi.number().required(),

    MEDICOS_MICROSERVICE_HOST: joi.string().default('localhost'),
    MEDICOS_MICROSERVICE_PORT: joi.number().required(),

    PACIENTES_MICROSERVICE_HOST: joi.string().default('localhost'),
    PACIENTES_MICROSERVICE_PORT: joi.number().required(),

    PERSONAL_MICROSERVICE_HOST: joi.string().default('localhost'),
    PERSONAL_MICROSERVICE_PORT: joi.number().required(),

    USERS_MICROSERVICE_HOST: joi.string().default('localhost'),
    USERS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown()
  .required();

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  GATEWAY_MICROSERVICE_HOST: envVars.GATEWAY_MICROSERVICE_HOST,
  GATEWAY_MICROSERVICE_PORT: envVars.GATEWAY_MICROSERVICE_PORT,

  ENVIRONMENT: envVars.ENVIRONMENT,

  DB_USER: envVars.DB_USER,
  DB_PASSWORD: envVars.DB_PASSWORD,
  DB_CONNECTION_STRING: envVars.DB_CONNECTION_STRING,
  ORACLE_CLIENT_PATH: envVars.ORACLE_CLIENT_PATH,

  JWT_SECRET: envVars.JWT_SECRET,

  AUTH_MICROSERVICE_HOST: envVars.AUTH_MICROSERVICE_HOST,
  AUTH_MICROSERVICE_PORT: envVars.AUTH_MICROSERVICE_PORT,

  COMS_MICROSERVICE_HOST: envVars.COMS_MICROSERVICE_HOST,
  COMS_MICROSERVICE_PORT: envVars.COMS_MICROSERVICE_PORT,

  EXAMENES_MICROSERVICE_HOST: envVars.EXAMENES_MICROSERVICE_HOST,
  EXAMENES_MICROSERVICE_PORT: envVars.EXAMENES_MICROSERVICE_PORT,

  FACTURACION_MICROSERVICE_HOST: envVars.FACTURACION_MICROSERVICE_HOST,
  FACTURACION_MICROSERVICE_PORT: envVars.FACTURACION_MICROSERVICE_PORT,

  FARMACIA_MICROSERVICE_HOST: envVars.FARMACIA_MICROSERVICE_HOST,
  FARMACIA_MICROSERVICE_PORT: envVars.FARMACIA_MICROSERVICE_PORT,

  HOSPITALIZACION_MICROSERVICE_HOST: envVars.HOSPITALIZACION_MICROSERVICE_HOST,
  HOSPITALIZACION_MICROSERVICE_PORT: envVars.HOSPITALIZACION_MICROSERVICE_PORT,

  MEDICOS_MICROSERVICE_HOST: envVars.MEDICOS_MICROSERVICE_HOST,
  MEDICOS_MICROSERVICE_PORT: envVars.MEDICOS_MICROSERVICE_PORT,

  PACIENTES_MICROSERVICE_HOST: envVars.PACIENTES_MICROSERVICE_HOST,
  PACIENTES_MICROSERVICE_PORT: envVars.PACIENTES_MICROSERVICE_PORT,

  PERSONAL_MICROSERVICE_HOST: envVars.PERSONAL_MICROSERVICE_HOST,
  PERSONAL_MICROSERVICE_PORT: envVars.PERSONAL_MICROSERVICE_PORT,

  USERS_MICROSERVICE_HOST: envVars.USERS_MICROSERVICE_HOST,
  USERS_MICROSERVICE_PORT: envVars.USERS_MICROSERVICE_PORT,
};
