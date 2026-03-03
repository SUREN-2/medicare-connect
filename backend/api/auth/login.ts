import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/backend/services/auth.service";

export async function POST(req: NextRequest) {
  try {
    console.log("hi");
    const body = await req.json();

    const data = await loginUser(body);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: error.status || 500 },
    );
  }
}
