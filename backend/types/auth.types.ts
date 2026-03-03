import { z } from "zod";
import { loginSchema, signupSchema } from "../lib/validator";

export type LoginInput = z.infer<typeof loginSchema>;

export type SignupInput = z.infer<typeof signupSchema>;
