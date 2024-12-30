"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash } from "lucide-react";
import { DatePicker } from "../ui/datePicker";

interface SubTask {
  id: number;
  title: string;
  startDate: Date | null;
  endDate: Date | null;
}

export const DialogNewGoals = ({ children }: { children: React.ReactNode }) => {
  const [subTasks, setSubTasks] = useState<SubTask[]>([
    { id: 1, title: "", startDate: null, endDate: null },
  ]);

  const handleAddSubTask = () => {
    setSubTasks((prev) => [
      ...prev,
      { id: prev.length + 1, title: "", startDate: null, endDate: null },
    ]);
  };

  const handleRemoveSubTask = (id: number) => {
    setSubTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSubTaskChange = (id: number, key: keyof SubTask, value: any) => {
    setSubTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, [key]: value } : task))
    );
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
        <div className="space-y-4 overflow-auto">
          <div>
            <Label htmlFor="main-task" className="block text-sm font-medium mb-2">
              Tarefa Principal
            </Label>
            <Input
              id="main-task"
              placeholder="Digite o título da tarefa principal"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <Label className="block text-sm font-medium">Subtarefas</Label>
            {subTasks.map((task, index) => (
              <div
                key={task.id}
                className="flex flex-col gap-4 border-b pb-3 mb-3 last:border-none last:pb-0 last:mb-0"
              >
                <span className="text-sm font-medium text-gray-500">
                  {index + 1}.
                </span>
                <div className="flex gap-4">
                  <Input
                    placeholder={`Subtarefa ${task.id}`}
                    value={task.title}
                    onChange={(e) =>
                      handleSubTaskChange(task.id, "title", e.target.value)
                    }
                    className="flex-1"
                  />

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500"
                    onClick={() => handleRemoveSubTask(task.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex gap-4">
                  <DatePicker
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                    selected={task.startDate}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                    onChange={(date) =>
                      handleSubTaskChange(task.id, "startDate", date)
                    }
                    className="flex-1"
                    placeholderText="Início"
                  />
                  <DatePicker
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                    selected={task.endDate}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                    onChange={(date) =>
                      handleSubTaskChange(task.id, "endDate", date)
                    }
                    className="flex-1"
                    placeholderText="Fim"
                  />
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-green-700 border-green-700"
              onClick={handleAddSubTask}
            >
              <Plus className="h-4 w-4" />
              Adicionar Subtarefa
            </Button>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancelar</Button>
          <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">Criar Meta</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
