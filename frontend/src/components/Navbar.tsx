interface NavbarProps {
  onHome: () => void;
}

export default function Navbar({ onHome }: NavbarProps) {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={onHome}
          className="text-xl font-bold tracking-tight text-white">
          anon<span className="text-indigo-400">feedback</span>
        </button>

        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span className="hidden sm:block">Say what you really think.</span>

          <span className="rounded-full border border-slate-700 px-3 py-1.5 text-xs">
            100% anonymous
          </span>
        </div>
      </div>
    </nav>
  );
}
