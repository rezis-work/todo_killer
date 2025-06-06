"use server";

import { getSessionOrRedirect } from "@/lib/auth/helpers";

export default async function DashboardPage() {
  const user = await getSessionOrRedirect();
  return (
    <div>
      Welcome to your Dashboard{" "}
      <span className="text-indigo-600 capitalize">
        {user.email?.split("@")[0]}
      </span>
    </div>
  );
}
