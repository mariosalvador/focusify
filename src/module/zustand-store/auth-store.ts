import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie"; // Biblioteca para manipular cookies

interface User {
  id: string;
  email: string;
  name: string;
  phone_number: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (user, token) => {
        // Salva o token no estado e no cookie
        Cookies.set("focusify-token", token, { expires: 1 }); // Expira em 7 dias
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },
      logout: () => {
        // Remove o token do estado e do cookie
        Cookies.remove("focusify-token");
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "focusify-storage",
    }
  )
);