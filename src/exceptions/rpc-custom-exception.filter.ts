/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch(RpcException)
export class RcpCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const rcpError = exception.getError();

    Logger.error(rcpError);

    function extractValidationMessages(
      errors: any[],
      parentPath = '',
    ): string[] {
      return errors.flatMap(err => {
        const propertyPath = parentPath
          ? `${parentPath}.${(err as { property: string }).property}`
          : (err as { property: string }).property;
        const messages = Object.values(
          (err as { constraints: { [key: string]: string } }).constraints || {},
        ).map(message => `${propertyPath}: ${message}`);

        return [
          ...messages,
          ...(err.children
            ? extractValidationMessages(err.children, propertyPath)
            : []),
        ];
      });
    }

    if (Array.isArray(rcpError)) {
      const validationMessages = extractValidationMessages(rcpError);
      response.status(400).json({
        message: validationMessages.length
          ? validationMessages
          : ['Validation failed'],
      });
    } else if (
      typeof rcpError === 'object' &&
      'status' in rcpError &&
      'message' in rcpError
    ) {
      const { status, ...errorDetails } = rcpError;

      response.status(Number(status)).json({
        ...errorDetails,
      });
    } else {
      response.status(500).json({
        message: ['Internal server error'],
      });
    }
  }
}
