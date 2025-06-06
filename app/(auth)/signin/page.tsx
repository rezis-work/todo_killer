"use client";

import { loginWithEmail } from "@/lib/auth/actions";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, formAction] = useActionState(loginWithEmail, null);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">
          Sign in to your account
        </h1>
        <p className="text-gray-600">
          Enter your credentials to access your dashboard
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in
      </button>

      <p className="text-sm text-gray-500 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-indigo-600 hover:text-indigo-700">
          Sign up
        </Link>
      </p>

      {state && <p className="mt-2 text-sm text-red-600">{state}</p>}
    </form>
  );
}
