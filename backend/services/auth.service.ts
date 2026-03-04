import { loginRepo, signupRepo, logoutRepo, refreshRepo } from "../repositories/auth.repo";
import { validate, loginSchema, signupSchema } from "../lib/validator";
import { LoginInput, SignupInput } from "../types/auth.types";
import { Session } from "@supabase/supabase-js";

export const loginUser = async (data: LoginInput) => {
  const validatedData = validate(loginSchema, data);

  const user = await loginRepo(validatedData);

  

  if (!user?.session) {
    return null;
  }

  return user.session;
  
};

export const signupUser = async (data: SignupInput) => {

  // console.log(data)
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
  const result = await logoutRepo();

  if (!result) {
    return null;
  }

  return true;
};


export const refreshUser = async (refreshToken: string): Promise<Session | null> => {
  const data = await refreshRepo(refreshToken);

  if (!data?.session) {
    return null;
  }

  return data.session;
};
