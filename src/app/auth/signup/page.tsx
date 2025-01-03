"use client";

import { toast } from "@/hooks/use-toast";
import { _axios } from "@/lib/axios";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const formData = {
    name: fullName,
    email,
    phone_number: phone,
    password,
  };

  const resetAllInputs = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setAcceptedTerms(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    // Validação de espaços em branco
    if (!fullName.trim()) {
      alert("O nome completo não pode conter apenas espaços.");
      setLoading(false);
      return;
    }
  
    if (!email.trim()) {
      alert("O email não pode conter apenas espaços.");
      setLoading(false);
      return;
    }
  
    if (!phone.trim()) {
      alert("O número de telefone não pode conter apenas espaços.");
      setLoading(false);
      return;
    }
  
    if (!password.trim() || !confirmPassword.trim()) {
      alert("A senha e a confirmação de senha não podem conter apenas espaços.");
      setLoading(false);
      return;
    }
  
    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      setLoading(false);
      return;
    }
  
    // Validação de formato de telefone
    const phoneRegex = /^[0-9+\-() ]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      alert("Por favor, insira um número de telefone válido.");
      setLoading(false);
      return;
    }
  
    // Validação de tamanho da senha
    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      setLoading(false);
      return;
    }
  
    // Validação de senha e confirmação de senha
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      setLoading(false);
      return;
    }
  
    // Validação de aceite dos termos
    if (!acceptedTerms) {
      alert("Você deve aceitar os termos e condições para prosseguir.");
      setLoading(false);
      return;
    }
  
    // Enviar os dados
    try {
      const response = await _axios.post("/user/create", formData);
      console.log("Response:", response.data);
      setLoading(false);
      toast({
        variant: "default",
        title: "Success",
        description: "Usuário criado com sucesso!",
      });
      resetAllInputs();
      redirect("/auth/login");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao criar usuário.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-muted">
      <div className="w-full max-w-md p-6 bg-background rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-primary mb-6">
          Create Your Account
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Junte-se ao Focusify e comece sua jornada de produtividade!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="full-name" className="block text-sm font-medium text-foreground">
              Nome completo
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
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Telefone
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
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-foreground">
              Confirmar senha
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
              Aceito os{" "}
              <a href="/terms" className="text-primary hover:underline">
                Termos e Condições
              </a>{" "}
              e{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Políticas de Privacidades
              </a>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
           Já tem uma conta?{" "}
            <a href="/auth/login" className="text-primary hover:underline">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
