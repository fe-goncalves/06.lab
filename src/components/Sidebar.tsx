import {
  LayoutDashboard,
  Trophy,
  CalendarDays,
  Shield,
  Users,
  Swords,
  Gavel,
  Award,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'competitions', label: 'Competições', icon: Trophy },
    { id: 'seasons', label: 'Temporadas', icon: CalendarDays },
    { id: 'teams', label: 'Equipes', icon: Shield },
    { id: 'athletes', label: 'Atletas', icon: Users },
    { id: 'matches', label: 'Partidas', icon: Swords },
    { id: 'tjd', label: 'TJD', icon: Gavel },
    { id: 'hall-of-fame', label: 'Hall da Fama', icon: Award },
  ];

  return (
    <aside className="w-64 bg-zinc-950 text-zinc-300 h-screen flex flex-col fixed left-0 top-0 border-r border-zinc-800">
      <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
        <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center font-bold text-zinc-950">
          06
        </div>
        <span className="font-bold text-xl tracking-tight text-white">06.LAB</span>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-zinc-500'} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}
