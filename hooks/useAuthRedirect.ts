"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@/supabase/client";

export const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const supabase = createClientComponentClient();
      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        // user is logged in → redirect to dashboard
        router.replace("/dashboard");
      }
    };

    check();
  }, [router]);
};
