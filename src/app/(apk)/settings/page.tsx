"use client";
import React, { useState } from "react";

const SettingsScreen: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [googleCalendarConnected, setGoogleCalendarConnected] = useState(false);
  const [microsoftToDoConnected, setMicrosoftToDoConnected] = useState(false);
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleGoogleCalendar = () => {
    setGoogleCalendarConnected((prev) => !prev);
  };

  const toggleMicrosoftToDo = () => {
    setMicrosoftToDoConnected((prev) => !prev);
  };

  const toggleReminders = () => {
    setRemindersEnabled((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Configurações</h1>
        <p className="text-gray-600">Gerencie suas preferências e integrações.</p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Perfil do Usuário */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Perfil do Usuário</h2>
          <div className="flex items-center space-x-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://via.placeholder.com/64"
              alt="Avatar do usuário"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-bold">João da Silva</p>
              <p className="text-gray-600 text-sm">joao.silva@example.com</p>
            </div>
          </div>
        </section>

        {/* Temas */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Temas</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Tema:</span>
            <button
              onClick={toggleTheme}
              className={`py-2 px-4 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                theme === "light"
                  ? "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
                  : "bg-gray-800 hover:bg-gray-900 focus:ring-gray-600"
              }`}
            >
              {theme === "light" ? "Claro" : "Escuro"}
            </button>
          </div>
        </section>

        {/* Integrações */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Integrações</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Google Calendar:</span>
            <button
              onClick={toggleGoogleCalendar}
              className={`py-2 px-4 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                googleCalendarConnected
                  ? "bg-green-500 hover:bg-green-600 focus:ring-green-400"
                  : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"
              }`}
            >
              {googleCalendarConnected ? "Conectado" : "Conectar"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Microsoft To Do:</span>
            <button
              onClick={toggleMicrosoftToDo}
              className={`py-2 px-4 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                microsoftToDoConnected
                  ? "bg-green-500 hover:bg-green-600 focus:ring-green-400"
                  : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"
              }`}
            >
              {microsoftToDoConnected ? "Conectado" : "Conectar"}
            </button>
          </div>
        </section>

        {/* Notificações */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Notificações</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Lembretes e Alertas:</span>
            <button
              onClick={toggleReminders}
              className={`py-2 px-4 rounded-md text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                remindersEnabled
                  ? "bg-green-500 hover:bg-green-600 focus:ring-green-400"
                  : "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"
              }`}
            >
              {remindersEnabled ? "Ativado" : "Desativado"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsScreen;
