"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function RankdHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  let topic = "";
  if (pathname) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      topic = segments[0];
      if (topic === "leaderboard" && segments.length === 1) {
        topic = "";
      }
    }
    
    if (topic) {
      topic = topic.charAt(0).toUpperCase() + topic.slice(1);
    }
  }

  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm z-20">
      <div className="w-full flex items-center justify-between px-4 sm:px-[10%] py-3">
        {/* Brand and Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl text-black tracking-tight select-none hover:underline">
              Rankd
            </span>
          </Link>
          {/* Vertical divider */}
          {topic && (
            <>
              <span className="h-6 sm:h-8 w-px bg-black mx-2" />
              <span className="text-lg sm:text-2xl text-black tracking-tight select-none truncate max-w-[100px] sm:max-w-full">
                {topic}
              </span>
            </>
          )}
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4 md:gap-8">
          <Link
            href={topic ? `/${topic.toLowerCase()}` : "/"}
            className="px-4 md:px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition text-sm md:text-base"
          >
            Vote
          </Link>
          <Link
            href={topic ? `/${topic.toLowerCase()}/leaderboard` : "/leaderboard"}
            className="px-4 md:px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition text-sm md:text-base"
          >
            Leaderboard
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
            href={topic ? `/${topic.toLowerCase()}` : "/"}
            className="px-4 py-3 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vote
          </Link>
          <Link
            href={topic ? `/${topic.toLowerCase()}/leaderboard` : "/leaderboard"}
            className="px-4 py-3 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Leaderboard
          </Link>
        </div>
      )}
    </header>
  );
}
