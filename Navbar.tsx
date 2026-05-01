'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-secondary">
            Premium EStore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/shop" className="hover:text-secondary transition">
              Shop
            </Link>
            <Link href="/categories" className="hover:text-secondary transition">
              Categories
            </Link>
            <Link href="/about" className="hover:text-secondary transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-secondary transition">
              Contact
            </Link>
            <Link
              href="/cart"
              className="bg-secondary hover:bg-opacity-80 px-4 py-2 rounded transition"
            >
              Cart
            </Link>
            <Link
              href="/account"
              className="border border-secondary px-4 py-2 rounded hover:bg-secondary transition"
            >
              Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/shop" className="block hover:text-secondary transition py-2">
              Shop
            </Link>
            <Link href="/categories" className="block hover:text-secondary transition py-2">
              Categories
            </Link>
            <Link href="/cart" className="block hover:text-secondary transition py-2">
              Cart
            </Link>
            <Link href="/account" className="block hover:text-secondary transition py-2">
              Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
