"use client";

import { useState } from "react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    // Lógica de cadastro aqui
    console.log("Full Name:", fullName, "Email:", email, "Phone:", phone, "Password:", password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="w-full max-w-md p-6 bg-background rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">
          Create Your Account
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Join Focusify and start your productivity journey!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="full-name" className="block text-sm font-medium text-foreground">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address
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
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="+1 234 567 890"
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
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-foreground">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-start space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              required
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I accept the{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Already have an account?{" "}
            <a href="/auth/login" className="text-primary hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
