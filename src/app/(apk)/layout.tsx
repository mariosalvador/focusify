import { NavBar } from "@/components/apk/nav-bar";



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-5">
     <NavBar />
      <div>
        {children}
      </div>
    </div>
  )
}