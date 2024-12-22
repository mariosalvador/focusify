"use client";

import React, { useState } from "react";

const SettingsScreen: React.FC = () => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleWorkDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkDuration(Number(e.target.value));
  };

  const handleBreakDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreakDuration(Number(e.target.value));
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Configurações</h1>
        <p className="text-gray-600">Personalize sua experiência com o Pomodoro Focus.</p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Ajustes de Duração</h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="work-duration">
            Duração do Trabalho (minutos):
          </label>
          <input
            id="work-duration"
            type="number"
            value={workDuration}
            onChange={handleWorkDurationChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="break-duration">
            Duração da Pausa (minutos):
          </label>
          <input
            id="break-duration"
            type="number"
            value={breakDuration}
            onChange={handleBreakDurationChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Ativar Notificações:</span>
          <button
            onClick={toggleNotifications}
            className={`py-2 px-4 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
              notificationsEnabled ? "bg-green-500 hover:bg-green-600 focus:ring-green-400" : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"
            }`}
          >
            {notificationsEnabled ? "Ativado" : "Desativado"}
          </button>
        </div>

        <button
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Salvar Alterações
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
