"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function MainHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm z-20">
      <div className="w-full flex items-center justify-between px-4 sm:px-[10%] py-3">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl text-black tracking-tight select-none hover:underline">
              Rankd
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4">
          <Link
            href="/brainrot"
            className={`px-4 md:px-6 py-2 rounded-lg font-semibold text-sm md:text-base transition ${
              pathname.includes('/brainrot') 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            Brainrot
          </Link>
          <Link
            href="/companies"
            className={`px-4 md:px-6 py-2 rounded-lg font-semibold text-sm md:text-base transition ${
              pathname.includes('/companies') 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            Companies
          </Link>
          <Link
            href="/"
            className="px-4 md:px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-indigo-700 transition"
          >
            Create Your Own
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-gray-800 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white w-full border-t border-gray-200 py-2 px-4 flex flex-col gap-2 shadow-md">
          <Link
            href="/brainrot"
            className={`px-4 py-3 rounded-lg font-semibold text-center transition ${
              pathname.includes('/brainrot') 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Brainrot
          </Link>
          <Link
            href="/companies"
            className={`px-4 py-3 rounded-lg font-semibold text-center transition ${
              pathname.includes('/companies') 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Companies
          </Link>
          <Link
            href="/"
            className="px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold text-center hover:bg-indigo-700 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Create Your Own
          </Link>
        </div>
      )}
    </header>
  );
}
