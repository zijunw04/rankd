import Link from "next/link";

export default function RankdHeader() {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm z-20">
      <div className="w-full flex items-center justify-between px-[10%] py-4">
        {/* Brand and Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl text-black tracking-tight select-none">
            Rankd
          </span>
          {/* Vertical divider */}
          <span className="h-8 w-px bg-black mx-2" />
          <span className="text-2xl text-black tracking-tight select-none">
            Companies
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            Vote
          </Link>
          <Link
            href="/leaderboard"
            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
          >
            Leaderboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
