import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-2xl mb-8">
        Desculpe, a página que você  está  procurando não existe.
      </p>
     
      <div className="flex flex-col space-y-4 space-x-4">
        <Link href="/">
          <div className="py-2 px-4 border-2 border-gray-600 rounded-md hover:bg-gray-600 hover:text-white">
            Ir para a Landing Page
          </div>
        </Link>
        <Link href="/pomodoro">
          <div className="py-2 px-4 border-2 border-gray-600 rounded-md hover:bg-gray-600 hover:text-white">
            Ir para a página de pomodoro
          </div>
        </Link>
        <Link href="/auth/login">
          <div className="py-2 px-4 border-2 border-gray-600 rounded-md hover:bg-gray-600 hover:text-white">
            Ir para a página de Login
          </div>
        </Link>
      </div>
    </div>
  );
}

