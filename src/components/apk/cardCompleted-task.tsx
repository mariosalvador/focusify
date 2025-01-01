import { CircleCheck } from "lucide-react"

interface ICardCompletedTaskProps {
  title: string;
  progress: number;
  endDate: string;
}

export const CardCompletedTask = ({ title, progress, endDate }: ICardCompletedTaskProps) => {
  return (
    <div className="p-4 bg-green-100 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <article className="flex items-center gap-2">
            <CircleCheck className="h-5 w-5 cursor-pointer text-green-600" />
            <h3 className="text-md font-bold text-gray-800">{title}</h3>
          </article>

          <p className="text-sm text-gray-600">Concluída em: {endDate}</p>
        </div>
        <span className="text-green-600 font-semibold">{progress}%</span>
      </div>
    </div>
  )
}