import { z } from "zod";
import { notificationSchema } from "../lib/validator";
export type NotificationInput = z.infer<typeof notificationSchema>;
