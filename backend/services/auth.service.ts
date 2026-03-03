import { loginRepo, signupRepo, logoutRepo } from "../repositories/auth.repo";
import { validate, loginSchema, signupSchema } from "../lib/validator";
import { LoginInput, SignupInput } from "../types/auth.types";

export const loginUser = async (data: LoginInput) => {
  const validatedData = validate(loginSchema, data);

  const user = await loginRepo(validatedData);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return {
    email: user.user?.email,
    access_token: user.session?.access_token,
    refresh_token: user.session?.refresh_token,
  };
};

export const signupUser = async (data: SignupInput) => {
  const validatedData = validate(signupSchema, data);

  const user = await signupRepo(validatedData);

  //   console.log(user);

  if (!user) {
    throw new Error("Unable to create user");
  }

  return {
    message: "Signup successful",
  };
};

export const logoutUser = async () => {
  await logoutRepo();
  return { message: "Logged out successfully" };
};
