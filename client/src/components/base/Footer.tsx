import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-6 text-yellow-400 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="flex justify-between">
        <div>
          <div>© 2024 Yappin. All rights reserved.</div>
          <div className="space-x-4 mt-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
        <div className="space-y-4">
          <Input
            placeholder="Subscribe to newsletter"
            className="bg-neutral-700 border-none"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
}
