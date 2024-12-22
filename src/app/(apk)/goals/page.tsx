import React from "react";

const GoalsScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Minhas Metas</h1>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          + Nova Meta
        </button>
      </header>

      {/* Goals List */}
      <section className="flex-1 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Metas Ativas</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-gray-800">Aprender TypeScript</h3>
                <p className="text-xs text-gray-600">Prazo: 30 de Dezembro</p>
              </div>
              <div className="w-1/3">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Concluído 6 de 10 módulos.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-gray-800">Completar Projeto Focusify</h3>
                <p className="text-xs text-gray-600">Prazo: 15 de Janeiro</p>
              </div>
              <div className="w-1/3">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Etapa atual: Design da interface.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-gray-800">Ler 5 livros de produtividade</h3>
                <p className="text-xs text-gray-600">Prazo: 31 de Março</p>
              </div>
              <div className="w-1/3">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Lido: 1 de 5 livros.</p>
          </div>
        </div>
      </section>

      {/* Completed Goals */}
      <section className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Metas Concluídas</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-gray-800">Aprender React</h3>
                <p className="text-xs text-gray-600">Concluída em: 20 de Novembro</p>
              </div>
              <span className="text-green-600 font-semibold">100%</span>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
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