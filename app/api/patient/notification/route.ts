import { NextResponse } from "next/server";
import { saveNotificationSettings } from "@/backend/services/caretaker.service";
import { notificationSchema } from "@/backend/lib/validator";
import { handleError } from "@/backend/lib/errorhandler";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await saveNotificationSettings(body);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    const err = handleError(error);
    return NextResponse.json(err, { status: err.statusCode });
  }
}
