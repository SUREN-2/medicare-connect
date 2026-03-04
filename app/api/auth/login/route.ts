import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/backend/services/auth.service";

export async function POST(req: NextRequest) {
  try {
    // console.log("hi");
    const body = await req.json();

    const session = await loginUser(body);

    console.log(session)

    if (!session) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  

  const response = NextResponse.json({
    accessToken: session.access_token,
  });

  response.cookies.set("refresh_token", session.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    );
  }
}
