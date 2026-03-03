import { supabase, supabaseAdmin } from "../lib/supabase";
import { LoginInput, SignupInput } from "../types/auth.types";

export const loginRepo = async ({ email, password }: LoginInput) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signupRepo = async ({ email, password, name }: SignupInput) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: undefined,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  const user = data.user;

  console.log(user);
  if (!user) {
    throw new Error("User creation failed");
  }

  const { error: profileError } = await supabaseAdmin.from("profiles").insert({
    id: user.id,
    name,
  });

  const { error: mediError } = await supabaseAdmin.from("medications").insert({
    patient_id: user.id,
    name : "Dolo",
    dosage: "500g",
  });

  if (mediError) {
    throw new Error(mediError.message);
  }

  if (profileError) {
    throw new Error(profileError.message);
  }

  return user;
};

export const logoutRepo = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
