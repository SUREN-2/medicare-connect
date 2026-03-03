import { NextRequest, NextResponse } from "next/server";
import { getPatientMedicationLogs } from "@/backend/services/patient.service";
import { handleError } from "@/backend/lib/errorhandler";
import { withAuth } from "@/backend/middleware/withAuth";

export const GET = withAuth(async (req: NextRequest, user: any) => {
  try {
    const { searchParams } = new URL(req.url);
    const patientId = searchParams.get("patientId");

    if (!patientId) {
      return NextResponse.json(
        { message: "patientId is required" },
        { status: 400 },
      );
    }

    const data = await getPatientMedicationLogs(patientId);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    const err = handleError(error);
    return NextResponse.json(err, { status: err.statusCode });
  }
})
