"use client";

import React from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ActiveGoals } from "@/app/(apk)/goals/activeGoals";
import { Button } from "../ui/button";

interface IDialogAllGoalsProps {
  children: React.ReactNode;
}

export const DialogPreviewAllGoals = ({ children }: IDialogAllGoalsProps) => {
  return (
    <Dialog >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full h-full md:h-[85%]  md:w-[600px]">
        {/* Header Section */}
        <DialogHeader>
          <DialogTitle className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <p>Todas as Metas</p>

          </DialogTitle>
        </DialogHeader>

        {/* Content Section */}
        <div className="overflow-y-auto w-full py-5">
          <ActiveGoals all />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="bg-red-600/90 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              type="button"
            >
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
};