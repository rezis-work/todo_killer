"use server";

import { redirect } from "next/navigation";
import { createClientServerClient } from "@/supabase/client";
import { AuthSchema } from "./schema";

export async function registerWithEmail(
  prevState: string | null,
  formData: FormData
) {
  const supabase = createClientServerClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log(email, password);

  const result = AuthSchema.safeParse({ email, password });

  if (!result.success) return result.error.errors[0].message;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return error.message;

  redirect("/dashboard");
}

export async function loginWithEmail(
  prevState: string | null,
  formData: FormData
) {
  const supabase = createClientServerClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = AuthSchema.safeParse({ email, password });

  if (!result.success) return result.error.errors[0].message;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return error.message;

  redirect("/dashboard");
}

export async function logout() {
  const supabase = createClientServerClient();
  await supabase.auth.signOut();
  redirect("/signin");
}
