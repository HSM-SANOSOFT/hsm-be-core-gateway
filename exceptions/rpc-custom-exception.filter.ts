import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RcpCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rcpError = exception.getError();

    // Check if the error is an array (DTO validation error)
    if (Array.isArray(rcpError)) {
      // Consolidate validation messages into a single array
      const validationMessages = rcpError.flatMap(err =>
        Object.values(err.constraints || {}),
      );

      // Respond with the desired structure
      response.status(400).json({
        message: validationMessages,
        error: 'Bad Request',
        statusCode: 400,
      });
    } else if (
      typeof rcpError === 'object' &&
      'status' in rcpError &&
      'message' in rcpError
    ) {
      // Handle general RpcException errors
      const status = rcpError.status || 500; // Default to 500 if status is not provided
      response.status(status).json({
        statusCode: status,
        message: rcpError.message,
        error: 'Error',
      });
    } else {
      // Fallback for unexpected error formats
      response.status(500).json({
        statusCode: 500,
        message: ['Internal server error'],
        error: 'Internal Server Error',
      });
    }
  }
}
