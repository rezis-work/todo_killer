"use client";

import { logout } from "@/lib/auth/actions";

export const SignOutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Sign out
    </button>
  );
};
