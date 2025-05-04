"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RankdHeader() {
  const pathname = usePathname();
  
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
      <div className="w-full flex items-center justify-between px-[10%] py-3">
        {/* Brand and Section */}
        <div className="flex items-center ">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl text-black tracking-tight select-none hover:underline">
              Rankd
            </span>
          </Link>
          {/* Vertical divider */}
          {topic && (
            <>
              <span className="h-8 w-px bg-black mx-2" />
              <span className="text-2xl text-black tracking-tight select-none">
                {topic}
              </span>
            </>
          )}
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href={topic ? `/${topic.toLowerCase()}` : "/"}
            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            Vote
          </Link>
          <Link
            href={topic ? `/${topic.toLowerCase()}/leaderboard` : "/leaderboard"}
            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            Leaderboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
