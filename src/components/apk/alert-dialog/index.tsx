
"use client";
import {
  AlertDialog,
  AlertDialogAction,
  // AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


interface IAlertProps {
  children?: React.ReactNode | undefined;
  cancel?: string;
  title?: string
  onConfirm?: () => void;
  isOpen?: boolean;
  isLoading?: boolean
}

export const AlerDialog: React.FC<IAlertProps> = ({ children }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[80%]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-400">⚠️ Aviso Importante</AlertDialogTitle>
          <AlertDialogDescription>
            🚧 Esta funcionalidade está em desenvolvimento e pode não estar disponível no momento.
            ✨ Agradecemos sua paciência enquanto continuamos aprimorando a plataforma.
            <br />
            <span className="text-green-700">
              🌟 Explore outros recursos disponíveis e aproveite a experiência!
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}