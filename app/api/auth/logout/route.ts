import { NextResponse } from "next/server";
import { logoutUser } from "@/backend/services/auth.service";

export async function POST() {
  try {
    const result = await logoutUser();

    if (!result) {
      return NextResponse.json(
        { message: "Logout failed" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      message: "Logged out successfully",
    });

    
    response.cookies.set("refresh_token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      expires: new Date(0), 
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}