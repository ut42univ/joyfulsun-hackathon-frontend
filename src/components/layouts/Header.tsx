import { Connection } from "@/components/elements/connection";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full h-20 z-50 flex justify-between items-center px-16 bg-neutral-800 text-white">
      <Link href="/" className="font-medium flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full bg-orange-500" />
        <p>Joyful Sun Data Integration</p>
      </Link>
      <nav className="flex gap-4">
        <Connection />
      </nav>
    </header>
  );
};
