import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex items-center space-x-4">
            <Image src="/focusiSvg.svg" alt="Logo" width={150} height={50} priority />
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="#features" className="hover:underline hover:text-yellow-300 transition">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline hover:text-yellow-300 transition">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-yellow-300 transition">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Conquiste suas metas com <span className="text-green-500">foco total</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Transforme seu foco em resultados com o aplicativo que simplifica sua produtividade.
          </p>
          <Button
            className="bg-green-500 text-white py-3 px-8 rounded-md shadow-lg hover:bg-green-600 transition-all"
            asChild
          >
            <Link href="/auth/login">Comece Agora</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Funcionalidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-green-500 mb-2">Metas Personalizáveis</h4>
              <p className="text-gray-600">Crie e gerencie metas de acordo com suas necessidades.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-blue-500 mb-2">Pomodoro Integrado</h4>
              <p className="text-gray-600">Aumente seu foco com a técnica Pomodoro embutida.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-yellow-500 mb-2">Feedback de Progresso</h4>
              <p className="text-gray-600">Acompanhe seu progresso com estatísticas detalhadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">O que nossos usuários dizem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 font-medium mb-4">
                &quot;Focusify transformou a forma como gerencio meu tempo!&quot;
              </p>
              <span className="text-green-500 font-bold">- Ana Silva</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 font-medium mb-4">
                &quot;Nunca pensei que poderia alcançar tantas metas em tão pouco tempo.&quot;
              </p>
              <span className="text-green-500 font-bold">- João Souza</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 font-medium mb-4">
                &quot;A funcionalidade Pomodoro é incrível!&quot;
              </p>
              <span className="text-green-500 font-bold">- Marina Costa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Entre em contato</h3>
          <p className="text-gray-600 mb-8">Tem dúvidas? Fale conosco!</p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Seu E-mail"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Sua Mensagem"
                rows={5}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Focusify. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
