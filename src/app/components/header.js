export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-2 shadow-sm bg-white/70 backdrop-blur border-b border-slate-100 z-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent">
        Which Company Do You Prefer?
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-4" />
    </header>
  );
}
