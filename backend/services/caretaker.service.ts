import { AppError } from "../lib/error";
import { notificationSchema, validate } from "../lib/validator";
import {
  NotificationSettingsRepo,
  updateMedicationScheduleRepo,
} from "../repositories/notification.repo";
import { NotificationInput } from "../types/nofitication.types";

export const saveNotificationSettings = async (data: NotificationInput) => {
  try {
    const validatedData = validate(notificationSchema, data);
    await NotificationSettingsRepo(validatedData);

    await updateMedicationScheduleRepo(
      validatedData.patientId,
      validatedData.schedule_time,
    );

    return {
      message: "Notification settings saved successfully",
    };
  } catch (err) {
    console.log(err);
    throw new AppError("Database connection failed", 503);
  }
};
