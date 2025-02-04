import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RcpCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rcpError = exception.getError();

    // Recursive function to extract validation errors with full property path
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
      // Extract validation messages recursively with full property path
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
      // Handle general RpcException errors
      const status = rcpError.status || 500;
      response.status(status).json({
        message: rcpError.message,
      });
    } else {
      // Fallback for unexpected errors
      response.status(500).json({
        message: ['Internal server error'],
      });
    }
  }
}
