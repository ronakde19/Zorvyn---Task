import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, Plus, Building2, Landmark, Globe, ReceiptText } from 'lucide-react';
import { CHART_DATA, ALLOCATION_DATA, TRANSACTIONS } from '../constants';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-on-surface mb-1">Financial Architecture</h2>
          <p className="label-sm">Real-time Institutional Oversight</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all active:scale-95 shadow-sm">
          <Plus size={18} />
          Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Portfolio Balance', value: '$1,482,904', trend: '+2.4%', color: 'text-primary' },
          { label: 'Monthly Institutional Income', value: '$248,300', trend: 'vs. last month', color: 'text-on-surface' },
          { label: 'Operating Expenses', value: '$92,440', trend: '+1.2%', color: 'text-on-surface', negative: true },
        ].map((card, i) => (
          <div key={i} className="architectural-card flex flex-col gap-1">
            <span className="label-sm">{card.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-light tracking-tight text-on-surface">{card.value}</span>
              {card.trend.includes('%') && (
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${card.negative ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                  <TrendingUp size={10} />
                  {card.trend}
                </span>
              )}
              {!card.trend.includes('%') && (
                <span className="text-xs font-medium text-on-surface-variant opacity-60">{card.trend}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 architectural-card">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface">Portfolio Growth Index</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Assets
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-on-surface-variant/30"></span> Liabilities
              </span>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#434655' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="assets" fill="#004ac6" radius={[2, 2, 0, 0]} barSize={24} />
                <Bar dataKey="liabilities" fill="rgba(67, 70, 85, 0.1)" radius={[2, 2, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 architectural-card flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface mb-8">Asset Allocation</h3>
          <div className="flex-1 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={ALLOCATION_DATA}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ALLOCATION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-light">65%</span>
              <span className="text-[9px] uppercase tracking-tighter text-on-surface-variant">Equities</span>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {ALLOCATION_DATA.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }}></span>
                  <span className="text-xs text-on-surface-variant">{item.name}</span>
                </div>
                <span className="text-xs font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transfers Table */}
      <div className="architectural-card !p-0 overflow-hidden">
        <div className="px-8 py-6 border-b border-ghost-border flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface">Transmission Ledger</h3>
          <button className="text-xs font-medium text-primary hover:underline">Download Audit Log</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-8 py-4 label-sm">Reference ID</th>
                <th className="px-8 py-4 label-sm">Beneficiary</th>
                <th className="px-8 py-4 label-sm">Status</th>
                <th className="px-8 py-4 label-sm">Channel</th>
                <th className="px-8 py-4 label-sm text-right">Quantum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ghost-border/5">
              {TRANSACTIONS.slice(0, 3).map((tx) => (
                <tr key={tx.id} className="hover:bg-surface-container-high transition-colors group">
                  <td className="px-8 py-5 text-sm font-medium text-on-surface">{tx.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center">
                        {tx.icon === 'cloud' && <Building2 size={14} />}
                        {tx.icon === 'payments' && <Landmark size={14} />}
                        {tx.icon === 'travel_explore' && <Globe size={14} />}
                      </div>
                      <span className="text-sm text-on-surface font-medium">{tx.beneficiary}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      tx.status === 'settled' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-on-surface-variant">{tx.channel}</td>
                  <td className={`px-8 py-5 text-right text-sm font-semibold ${tx.type === 'income' ? 'text-blue-600' : 'text-on-surface'}`}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-surface-container-low text-center">
          <button className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
            Load Full Architecture Log
          </button>
        </div>
      </div>
    </div>
  );
};
