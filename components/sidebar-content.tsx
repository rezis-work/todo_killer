"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarContent = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-gray-900 bg-gray-100"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  };

  return (
    <div className="flex-1 px-3 space-y-1">
      <nav className="space-y-1">
        <Link
          href="/dashboard"
          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive(
            "/dashboard"
          )}`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/all"
          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive(
            "/dashboard/all"
          )}`}
        >
          All
        </Link>
        <Link
          href="/dashboard/create-task"
          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive(
            "/dashboard/create-task"
          )}`}
        >
          Create Task
        </Link>
        <Link
          href="/dashboard/update-tasks"
          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive(
            "/dashboard/update-tasks"
          )}`}
        >
          Update Tasks
        </Link>
        <Link
          href="/dashboard/settings"
          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive(
            "/dashboard/settings"
          )}`}
        >
          Settings
        </Link>
      </nav>
    </div>
  );
};
