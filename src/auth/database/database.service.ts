// src/database/database.service.ts
import { Inject, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Connection } from 'oracledb';
import * as oracledb from 'oracledb';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('ORACLE_CONNECTION') private readonly connection: Connection,
  ) {}

  private readonly logger = new Logger('GATEWAY AUTH DATABASE');

  private response = {
    error: (error: string, statusCode = 400) => {
      this.logger.log(`Error al ejecutar la consulta: ${error}`);
      throw new RpcException({
        statusCode,
        message: {
          success: false,
          error: error,
        },
      });
    },
  };

  async updateStatus(userId: number, token: string): Promise<boolean> {
    this.logger.log(typeof token);
    this.logger.log(`userId: ${userId} and token: ${token}`);
    try {
      const result = await this.connection.execute(
        `UPDATE LOG_SESSION SET STATUS = 0 WHERE ID_USER = :userId and TOKEN = :token`,
        { userId, token },
        { autoCommit: true },
      );
      return result.rowsAffected && result.rowsAffected > 0;
    } catch (error) {
      return this.response.error(
        `Error al ejecutar la consulta: ${error.message}`,
      );
    }
  }

  async isTokenActive(userId: number, token: string): Promise<boolean> {
    try {
      const result = await this.connection.execute(
        `SELECT COUNT(*) AS TOKEN_COUNT
         FROM LOG_SESSION
         WHERE ID_USER = :userId AND TOKEN = :token AND status = 1`,
        { userId, token },
        { autoCommit: true },
        { outFormat: oracledb.OUT_FORMAT_OBJECT },
      );
      return result.rows[0]?.TOKEN_COUNT > 0;
    } catch (error) {
      return this.response.error(
        `Error checking token status: ${error.message}`,
      );
    }
  }

  async retriveActiveToken(userId: number) {
    try {
      const result = await this.connection.execute(
        `SELECT * FROM LOG_SESSION WHERE ID_USER = :userId AND status = 1`,
        { userId },
        { outFormat: oracledb.OUT_FORMAT_OBJECT },
      );
      return result.rows.length > 0 ? result.rows[0].TOKEN : null;
    } catch (error) {
      return this.response.error(
        `Error checking token status: ${error.message}`,
      );
    }
  }
}
