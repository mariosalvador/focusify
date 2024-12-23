import { CardTask } from "@/components/apk/card-task";
import { DialogNewGoals } from "@/components/apk/dialogNewGoals";
import React from "react";

const GoalsScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Minhas Metas</h1>

        <DialogNewGoals>
          <button
            className="bg-green-600/90 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            + Nova Meta
          </button>
        </DialogNewGoals>
      </header>

      {/* Goals List */}
      <section className="flex-1 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Metas Ativas</h2>

        <div className="space-y-4">

          <CardTask tittle="Aprender TypeScript" progress={60} finished="30 de Dezembro" />

          <CardTask tittle="Construir um aplicativo mobile" progress={80} finished="30 de Janeiro" />

          <CardTask tittle="Aprender Next.js" progress={50} finished="30 de Fevereiro" />

        </div>

        <p className="text-sm text-gray-600 w-full text-center mt-4 hover:underline hover:text-gray-800 cursor-pointer">ver todas</p>
      </section>

      {/* Completed Goals */}
      <section className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Metas Concluídas</h2>
        <div className="space-y-4">
          <CardTask tittle="Aprender React" progress={100} finished="20 de Novembro" />

          <CardTask tittle="Construir um aplicativo web" progress={100} finished="20 de Dezembro" />

          <div className="p-4 bg-green-100 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-gray-800">Organizar meu ambiente de trabalho</h3>
                <p className="text-xs text-gray-600">Concluída em: 10 de Dezembro</p>
              </div>
              <span className="text-green-600 font-semibold">100%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoalsScreen;