import { NextRequest, NextResponse } from "next/server";
import { signupUser } from "@/backend/services/auth.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = await signupUser(body);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Signup failed",
      },
      { status: error.status || 400 },
    );
  }
}
