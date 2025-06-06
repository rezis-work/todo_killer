import { User } from "@supabase/supabase-js";
import { SignOutButton } from "./sigout-button";

export async function DashboardNavbar({ user }: { user: User }) {
  return (
    <div className="bg-white shadow-sm">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-medium text-gray-900">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">{user.email}</p>
            </div>
          </div>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
