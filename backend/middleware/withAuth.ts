import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./auth.middleware";


type Handler = (req: NextRequest, user: any) => Promise<Response>;

export const withAuth = (handler: Handler) => {
  return async (req: NextRequest) => {
    try {
      const user = await authMiddleware(req);
      return handler(req, user);
    } catch (err: any) {
      return NextResponse.json(
        { error: err.message },
        { status: err.statusCode || 401 }
      );
    }
  };
};