"use client";
import { NavBar } from "@/components/apk/nav-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-5">
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <div>
          {children}
        </div>
      </QueryClientProvider>
    </div>
  )
}