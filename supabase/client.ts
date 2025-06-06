import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClientComponentClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const createClientServerClient = () => {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => (await cookies()).getAll(),
        setAll: async (cookiesToSet) => {
          cookiesToSet.forEach(async (cookie) => {
            (await cookieStore).set(cookie.name, cookie.value, cookie.options);
          });
        },
      },
    }
  );
};
