import { CardTask } from "@/components/apk/card-task";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col px-5 py-5 ">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 bg-white shadow-md rounded-lg px-5 py-4">
        <Image src="/focusi.svg" alt="Logo" width={150} height={50} priority />

        <div className="flex items-center gap-3">
          <span>Mário Salvador</span>
          <div className="size-10 rounded-full bg-slate-200"></div>
        </div>
      </header>

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

      <section className="bg-white shadow-md rounded-lg p-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-800">Suas Tarefas</h2>
        <div className="mt-4 space-y-4">

          <CardTask tittle="Planejar semana" progress={50} finished="Hoje" />

          <CardTask tittle="Estudar React" progress={30} finished="Amanhã" />

          <CardTask tittle=" Praticar judo" progress={30} finished="Amanhã" />

          <p className="w-full text-center text-gray-400 font-medium text-sm cursor-pointer hover:text-gray-600 hover:underline">Ver mais</p>
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
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full size-14 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Adicionar nova tarefa"
      >
       <PlusIcon className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default HomeScreen;
