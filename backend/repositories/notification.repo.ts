import { supabaseAdmin } from "../lib/supabase";
import { AppError } from "../lib/error";
import { NotificationInput } from "../types/nofitication.types";

export const NotificationSettingsRepo = async (data: NotificationInput , patientId :string) => {
  const { error } = await supabaseAdmin.from("notification_settings").upsert(
    {
      patient_id: patientId,
      schedule_time: data.schedule_time,
      remainder_hours: data.remainder_hours,
      email: data.email,
      email_subject: data.email_subject,
      email_body: data.email_body,
      reminder_enabled: data.reminder_enabled,
    },
    { onConflict: "patient_id" },
  );

  console.log(error);
  if (error) throw new AppError(error.message, 500);
};

export const updateMedicationScheduleRepo = async (
  patientId: string,
  schedule_time: string,
) => {
  const { error } = await supabaseAdmin
    .from("medications")
    .update({ schedule_time })
    .eq("patient_id", patientId);

  if (error) throw new AppError(error.message, 500);
};


export const getNotificationSettingsRepo = async (patientId: string) => {
  const { data, error } = await supabaseAdmin
    .from("notification_settings")
    .select("*")
    .eq("patient_id", patientId)
    .maybeSingle(); 

  if (error) throw new AppError(error.message, 500);

  return data;
};