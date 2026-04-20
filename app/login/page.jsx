"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import React from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res =await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res)
    setLoading(false);
    if (res.error) return setError(res.error);
    router.push("/");
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="w-full max-w-sm p-8 rounded-2xl bg-gray-900 border border-gray-800">
          <h1 className="text-white text-2xl font-bold mb-6">Sign in</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm outline-none focus:ring-2 focus:ring-white/20"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm outline-none focus:ring-2 focus:ring-white/20"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-500 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full py-2 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            <Image
              src="https://www.google.com/favicon.ico"
              alt="Google"
              width={16}
              height={16}
            />
            Continue with Google{" "}
          </button>
          <p className="text-gray-500 text-sm text-center mt-6">
            No account?{" "}
            <a href="/register" className="text-white hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
