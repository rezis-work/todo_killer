"use server";

import { redirect } from "next/navigation";
import { createClientServerClient } from "@/supabase/client";

export async function getSessionOrRedirect(path = "/signin") {
  const supabase = createClientServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect(path);

  return data.user;
}
