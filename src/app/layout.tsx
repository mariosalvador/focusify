import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Focusify",
  description: "Is a app to help you focus!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="Logomark.svg" type="image/x-icon" />
      </head>
      <body
        className={` antialiased`}
      >
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
