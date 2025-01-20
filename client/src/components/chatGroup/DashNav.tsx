"use client";
import React from "react";
import ProfileMenu from "../auth/ProfileMenu";
import Logo from "../base/Logo";

export default function DashNav({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {
  return (
    <nav className="py-2 px-6 flex justify-between items-center bg-transparent shadow-sm">
      <Logo />
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <ProfileMenu name={name} image={image} />
      </div>
    </nav>
  );
}
