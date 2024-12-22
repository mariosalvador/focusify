"use client";
import React, { useState, useEffect } from "react";

interface Feedback {
  id: number;
  email: string;
  message: string;
  submittedAt: string;
}

const AdminFeedbackScreen: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    // Simulando a busca de feedbacks (substituir com requisição real a um backend)
    const mockFeedbacks: Feedback[] = [
      {
        id: 1,
        email: "usuario1@example.com",
        message: "Ótimo aplicativo, mas poderia ter mais opções de personalização. Ótimo aplicativo, mas poderia ter mais opções de personalização. Ótimo aplicativo, mas poderia ter mais opções de personalização. ",
        submittedAt: "2024-12-20 14:30",
      },
      {
        id: 2,
        email: "usuario2@example.com",
        message: "Encontrei alguns bugs ao usar a funcionalidade Pomodoro.",
        submittedAt: "2024-12-21 10:15",
      },
      {
        id: 3,
        email: "anonimo@example.com",
        message: "Seria bom adicionar um tutorial para novos usuários.",
        submittedAt: "2024-12-21 12:45",
      },
    ];
    setFeedbacks(mockFeedbacks);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Feedbacks dos Usuários</h1>
        <p className="text-gray-600">Visualize e gerencie os feedbacks enviados.</p>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        {feedbacks.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b text-left px-4 py-2 text-gray-700 font-medium">ID</th>
                <th className="border-b text-left px-4 py-2 text-gray-700 font-medium">E-mail</th>
                <th className="border-b text-left px-4 py-2 text-gray-700 font-medium">Mensagem</th>
                <th className="border-b text-left px-4 py-2 text-gray-700 font-medium">Data</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.id} className="odd:bg-gray-50 even:bg-white">
                  <td className="border-b px-4 py-2 text-gray-800">{feedback.id}</td>
                  <td className="border-b px-4 py-2 text-gray-800">{feedback.email || "Anônimo"}</td>
                  <td className="border-b px-4 py-2 text-gray-800">{feedback.message}</td>
                  <td className="border-b px-4 py-2 text-gray-800">{feedback.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">Nenhum feedback enviado até o momento.</p>
        )}
      </div>
    </div>
  );
};

export default AdminFeedbackScreen;
