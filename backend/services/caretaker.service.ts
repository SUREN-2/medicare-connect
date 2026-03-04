import { AppError } from "../lib/error";
import { notificationSchema, validate } from "../lib/validator";
import {
  getNotificationSettingsRepo,
  NotificationSettingsRepo,
  updateMedicationScheduleRepo,
} from "../repositories/notification.repo";
import { NotificationInput } from "../types/nofitication.types";

export const saveNotificationSettings = async (data: NotificationInput , patientId : string) => {
  try {
    const validatedData = validate(notificationSchema, data);
    await NotificationSettingsRepo(validatedData, patientId);

    await updateMedicationScheduleRepo(
      patientId,
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


export const getNotificationSettings = async (patientId: string) => {


  const data = await getNotificationSettingsRepo(patientId);


  return data ?? null;
};