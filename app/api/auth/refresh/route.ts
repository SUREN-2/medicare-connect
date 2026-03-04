import { NextRequest, NextResponse } from "next/server";
import { refreshUser } from "@/backend/services/auth.service";

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get("refresh_token")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "No refresh token" },
        { status: 401 }
      );
    }

    console.log("frefresh"+refreshToken)

    const session = await refreshUser(refreshToken);

    if (!session) {
      return NextResponse.json(
        { message: "Invalid refresh token" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      accessToken: session.access_token,
    });

    response.cookies.set("refresh_token", session.refresh_token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Refresh error:", err);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}