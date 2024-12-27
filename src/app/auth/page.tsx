import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./login/page";
import Signup from "./signup/page";



export default function AuthPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-y-auto">
      <Tabs defaultValue="account" className="overflow-y-auto">
        <TabsList className="w-full">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Login/>
        </TabsContent>
        <TabsContent value="password">
          <Signup/>
        </TabsContent>
      </Tabs>
    </div>
  )
}