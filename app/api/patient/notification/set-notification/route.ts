import { NextRequest, NextResponse } from "next/server";
import { saveNotificationSettings } from "@/backend/services/caretaker.service";
import { notificationSchema } from "@/backend/lib/validator";
import { handleError } from "@/backend/lib/errorhandler";
import { withAuth } from "@/backend/middleware/withAuth";
import { User } from "@/backend/types/auth.types";

export const POST = withAuth(async (req: NextRequest, user: User) => {

  try {
    const body = await req.json();

    const patientId = user.id

    

    const data = await saveNotificationSettings(body, patientId);

    

    
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    const err = handleError(error);
    return NextResponse.json(err, { status: err.statusCode });
  }
})
