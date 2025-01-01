import { CircleDashed, CornerUpLeft } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Progress } from "../ui/progress";

interface ICardTaskProps {
  title: string;
  progress: number;
  startDate: string;
  endDate: string;
}

export function CardTask({ title: tittle, progress, startDate, endDate }: ICardTaskProps) {
  return (
    <Alert>
      {/* <Terminal className="h-4 w-4" /> */}
      <AlertTitle className="font-medium flex flex-col justify-between items-start sm:flex-row sm:items-center gap-2">
        <div className="flex justify-between w-full items-center gap-2 sm:justify-start sm:max-w-[350px]">
          <CircleDashed className="h-5 w-5 cursor-pointer text-zinc-500" />
          <h2 className="text-md truncate font-semibold text-zinc-800 max-w-[200px]">{tittle}</h2>
          <CornerUpLeft className="h-5 w-5 cursor-pointer block  sm:hidden" />
        </div>

        <div className=" flex flex-col w-full items-end h-full sm:w-[250px]">
          <CornerUpLeft className="h-5 w-5 cursor-pointer hidden sm:block" />
          <Progress value={progress} className="h-2 mt-2 w-full text-white" />
        </div>
      </AlertTitle>
      <AlertDescription className="text-sm  font-medium">
        <p>
          Ínicio:
          <span className="text-green-500">
            {" "+startDate}
          </span>
        </p>
        <p>
          Prazo:
          <span className="text-red-500">
            {" "+endDate}
          </span>
        </p>
      </AlertDescription>
    </Alert>
  )
}