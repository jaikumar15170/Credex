import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { mockUser } from "@/data/mock-accounts";

const Header = async () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Credex Logo"
            width={150}
            height={50}
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600">
              Reviews
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="gap-2">
                <PenBox className="w-4 h-4" />
                Add Transaction
              </Button>
            </Link>

            {/* Demo User Info */}
            <div className="flex items-center gap-2 pl-4 border-l">
              <span className="text-sm text-gray-600">{mockUser.name}</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
