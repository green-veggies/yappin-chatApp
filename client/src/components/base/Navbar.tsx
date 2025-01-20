"use client";
import React from "react";
import Link from "next/link";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "../ui/button";
import LoginModal from "../auth/LoginModal";
import Logo from "./Logo";
export default function Navbar({ user }: { user: CustomUser | null }) {
  return (
    <nav className="p-2 flex justify-between items-center bg-neutral-500 shadow-sm">
      {/* <h1 className="text-xl md:text-2xl font-extrabold">QuickChat</h1> */}
      <Logo />
      <div className="flex items-center space-x-2 md:space-x-6 text-yellow-400">
        <Link href="/">Home</Link>
        <Link href="#features">Features</Link>
        {!user ? (
          <LoginModal />
        ) : (
          <Link href="/dashboard">
            <Button className="text-yellow-300">Dashboard</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
