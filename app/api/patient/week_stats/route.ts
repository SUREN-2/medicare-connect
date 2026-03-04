import { NextRequest, NextResponse } from "next/server";
import { getLast7DaysLogs } from "@/backend/services/patient.service";
import { withAuth } from "@/backend/middleware/withAuth";
import { User } from "@/backend/types/auth.types";

export const GET = withAuth(async (req: NextRequest, user: User) => {
  try {
    const patientId = user.id

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
})
