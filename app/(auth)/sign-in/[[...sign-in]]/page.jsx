"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect to dashboard after 2 seconds
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Demo Mode: Redirecting to dashboard...</p>
        <p className="text-sm text-gray-500 mb-6">This is a frontend-only showcase. No authentication required.</p>
        <Button onClick={() => router.push("/dashboard")} className="w-full">
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}
