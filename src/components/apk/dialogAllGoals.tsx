import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "../ui/progress";
import { Button } from "@/components/ui/button";
import { Trash2, PlusCircle } from "lucide-react";
import { DayPicker } from "react-day-picker"; 
import "../../app/(apk)/goals/style.css";

interface IDialogAllGoalsProps {
  children: React.ReactNode;
}

export const DialogAllGoals = ({ children }: IDialogAllGoalsProps) => {
  const completedDays = ["2024-12-20", "2024-12-21"]; // Exemplo de dias concluídos.
  const startDate = "2024-12-18"; // Data inicial da tarefa.
  const endDate = "2024-12-25"; // Data final da tarefa.

  return (
    <Dialog open={true}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[90%] md:min-w-[85%] min-h-[95%]">
        {/* Header Section */}
        <DialogHeader>
          <DialogTitle className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Task Info */}
            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Metas da Tarefa:</h2>
              <p className="text-2xl text-green-500 font-bold">Título da Tarefa</p>
              <div className="text-sm">
                <p>
                  <span className="font-medium">Início:</span>{" "}
                  <span className="text-green-500">{startDate}</span>
                </p>
                <p>
                  <span className="font-medium">Prazo:</span>{" "}
                  <span className="text-blue-500">{endDate}</span>
                </p>
              </div>
              <Progress value={60} className="h-2 mt-2 w-full text-white" />
            </section>

            {/* Calendar Section */}
            <div className="w-[300px]">
              <h3 className="text-sm font-medium mb-2">Calendário</h3>
              <DayPicker
        mode="range"
        selected={{
          from: new Date(startDate),
          to: new Date(endDate),
        }}
        modifiers={{
          completed: completedDays.map((date) => new Date(date)),
        }}
        modifiersClassNames={{
          completed: "react-daypicker-day--completed",
        }}
        className="react-daypicker"
      />
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-6">
          {/* Subtasks Section */}
          <section className="bg-gray-100 p-4 rounded-md shadow-sm">
            <header className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Subtarefas</h3>
              <Button variant="outline" className="flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                Adicionar Subtarefa
              </Button>
            </header>
            <div className="space-y-4">
              {/* Example of a subtask */}
              <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                <div>
                  <p className="font-medium">Subtarefa 1</p>
                  <Progress value={80} className="h-1 mt-2 w-full" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:bg-red-100"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Task Actions Section */}
          <section className="flex justify-between items-center">
            <Button variant="outline" className="flex items-center gap-2 text-red-500">
              <Trash2 className="w-4 h-4" />
              Excluir Tarefa
            </Button>
          </section>
        </div>

        {/* Footer Section */}
        <DialogFooter>
          <Button variant="default">Salvar Alterações</Button>
          <Button variant="secondary">Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
