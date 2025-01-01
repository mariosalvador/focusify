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
      <AlertTitle className="font-medium flex justify-between items-center">
        <div className="flex items-center gap-2 max-w-[350px]">
          <CircleDashed className="h-5 w-5 cursor-pointer text-zinc-500" />
          <h2 className="text-md truncate font-semibold text-zinc-800 max-w-[200px]">{tittle}</h2>
        </div>

        <div className="bg-red- flex flex-col items-end h-full w-[250px]">
          <CornerUpLeft className="h-5 w-5 cursor-pointer" />
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