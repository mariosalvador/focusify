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
import { validateGoal, ValidationErrors } from "@/module/validation/createGoals_Subtasks";


interface DialogNewGoalsProps {
  children: React.ReactNode;
}

export const DialogNewGoals: React.FC<DialogNewGoalsProps> = ({ children }) => {
  const { user } = useAuthStore();
  const [createGoal, setCreateGoal] = useState<GoalToCreate>({
    title: "",
    startDate: undefined,
    endDate: undefined,
    status: "PENDING",
    subTasks: [],
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoalChange = useCallback((key: keyof Goal, value: string | undefined) => {
    setCreateGoal((prev) => ({ ...prev, [key]: value }));
  }, []);

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

  const handleCreateGoal = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateGoal(createGoal);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    const formatedGoal = {
      ...createGoal,
      userId: user?.id || "",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      subTasks: createGoal.subTasks.map(({ id, ...task }) => task),
    };

    try {
      await goalsRoute.createGoals(formatedGoal);
      console.log("Meta criada com sucesso!", formatedGoal);
    } catch (error) {
      console.error("Erro ao criar meta:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              {errors["title"] && <p className="text-red-500 text-sm">{errors["title"]}</p>}
            </div>
            <div className="flex gap-4">
              <DatePicker
                selected={createGoal.startDate}
                onChange={(date) => handleGoalChange("startDate", date ? format(date, "yyyy-MM-dd") : undefined)}
                placeholder="Data de Início"
              />
              {errors["startDate"] && <p className="text-red-500 text-sm">{errors["startDate"]}</p>}
              <DatePicker
                selected={createGoal.endDate}
                onChange={(date) => handleGoalChange("endDate", date ? format(date, "yyyy-MM-dd") : undefined)}
                placeholder="Data de Fim"
              />
              {errors["endDate"] && <p className="text-red-500 text-sm">{errors["endDate"]}</p>}
            </div>
            <div className="space-y-4">
              <Label className="block text-sm font-medium">Subtarefas</Label>
              {createGoal.subTasks.map((task, index) => (
                <div key={task.id} className="flex flex-col gap-4 border-b pb-3 mb-3">
                  <div className="flex gap-4">
                    <div className="w-full">
                      <Input
                        placeholder={`Subtarefa ${index + 1}`}
                        value={task.title}
                        onChange={(e) => handleSubTaskChange(task.id, "title", e.target.value)}
                      />
                      {errors[`subTasks.${task.id}.title`] && (
                        <p className="text-red-500 text-sm">{errors[`subTasks.${task.id}.title`]}</p>
                      )}
                    </div>
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
                    <div className="w-full">
                      <DatePicker
                        selected={task.startDate}
                        onChange={(date) =>
                          handleSubTaskChange(task.id, "startDate", date ? format(date, "yyyy-MM-dd") : undefined)
                        }
                        placeholder="Início"
                      />
                      {errors[`subTasks.${task.id}.startDate`] && (
                        <p className="text-red-500 text-sm">{errors[`subTasks.${task.id}.startDate`]}</p>
                      )}
                    </div>
                    <div className="w-full">
                      <DatePicker
                        selected={task.endDate}
                        onChange={(date) =>
                          handleSubTaskChange(task.id, "endDate", date ? format(date, "yyyy-MM-dd") : undefined)
                        }
                        placeholder="Fim"
                      />
                      {errors[`subTasks.${task.id}.endDate`] && (
                        <p className="text-red-500 text-sm">{errors[`subTasks.${task.id}.endDate`]}</p>
                      )}
                    </div>
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

            <div className="flex justify-end space-x-4">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white">
                {isSubmitting ? "Cadastrando..." : "Criar Meta"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};