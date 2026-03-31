import {
  CalendarDays,
  Shield,
  Users,
  Swords,
  MoreVertical,
  Edit,
  Eye,
  TrendingUp,
  Activity
} from 'lucide-react';

export function Dashboard() {
  const summaryCards = [
    {
      title: 'Partidas Hoje',
      value: '4',
      icon: Swords,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      trend: '+2 em andamento',
      trendColor: 'text-blue-600'
    },
    {
      title: 'Atletas Ativos',
      value: '1.248',
      icon: Users,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      trend: '+12% este mês',
      trendColor: 'text-emerald-600'
    },
    {
      title: 'Equipes Inscritas',
      value: '64',
      icon: Shield,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      trend: '4 competições',
      trendColor: 'text-amber-600'
    },
    {
      title: 'TJD Pendentes',
      value: '3',
      icon: Activity,
      color: 'text-rose-500',
      bgColor: 'bg-rose-50',
      trend: 'Atenção necessária',
      trendColor: 'text-rose-600'
    }
  ];

  const recentMatches = [
    {
      id: '1',
      competition: 'Copa Ouro 2024',
      homeTeam: 'Real Madrid F7',
      awayTeam: 'Barcelona F7',
      score: '2 - 1',
      status: 'Finalizado',
      date: 'Hoje, 14:00',
    },
    {
      id: '2',
      competition: 'Copa Ouro 2024',
      homeTeam: 'Juventus F7',
      awayTeam: 'Milan F7',
      score: '0 - 0',
      status: 'Em andamento',
      date: 'Hoje, 15:30',
    },
    {
      id: '3',
      competition: 'Liga Prata',
      homeTeam: 'Chelsea F7',
      awayTeam: 'Arsenal F7',
      score: '- - -',
      status: 'Agendado',
      date: 'Amanhã, 10:00',
    },
    {
      id: '4',
      competition: 'Liga Prata',
      homeTeam: 'Bayern F7',
      awayTeam: 'Dortmund F7',
      score: '- - -',
      status: 'Agendado',
      date: 'Amanhã, 11:30',
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Dashboard</h1>
        <p className="text-zinc-500 mt-1">Visão geral da temporada atual e atividades recentes.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                  <Icon size={24} className={card.color} />
                </div>
                <TrendingUp size={20} className="text-zinc-300" />
              </div>
              <div>
                <h3 className="text-zinc-500 text-sm font-medium">{card.title}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold text-zinc-900">{card.value}</span>
                </div>
                <p className={`text-xs font-medium mt-2 ${card.trendColor}`}>{card.trend}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Matches Table */}
      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-zinc-200 flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900">Últimos Jogos</h2>
          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
            Ver todos
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500 border-b border-zinc-200">
              <tr>
                <th className="px-6 py-3 font-medium">Competição</th>
                <th className="px-6 py-3 font-medium">Data/Hora</th>
                <th className="px-6 py-3 font-medium text-center">Confronto</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {recentMatches.map((match) => (
                <tr key={match.id} className="hover:bg-zinc-50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-medium text-zinc-900">{match.competition}</span>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">
                    {match.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">
                      <span className="font-medium text-zinc-900 text-right w-32">{match.homeTeam}</span>
                      <span className="px-3 py-1 bg-zinc-100 rounded-md font-bold text-zinc-800 tabular-nums tracking-wider">
                        {match.score}
                      </span>
                      <span className="font-medium text-zinc-900 w-32">{match.awayTeam}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      match.status === 'Finalizado' ? 'bg-zinc-100 text-zinc-800' :
                      match.status === 'Em andamento' ? 'bg-emerald-100 text-emerald-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {match.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Ver Detalhes">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Editar Súmula">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
