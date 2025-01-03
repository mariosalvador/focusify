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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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


  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validar tarefa principal
    if (!createGoal.title) newErrors["title"] = "O título é obrigatório.";

    if (createGoal.title.length < 5) {
      newErrors["title"] = "O título da tarefa deve ser maior que 5 caracteres.";
    }
    if (!createGoal.startDate)
      newErrors["startDate"] = "A data de início é obrigatória.";
    if (!createGoal.endDate)
      newErrors["endDate"] = "A data de término é obrigatória.";

    // Validar subtarefas
    createGoal.subTasks.forEach((task) => {
      if (!task.title)
        newErrors[`subTasks.${task.id}.title`] = "O título da subtarefa é obrigatório.";

      if (task.title && task.title.length < 5) {
        newErrors[`subTasks.${task.id}.title`] = "O título da subtarefa deve ser maior que 5 caracteres.";
      }

      if (!task.startDate)
        newErrors[`subTasks.${task.id}.startDate`] = "A data de início é obrigatória.";
      if (!task.endDate)
        newErrors[`subTasks.${task.id}.endDate`] = "A data de término é obrigatória.";

      // Validar se as datas das subtarefas estão entre as datas da tarefa principal
      if (task.startDate && createGoal.startDate && createGoal.endDate && (task.startDate < createGoal.startDate || task.startDate > createGoal.endDate)) {
        newErrors[`subTasks.${task.id}.startDate`] = "A data de início da subtarefa deve estar entre as datas da tarefa principal.";
      }
      if (task.endDate && createGoal.startDate && createGoal.endDate && (task.endDate < createGoal.startDate || task.endDate > createGoal.endDate)) {
        newErrors[`subTasks.${task.id}.endDate`] = "A data de término da subtarefa deve estar entre as datas da tarefa principal.";
      }
    });

    return newErrors;
  };
  const handleCreateGoal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Formatar os dados
    const formatedGoal = {
      ...createGoal,
      userId: user?.id || "",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      subTasks: createGoal.subTasks.map(({ id, ...task }) => task),
    };

    console.log("Validated Goal:", formatedGoal);

    // Enviar dados ao backend
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await goalsRoute.createGoals(formatedGoal);
    // console.log("Response:", response);
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
              <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700" type="submit">
                Criar Meta
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};