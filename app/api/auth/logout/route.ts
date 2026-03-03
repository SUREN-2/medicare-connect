import { NextResponse } from "next/server";
import { logoutUser } from "@/backend/services/auth.service";

export async function POST() {
  try {
    const data = await logoutUser();

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Logout failed" },
      { status: 500 },
    );
  }
}
