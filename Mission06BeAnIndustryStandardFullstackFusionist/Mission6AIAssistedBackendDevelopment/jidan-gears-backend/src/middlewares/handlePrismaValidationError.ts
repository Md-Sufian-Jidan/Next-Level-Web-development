import { Prisma } from '../../generated/prisma/client';
import { TErrorSource, TGenericErrorResponse } from '../errors/interface';

/**
 * Handles Prisma Validation Errors
 * These occur when the data doesn't match the schema requirements
 */
const handlePrismaValidationError = (
    err: Prisma.PrismaClientValidationError,
): TGenericErrorResponse => {
    const statusCode = 400;

    // Extract field information from the error message
    const errorMessage = err.message;

    // Try to extract the argument name from Prisma validation error
    const argumentMatch = errorMessage.match(/Argument `(\w+)`/);
    const fieldName = argumentMatch ? argumentMatch[1] : 'unknown';

    const errorSources: TErrorSource[] = [
        {
            path: fieldName,
            message: errorMessage.split('\n').pop() || 'Validation failed',
        },
    ];

    return {
        success: false,
        statusCode,
        message: 'Validation Error',
        errorSources,
    };
};

export default handlePrismaValidationError;