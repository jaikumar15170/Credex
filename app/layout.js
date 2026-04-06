import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { UserInitializer } from "@/components/user-initializer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Credex",
  description: "Credex - AI-Powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-sm.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <UserInitializer />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Credex. All rights reserved by JAI.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
