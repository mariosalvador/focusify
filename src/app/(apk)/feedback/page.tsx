"use client";
import React, { useState } from "react";

const FeedbackScreen: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Aqui você pode adicionar lógica para enviar o feedback para um backend ou serviço externo.
      console.log("Feedback enviado:", { feedback, email });
      setSubmitted(true);
      setFeedback("");
      setEmail("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Envie seu Feedback</h1>
        <p className="text-gray-600">Nos ajude a melhorar o Focusify!</p>
      </header>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
          <p>Obrigado pelo seu feedback! Nós o apreciaremos para futuras melhorias.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Seu e-mail (opcional):
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="exemplo@dominio.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Seu feedback:
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={5}
              placeholder="Nos diga como podemos melhorar..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Enviar Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackScreen;
