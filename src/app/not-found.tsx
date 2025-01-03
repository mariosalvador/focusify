import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
      {/* Ícone ilustrativo */}
      <div className="text-primary mb-6">
        <AlertCircle className="w-16 h-16" />
      </div>

      {/* Título da página */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Página não encontrada</h1>
      
      {/* Mensagem descritiva */}
      <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
        Desculpe, a página que você está procurando não existe ou foi movida. 
        Use os botões abaixo para navegar para outra área do site.
      </p>
      
      {/* Links de navegação */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="py-2 px-6 bg-primary text-white rounded-md shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Ir para a Landing Page
        </Link>
        <Link 
          href="/pomodoro" 
          className="py-2 px-6 bg-blue-500 text-white rounded-md shadow hover:bg-blue-500/90 focus:outline-none focus:ring-2 focus:ring-secondary/50"
        >
          Ir para a página de Pomodoro
        </Link>
        <Link 
          href="/auth/login" 
          className="py-2 px-6 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Ir para a página de Login
        </Link>
      </div>
    </div>
  );
}
