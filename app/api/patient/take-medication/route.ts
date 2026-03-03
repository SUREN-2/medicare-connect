import { NextRequest, NextResponse } from "next/server";
import { takeMedication } from "@/backend/services/patient.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { patientId, medicationId, photoUrl } = body;

    if (!patientId || !medicationId) {
      return NextResponse.json(
        { message: "patientId and medicationId are required" },
        { status: 400 },
      );
    }

    const result = await takeMedication({
      patientId,
      medicationId,
      photoUrl,
    });

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 },
    );
  }
}
