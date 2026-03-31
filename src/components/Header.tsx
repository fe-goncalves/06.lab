import { ChevronDown, Globe, Settings, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-zinc-100 px-3 py-1.5 rounded-md border border-zinc-200 cursor-pointer hover:bg-zinc-200 transition-colors">
          <span className="text-sm font-medium text-zinc-700">Temporada 2024</span>
          <ChevronDown size={14} className="text-zinc-500" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors px-3 py-1.5 rounded-md hover:bg-emerald-50">
          <Globe size={16} />
          <span>Visão do Site Público</span>
        </button>

        <div className="h-6 w-px bg-zinc-200 mx-2"></div>

        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors">
          <Settings size={18} />
        </button>

        <button className="flex items-center gap-2 hover:bg-zinc-50 p-1 pr-3 rounded-full border border-transparent hover:border-zinc-200 transition-all">
          <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
            AD
          </div>
          <span className="text-sm font-medium text-zinc-700">Admin</span>
          <ChevronDown size={14} className="text-zinc-400" />
        </button>
      </div>
    </header>
  );
}
