import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ITooltipProps {
  children?: React.ReactNode;
  text: string

}

export function TooltipDemo({ text,children }: ITooltipProps) {
  return (
    <TooltipProvider delayDuration={20}>
      <Tooltip>
        <TooltipTrigger >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
