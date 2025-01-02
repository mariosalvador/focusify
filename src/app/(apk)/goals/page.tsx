import { DialogNewGoals } from "@/components/apk/dialogNewGoals";
import React from "react";
import { ActiveGoals } from "./activeGoals";
import { CompletedGoals } from "./completedGoals";

const GoalsScreen: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-6">
      {/* Header */}
      <header className="flex flex-col items-start sm:flex-row sm:items-center justify-between  mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Minhas Metas</h1>

        <DialogNewGoals>
          <button
            className="bg-green-600/90 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            + Nova Meta
          </button>
        </DialogNewGoals>
      </header>
 
      {/* Goals List */}
      <section className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4">
    
        <ActiveGoals />
        <p className="text-sm  text-gray-600 w-full text-center mt-4 hover:underline hover:text-gray-800 cursor-pointer">
          ver todas
        </p>
      </section>

      {/* Completed Goals */}
      <section className="bg-white flex flex-col justify-between shadow-md rounded-lg p-4 mt-6">
        <CompletedGoals />

        <p className="text-sm  text-gray-600 w-full text-center mt-4 hover:underline hover:text-gray-800 cursor-pointer">
          ver todas
        </p>
      </section>
    </div>
  );
};

export default GoalsScreen;