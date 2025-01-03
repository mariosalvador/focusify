"use client";

import {
  Calendar,
  Home,
  ListMinus,
  MessageSquareQuote,
  PanelLeftOpen,
  Settings,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useAuthStore } from "@/module/zustand-store/auth-store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function getUserName(fullName: string) {
  const names = fullName.split(" ");
  const firstName = names[0];
  const lastName = names[names.length - 1];
  return `${firstName} ${lastName}`;
}

export const NavBar = () => {
  const { user } = useAuthStore();
  const pathname = usePathname();

  const userData = {
    id: user?.id,
    email: user?.email,
    name: user!.name,
    phone_number: user?.phone_number,
    avatarUrl: user?.avatarUrl,
  };

  const menuItems = [
    { href: "/home", label: "Inicio", icon: <Home /> },
    { href: "/goals", label: "Metas", icon: <Calendar /> },
    { href: "/pomodoro", label: "Pomodoro", icon: <Timer /> },
    { href: "/feedback", label: "Feedback", icon: <MessageSquareQuote /> },
    { href: "/settings", label: "Configurações", icon: <Settings /> },
  ];

  return (
    <header className="flex justify-between items-center mb-6 bg-white shadow-md rounded-lg px-5 py-4">
      <Image src="/focusi.svg" alt="Logo" width={150} height={50} priority />

      {/* Navegação desktop */}
      <div className="items-center hidden lg:flex w-[500px]">
        <ul className="flex space-x-4 justify-between items-center w-full">
          {menuItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center cursor-pointer ${pathname === href ? "text-blue-600" : "text-gray-600"
                } hover:text-blue-500`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </ul>
      </div>

      {/* Avatar e opções do usuário */}
      <div className="items-center gap-3 hidden lg:flex cursor-pointer">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-3">
              <span>{getUserName(userData.name)}</span>
              <Avatar>
                <AvatarImage
                  src={userData.avatarUrl ? userData.avatarUrl : ""}
                  alt={`Foto de perfil de ${userData.name}`}
                />
                <AvatarFallback>
                  {userData.name &&
                    userData.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-40 hidden lg:block bg-white shadow-md rounded-md p-2">
            <div className="flex flex-col space-y-5">
              <Button
                variant="ghost"
                className="justify-start text-left"
                onClick={() => redirect("/profile")}
              >
                Perfil
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-left text-red-600"
                onClick={() => {
                  redirect("/auth/logout");
                }}
              >
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Menu para dispositivos móveis */}
      <div className="flex lg:hidden ">
        <Sheet>
          <SheetTrigger>
            <ListMinus size={24} />
          </SheetTrigger>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <SheetContent className="flex flex-col items-start">
            <SheetHeader>
              <SheetTitle>Menu de Navegação</SheetTitle>
              <SheetDescription>
                Utilize o menu abaixo para navegar.
              </SheetDescription>
            </SheetHeader>
            <div className="flex items-center justify-between gap-3 w-full rounded-md shadow-md py-3 px-2 cursor-pointer"
            >
              <Link href="/profile" className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={userData.avatarUrl ? userData.avatarUrl : ""}
                    alt={`Foto de perfil de ${userData.name}`}
                  />
                  <AvatarFallback>
                    {userData.name &&
                      userData.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                  </AvatarFallback>
                </Avatar>
                <span>{getUserName(userData.name)}</span>
              </Link>
              <Link href="/profile" className="text-blue-600">
                <PanelLeftOpen size={24} className="text-gray-500 cursor-pointer" />
              </Link>

            </div>
            <ul className="flex flex-col space-y-4">
              {menuItems.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex gap-3 items-center cursor-pointer ${pathname === href ? "text-blue-600" : "text-gray-600"
                    } hover:text-blue-500`}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </ul>
            <SheetFooter className="flex flex-col gap-3 w-full h-full justify-end items-end">
              <Button className="rounded-md w-full bg-blue-600 hover:bg-blue-500">
                Convidar Amigo
              </Button>
              <Button
                onClick={() => {
                  redirect("/auth/logout");
                }}
                className="rounded-md w-full bg-red-600 hover:bg-red-500"
              >
                Terminar Sessão
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
