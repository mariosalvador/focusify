import Image from "next/image";
import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col px-5 py-5 ">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 bg-white shadow-md rounded-lg px-5 py-4">
        <Image src="/focusi.svg" alt="Logo" width={150} height={50} priority />

        <div className="flex items-center gap-5">
          <span>Mário Salvador</span>
          <div className="size-10 rounded-full bg-slate-200"></div>
        </div>
      </header>

      <div className="w-full flex justify-end mb-5">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md">Meta semanal: 70% completa</div>
      </div>

      {/* Weekly Progress */}
      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Progresso Semanal</h2>
        <div className="flex justify-center items-center mt-4">
          <div className="relative w-32 h-32">
            <svg className="absolute inset-0" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                strokeWidth="10"
                className="text-gray-300"
                fill="none"
                stroke="currentColor"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                strokeWidth="10"
                className="text-green-500"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="85"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">70%</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-600">Faltam 2 dias para completar sua meta semanal!</p>
      </section>

      {/* Task List */}
      <section className="bg-white shadow-md rounded-lg p-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-800">Suas Tarefas</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-gray-800">Estudar React</h3>
              <p className="text-xs text-gray-600">Prazo: Hoje</p>
            </div>
            <div className="w-1/3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-gray-800">Planejar semana</h3>
              <p className="text-xs text-gray-600">Prazo: Esta semana</p>
            </div>
            <div className="w-1/3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-gray-800">Enviar e-mails pendentes</h3>
              <p className="text-xs text-gray-600">Prazo: Amanhã</p>
            </div>
            <div className="w-1/3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Dicas para Hoje</h2>
        <ul className="list-disc pl-5 text-gray-600 mt-2">
          <li>Use a técnica Pomodoro para se manter focado.</li>
          <li>Priorize tarefas importantes pela manhã.</li>
          <li>Faça pausas regulares para melhorar a produtividade.</li>
        </ul>
      </section>

      {/* Floating Add Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full size-14 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Adicionar nova tarefa"
      >
        +
      </button>
    </div>
  );
};

export default HomeScreen;
