export const successResponse = <T>(data: T, message = "Success") => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (
  message: string,
  statusCode = 500,
  details?: unknown,
) => {
  return {
    success: false,
    message,
    statusCode,
    details,
  };
};
