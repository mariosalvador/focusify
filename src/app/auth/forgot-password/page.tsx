"use client";
import { redirect } from "next/navigation";


export default function ForgotPassword() {
  return (
     <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
          {/* Título do perfil */}
          <h1 className="text-4xl font-bold text-primary mb-4">Esqueceu a Senha</h1>
    
          {/* Mensagem de status */}
          <div className="text-center max-w-md">
            <p className="text-lg text-muted-foreground mb-2">
              Este recurso ainda não está disponível. Estamos trabalhando nisso para trazer a melhor experiência para você!
            </p>
            <p className="text-base text-gray-600">
              Enquanto isso, aproveite os outros recursos disponíveis na plataforma. 🚀
            </p>
          </div>
    
          {/* Ícone de progresso ou construção */}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6m9-10.5a9.003 9.003 0 00-8.334 13.065A9.003 9.003 0 0012 21a9.003 9.003 0 008.334-4.935A9.003 9.003 0 0012 3z"
              />
            </svg>
          </div>
    
          {/* Botão de navegação ou ação */}
          <div className="mt-4">
            <button
              className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-md shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              onClick={() => redirect('/home')}
            >
              Explorar Recursos
            </button>
          </div>
        </div>
  );
}