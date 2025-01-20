import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-neutral-500 to-neutral-800">
      <h1 className="text-5xl font-extrabold text-neutral-900 mb-4">
        Yap around with your gang
      </h1>
      <p className="text-xl text-gray-900 mb-8">
        Yappin. is the platform for you and your buddies to probably discuss the most important topics of the world.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse text-yellow-400">
          Start Yapping
        </Button>
      </Link>

      <div className="mt-6 w-full max-w-5xl flex justify-center">
        <img
          src="/images/conversation.svg"
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
