"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted mx-4">
      <div className="w-full max-w-md p-6 bg-background rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">
          Welcome to Focusify
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Please sign in to your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email 
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full  py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Don&apos;t have an account?{" "}
            <a href="/auth/signup" className="text-primary hover:underline">
              Sign Up
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-sm text-muted-foreground hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
