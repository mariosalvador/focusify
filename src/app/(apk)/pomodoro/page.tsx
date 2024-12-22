"use client";
import React, { useState, useEffect } from "react";

const PomodoroScreen: React.FC = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (time === 0 && isRunning) {
      setIsRunning(false);
      setCycles((prevCycles) => prevCycles + 1);
      alert("Pomodoro concluído! Faça uma pausa.");
    }
  }, [time, isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Pomodoro Focus</h1>
        <p className="text-gray-600">Aumente sua produtividade com ciclos de foco.</p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <div className="text-6xl font-bold text-gray-800 mb-4">{formatTime(time)}</div>
        <div className="flex space-x-4">
          <button
            onClick={toggleTimer}
            className={`py-2 px-6 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
              isRunning ? "bg-red-500 hover:bg-red-600 focus:ring-red-400" : "bg-green-500 hover:bg-green-600 focus:ring-green-400"
            }`}
          >
            {isRunning ? "Pausar" : "Iniciar"}
          </button>
          <button
            onClick={resetTimer}
            className="py-2 px-6 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Resetar
          </button>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Estatísticas</h2>
        <div className="flex justify-between">
          <span className="text-gray-600">Ciclos completos:</span>
          <span className="text-gray-800 font-bold">{cycles}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Tempo total focado:</span>
          <span className="text-gray-800 font-bold">{Math.floor((cycles * 25) / 60)} horas {cycles * 25 % 60} minutos</span>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Configurações</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Duração do Pomodoro (minutos)</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={time / 60}
              onChange={(e) => setTime(Number(e.target.value) * 60)}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Notificações</label>
            <select
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={(e) => alert(`Notificação configurada: ${e.target.value}`)}
            >
              <option value="ativadas">Ativadas</option>
              <option value="desativadas">Desativadas</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PomodoroScreen;
