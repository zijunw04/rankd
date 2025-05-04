"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname = usePathname();
  
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm z-20">
      <div className="w-full flex items-center justify-between px-[10%] py-3">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl text-black tracking-tight select-none hover:underline">
              Rankd
            </span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link
            href="/companies"
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              pathname.includes('/companies') 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            Companies
          </Link>
          <Link
            href="/"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Your Own
          </Link>
        </nav>
      </div>
    </header>
  );
}
