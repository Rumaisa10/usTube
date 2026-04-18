"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Registerpage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(`/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json()
    setLoading(false)

    if (!res.ok) return setError(data.error)
    router.push('/login')
  };
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="border p-6 rounded-lg w-full max-w-sm"
        >
          <fieldset className="flex flex-col gap-4">
            <legend className="text-xl font-semibold mb-2">Register</legend>

            <div>
              <label className="block mb-1">Name</label>
              <input
                name="name"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="border p-2 w-full rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                name="password"
                type="password"
                className="border p-2 w-full rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" className="bg-black text-white p-2 rounded">
              Sign Up
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}
