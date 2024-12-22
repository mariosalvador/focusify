import { Calendar, Home, MessageSquareQuote, Settings, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-5">
      <header className="flex justify-between items-center mb-6 bg-white shadow-md rounded-lg px-5 py-4">
        <Image src="/focusi.svg" alt="Logo" width={150} height={50} priority />

        <div className=" items-center hidden lg:flex w-[500px]">
          <ul className="flex space-x-4 justify-between items-center w-full">
            <Link href={"/home"} className="flex flex-col items-center cursor-pointer ">
              <Home />
              Inicio
            </Link>
            <Link href={"/goals"} className="flex flex-col items-center cursor-pointer ">
              <Calendar />
              Metas
            </Link >
            <Link href={"/pomodoro"} className="flex flex-col items-center cursor-pointer ">
              <Timer />
              Pomodoro
            </Link >
            <Link href={"/feedback"} className="flex flex-col items-center cursor-pointer ">
              <MessageSquareQuote />
              Feedback
            </Link >
            <Link href={"/settings"} className="flex flex-col items-center cursor-pointer ">
              <Settings />
              Configurações
            </Link >
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <span>Mário Salvador</span>
          <div className="size-10 rounded-full bg-slate-200"></div>
        </div>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}