"use client";
import { createClientComponentClient } from "@/supabase/client";

export function GoogleLoginButton() {
  const loginWithGoogle = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/dashboard`,
      },
    });
  };

  return (
    <button onClick={loginWithGoogle} className="btn">
      Continue with Google
    </button>
  );
}
