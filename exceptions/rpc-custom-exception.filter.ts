import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RcpCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const rcpError = exception.getError();

    Logger.error(rcpError);

    function extractValidationMessages(
      errors: any[],
      parentPath = '',
    ): string[] {
      return errors.flatMap(err => {
        const propertyPath = parentPath
          ? `${parentPath}.${err.property}`
          : err.property;
        const messages = Object.values(err.constraints || {}).map(
          message => `${propertyPath}: ${message}`,
        );

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
        status: 400,
        message: validationMessages.length
          ? validationMessages
          : ['Validation failed'],
      });
    } else if (
      typeof rcpError === 'object' &&
      'status' in rcpError &&
      'message' in rcpError
    ) {
      const { status, ...errorDetails } = rcpError; // Keep `status` dynamic

      response.status(status).json({
        status,
        ...errorDetails, // Include all other fields (message, data, errorData, etc.)
      });
    } else {
      response.status(500).json({
        status: 500,
        message: ['Internal server error'],
      });
    }
  }
}
