"use client";
import { Button } from "@/components/ui/button";
import { feedbackRoute } from "@/module/services/Api/routes/feedback";
import { useAuthStore } from "@/module/zustand-store/auth-store";
import { RotateCw } from "lucide-react";
import React, { useState } from "react";

const FeedbackScreen: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();

  if (!user) {
    return <div>Por favor, aguarde enquanto carregamos os dados...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validações do campo de feedback
    if (feedback.trim().length < 10) {
      setError("O feedback deve ter pelo menos 10 caracteres.");
      return;
    }
    if (feedback.trim().length > 500) {
      setError("O feedback não pode exceder 500 caracteres.");
      return;
    }

    try {
      setIsLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await feedbackRoute.createFeedback({
        message: feedback.trim(),
        userId: user?.id,
      });

      setSubmitted(true);
      setFeedback("");
    } catch (err) {
      console.error("Erro ao enviar feedback:", err);
      setError("Ocorreu um erro ao enviar seu feedback. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Envie seu Feedback</h1>
        <p className="text-gray-600">Nos ajude a melhorar o Focusify!</p>
      </header>

      {submitted ? (
        <>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
            <p>Obrigado pelo seu feedback! Nós o apreciaremos para futuras melhorias.</p>
          </div>
          <Button type="button" variant={"outline"} className="mt-4" onClick={() => setSubmitted(false)}>
            Enviar outro feedback
            <RotateCw />
          </Button>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Seu feedback:
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${error ? "border-red-500" : "border-gray-300"
                }`}
              rows={5}
              placeholder="Nos diga como podemos melhorar..."
              required
            ></textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 font-bold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
              }`}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar Feedback"}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackScreen;
