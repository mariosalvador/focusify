"use client";

import { toast } from "@/hooks/use-toast";
import { loginRoute } from "@/module/services/Api/routes/auth/login";
import { useAuthStore } from "@/module/zustand-store/auth-store";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Verificando se os campos estão preenchidos corretamente
      const response = await loginRoute.login(email, password);
      const { token, user } = response;

      login(user, token);

      toast({
        title: "Success",
        description: "You have successfully logged in",
        duration: 2000,
      });
      window.location.href = "/home";
    } catch (error) {
      console.error("Error during login process:", error);
      toast({
        title: "Error",
        description: "Invalid email or password",
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md p-6 bg-background rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">
          Bem-vindo ao Focusify
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Faça login na sua conta
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
              Senha
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
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Ainda não possui uma conta?{" "}
            <a href="/auth/signup" className="text-primary hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <a href="/auth/forgot-password" className="text-sm text-muted-foreground hover:underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
}
