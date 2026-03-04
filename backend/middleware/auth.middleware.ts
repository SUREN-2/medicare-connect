import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { AppError } from "../lib/error";

export const authMiddleware = async (req: NextRequest) => {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new AppError("Unauthorized", 401);
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    );

    const { data, error } = await supabase.auth.getUser();

    console.log(error)

    if (error || !data.user) {
      throw new AppError("Invalid token", 401);
    }

    return data.user;
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError("Authentication failed", 401);
  }
};
