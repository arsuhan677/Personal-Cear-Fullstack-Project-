"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [compareCount] = useState(0);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/image.png" alt="logo" className="h-8 w-auto" />
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-3">
          {[
            "SKIN CARE",
            "BODY CARE",
            "FRAGRANCE",
            "MAKE UP",
            "LIP CARE",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="hidden md:flex items-center border rounded-full px-3 py-1.5 bg-gray-50">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm w-40"
            />
            <Search size={16} className="text-gray-500" />
          </div>

          {/* Compare */}
          <div className="relative text-sm font-medium text-gray-700 cursor-pointer rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
            Compare
            <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {compareCount}
            </span>
          </div>

          {/* Login */}
          <div className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
            Login/Sign Up
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}