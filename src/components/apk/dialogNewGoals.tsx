"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useCallback, useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash } from "lucide-react";
import { DatePicker } from "../ui/datePicker";
import { format } from "date-fns";
import { useAuthStore } from "@/module/zustand-store/auth-store";
import { goalsRoute } from "@/module/services/Api/routes/goals";

export const DialogNewGoals = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();
  const [createGoal, setCreateGoal] = useState<GoalToCreate>({
    title: "",
    startDate: undefined,
    endDate: undefined,
    status: "PENDING",
    subTasks: [],
  });

  const handleAddSubTask = useCallback(() => {
    setCreateGoal((prev) => ({
      ...prev,
      subTasks: [
        ...prev.subTasks,
        {
          id: `${prev.subTasks.length + 1}`,
          title: "",
          startDate: undefined,
          endDate: undefined,
          status: "PENDING",
        },
      ],
    }));
  }, []);

  const handleRemoveSubTask = useCallback((id?: string) => {
    setCreateGoal((prev) => ({
      ...prev,
      subTasks: prev.subTasks.filter((task) => task.id !== id),
    }));
  }, []);

  const handleSubTaskChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (id: string | undefined, key: keyof SubTask, value: any) => {
      setCreateGoal((prev) => ({
        ...prev,
        subTasks: prev.subTasks.map((task) =>
          task.id === id ? { ...task, [key]: value } : task
        ),
      }));
    },
    []
  );

  const handleGoalChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: keyof GoalToCreate, value: any) => {
      setCreateGoal((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const formatedGoal = {
    ...createGoal,
    userId: user?.id,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    subTasks: createGoal.subTasks.map(({ id, ...task }) => ({
      ...task,
    }))
  };

  const handleCreateGoal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Formatado:", formatedGoal);

    const response = await goalsRoute.createGoals(formatedGoal);
    console.log("Response:", response);

  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-md w-full h-max max-h-[95%] space-y-6 p-6 overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar nova meta</DialogTitle>
          <DialogDescription>
            Adicione detalhes da tarefa principal e subtarefas.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateGoal}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="main-task" className="block text-sm font-medium mb-2">
                Tarefa Principal
              </Label>
              <Input
                id="main-task"
                placeholder="Digite o título da tarefa principal"
                value={createGoal.title}
                onChange={(e) => handleGoalChange("title", e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <DatePicker
                selected={createGoal.startDate}
                onChange={(date) => handleGoalChange("startDate", date ? format(date, "yyyy-MM-dd") : undefined)}
                placeholder="Data de Início"
              />
              <DatePicker
                selected={createGoal.endDate}
                onChange={(date) => handleGoalChange("endDate", date ? format(date, "yyyy-MM-dd") : undefined)}
                placeholder="Data de Fim"
              />
            </div>
            <div className="space-y-4">
              <Label className="block text-sm font-medium">Subtarefas</Label>
              {createGoal.subTasks.map((task, index) => (
                <div key={task.id} className="flex flex-col gap-4 border-b pb-3 mb-3">
                  <div className="flex gap-4">
                    <Input
                      placeholder={`Subtarefa ${index + 1}`}
                      value={task.title}
                      onChange={(e) => handleSubTaskChange(task.id, "title", e.target.value)}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500"
                      onClick={() => handleRemoveSubTask(task.id)}
                      type="button"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-4">
                    <DatePicker
                      selected={task.startDate}
                      onChange={(date) => handleSubTaskChange(task.id, "startDate", date ? format(date, "yyyy-MM-dd") : undefined)}
                      placeholder="Início"
                    />
                    <DatePicker
                      selected={task.endDate}
                      onChange={(date) =>
                        handleSubTaskChange(
                          task.id,
                          "endDate",
                          date ? format(date, "yyyy-MM-dd") : undefined
                        )
                      }
                      placeholder="Fim"
                    />
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 text-green-700 border-green-700"
                onClick={handleAddSubTask}
                type="button"
              >
                <Plus className="h-4 w-4" />
                Adicionar Subtarefa
              </Button>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700" type="submit">
              Criar Meta
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};