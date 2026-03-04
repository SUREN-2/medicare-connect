import { z } from "zod";
import { loginSchema, signupSchema } from "../lib/validator";

export type LoginInput = z.infer<typeof loginSchema>;

export type SignupInput = z.infer<typeof signupSchema>;

export type User = {
  id: string;
  email?: string;
  phone?: string;
  created_at: string;
  app_metadata: Record<string, any>;
  user_metadata: Record<string, any>;
};