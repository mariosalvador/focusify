"use client";
import React, { useState, useEffect } from "react";

const PomodoroScreen: React.FC = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [isBreak, setIsBreak] = useState(false); // Track if it's a break

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
      if (isBreak) {
        alert("Pausa concluída! Vamos voltar ao foco.");
        setTime(25 * 60); // Reset to focus time
        setIsBreak(false);
      } else {
        alertUser();
        setCycles((prevCycles) => prevCycles + 1);
        setTime(5 * 60); // Short break time
        setIsBreak(true);
      }
    }
  }, [time, isRunning, isBreak]);

  const alertUser = () => {
    // Play sound alert
    const audio = new Audio("/alert-sound.mp3");
    audio.play();

    // Send browser notification
    if (Notification.permission === "granted") {
      new Notification("Pomodoro concluído! Hora de uma pausa.");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
    setIsBreak(false);
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
        <p className="text-gray-600">Aumente sua produtividade com ciclos de foco e pausas.</p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <div className={`text-6xl font-bold mb-4 ${isBreak ? "text-blue-500" : "text-gray-800"}`}>
          {formatTime(time)}
        </div>
        <p className="text-gray-600 mb-4">{isBreak ? "Pausa" : "Foco"}</p>
        <div className="flex space-x-4">
          <button
            onClick={toggleTimer}
            className={`py-2 px-6 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${isRunning ? "bg-red-500 hover:bg-red-600 focus:ring-red-400" : "bg-green-500 hover:bg-green-600 focus:ring-green-400"
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
          <span className="text-gray-800 font-bold">
            {Math.floor((cycles * 25) / 60)} horas {cycles * 25 % 60} minutos
          </span>
        </div>
      </section>

    </div>
  );
};

export default PomodoroScreen;
