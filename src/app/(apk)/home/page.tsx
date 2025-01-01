import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { PlusIcon } from "lucide-react";
import React from "react";
import { ActiveGoals } from "../goals/activeGoals";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col px-4  ">

      <div className="w-full flex justify-end mb-5">
        <div className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">Meta semanal: 60% completa</div>
      </div>

      {/* Weekly Progress */}
      <section className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Progresso Semanal</h2>
        <div className="flex justify-center items-center mt-4">
          <AnimatedCircularProgressBar
            value={60}
            max={100}
            min={0}
            gaugePrimaryColor="blue"
            gaugeSecondaryColor="gray"
            className="w-40 h-40"
          />
        </div>
        <p className="mt-4 text-center text-gray-600">Faltam 2 dias para completar sua meta semanal!</p>
      </section>

      {/* Task List */}

      <section className="flex-1 flex flex-col justify-between bg-white shadow-md rounded-lg p-4">
        <ActiveGoals />
        <p className="text-sm  text-gray-600 w-full text-center mt-4 hover:underline hover:text-gray-800 cursor-pointer">
          ver todas
        </p>
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
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full size-14 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Adicionar nova tarefa"
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HomeScreen;
