import { Calendar, Home, ListMinus, MessageSquareQuote, Settings, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetDescription, SheetHeader, SheetTitle, SheetFooter } from "../ui/sheet";
import { Button } from "../ui/button";


export const NavBar = () => {
  return (
    <header className="flex justify-between items-center mb-6 bg-white shadow-md rounded-lg px-5 py-4">
      <Image src="/focusi.svg" alt="Logo" width={150} height={50} priority />

      <div className="items-center hidden lg:flex w-[500px]">
        <ul className="flex space-x-4 justify-between items-center w-full">
          <Link href={"/home"} className="flex flex-col items-center cursor-pointer">
            <Home />
            Inicio
          </Link>
          <Link href={"/goals"} className="flex flex-col items-center cursor-pointer">
            <Calendar />
            Metas
          </Link>
          <Link href={"/pomodoro"} className="flex flex-col items-center cursor-pointer">
            <Timer />
            Pomodoro
          </Link>
          <Link href={"/feedback"} className="flex flex-col items-center cursor-pointer">
            <MessageSquareQuote />
            Feedback
          </Link>
          <Link href={"/settings"} className="flex flex-col items-center cursor-pointer">
            <Settings />
            Configurações
          </Link>
        </ul>
      </div>

      <div className="items-center gap-3 hidden lg:flex">
        <span>Mário Salvador</span>
        <div className="size-10 rounded-full bg-slate-200"></div>
      </div>

      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger>
            <ListMinus size={24} />
          </SheetTrigger>

          <SheetContent className="flex flex-col items-start">
            <SheetHeader>
              <SheetTitle>Menu de Navegação</SheetTitle>
              <SheetDescription>
                Utilize o menu abaixo para navegar.
              </SheetDescription>
            </SheetHeader>

            <ul className="flex flex-col space-y-4 ">
              <Link href={"/home"} className="flex gap-3 items-center cursor-pointer">
                <Home />
                Inicio
              </Link>
              <Link href={"/goals"} className="flex gap-3 items-center cursor-pointer">
                <Calendar />
                Metas
              </Link>
              <Link href={"/pomodoro"} className="flex gap-3 items-center cursor-pointer">
                <Timer />
                Pomodoro
              </Link>
              <Link href={"/feedback"} className="flex gap-3 items-center cursor-pointer">
                <MessageSquareQuote />
                Feedback
              </Link>
              <Link href={"/settings"} className="flex gap-3 items-center cursor-pointer">
                <Settings />
                Configurações
              </Link>
            </ul>
            <SheetFooter className="flex flex-col gap-3 w-full h-full justify-end ">
              <Button className="rounded-md w-full bg-blue-600 hover:bg-blue-500">
                Convidar Amigo
              </Button>
              <Button className="rounded-md w-full bg-red-600 hover:bg-red-500">
                Terminar Sessão
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
