import { AppError } from "./error";

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    return {
      success: false,
      message: error.message,
      statusCode: error.statusCode,
    };
  }

  return {
    success: false,
    message: "Internal Server Error",
    statusCode: 500,
  };
};
