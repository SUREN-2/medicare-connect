import { NextRequest, NextResponse } from "next/server";
import { getLast7DaysLogs } from "@/backend/services/patient.service";

export async function GET(req: NextRequest) {
  try {
    const patientId = req.nextUrl.searchParams.get("patientId");

    if (!patientId) {
      return NextResponse.json(
        { message: "Patient ID is required" },
        { status: 400 },
      );
    }

    const data = await getLast7DaysLogs(patientId);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 },
    );
  }
}
