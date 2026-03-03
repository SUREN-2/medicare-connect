import { getPatientStats } from "@/backend/services/patient.service";
import { successResponse, errorResponse } from "@/backend/lib/response";
import { authMiddleware } from "@/backend/middleware/auth.middleware";
import { handleError } from "@/backend/lib/errorhandler";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // const user = await authMiddleware(req);

    const url = new URL(req.url);
    const patientId = url.searchParams.get("patientId");

    if (!patientId) {
      return Response.json(errorResponse("patientId is required", 400), {
        status: 400,
      });
    }

    const stats = await getPatientStats(patientId);

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    const err = handleError(error);

    return NextResponse.json(err, { status: err.statusCode });
  }
}
