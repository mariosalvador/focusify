"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/module/zustand-store/auth-store";
import { redirect } from "next/navigation";

export default function Logout() {
  const { logout } = useAuthStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      redirect("/auth/login");
    }, 1000);

    return () => clearTimeout(timer); 
  }, [logout]);

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] text-white">
    <div className="text-center space-y-6">
      <div className="relative inline-flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#E94560]"></div>
        <div className="absolute bg-[#1A1A2E] h-10 w-10 rounded-full"></div>
      </div>
      <h1 className="text-3xl font-bold text-[#E94560]">Deslogando...</h1>
    </div>
  </main>
  );
}
