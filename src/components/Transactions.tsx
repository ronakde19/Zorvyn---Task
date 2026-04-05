import React from 'react';
import { Download, Search, ChevronDown, CheckCircle2, Clock, AlertCircle, ReceiptText } from 'lucide-react';
import { TRANSACTIONS } from '../constants';
import { cn } from '../lib/utils';

export const Transactions: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-on-surface mb-1">Transaction History</h2>
          <p className="text-on-surface-variant text-sm font-medium opacity-80">Reconciliation Ledger & Auditor View</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-surface-container-lowest border border-ghost-border px-4 py-2 rounded-lg hover:bg-surface-bright transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Export</span>
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 flex gap-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Filter by entity or reference..." 
              className="w-full bg-surface-container-lowest border border-ghost-border rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 outline-none"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-ghost-border rounded-lg min-w-[160px] cursor-pointer">
            <span className="text-xs font-semibold text-on-surface-variant flex-1">All Types</span>
            <ChevronDown size={16} className="text-on-surface-variant/40" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end gap-2">
          <button className="bg-surface-container-high px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:bg-surface-bright">Today</button>
          <button className="bg-surface-container-lowest border border-ghost-border px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-on-surface-variant">Custom Range</button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="architectural-card !p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-5 label-sm">Date</th>
              <th className="px-6 py-5 label-sm">Category</th>
              <th className="px-6 py-5 label-sm">Type</th>
              <th className="px-6 py-5 label-sm text-right">Amount</th>
              <th className="px-6 py-5 label-sm text-center w-24">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ghost-border/10">
            {TRANSACTIONS.map((tx) => (
              <tr key={tx.id} className="group hover:bg-surface-container-high transition-all duration-200 ease-out cursor-default">
                <td className="px-6 py-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-on-surface">{tx.date}</span>
                    <span className="text-[11px] text-on-surface-variant opacity-60">{tx.time}</span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                      {/* Icon mapping would go here */}
                      <ReceiptText size={18} />
                    </div>
                    <span className="text-sm font-medium text-on-surface">{tx.category}</span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className={cn(
                    "text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded",
                    tx.type === 'income' ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"
                  )}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-6 text-right">
                  <span className={cn(
                    "text-sm font-bold",
                    tx.type === 'income' ? "text-blue-600" : "text-on-surface"
                  )}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-6 text-center">
                  {tx.status === 'settled' && <CheckCircle2 size={20} className="text-green-600 mx-auto" fill="currentColor" fillOpacity={0.1} />}
                  {tx.status === 'in-flight' && <Clock size={20} className="text-amber-500 mx-auto" />}
                  {tx.status === 'pending' && <AlertCircle size={20} className="text-slate-400 mx-auto" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="px-6 py-4 bg-surface-container-low/30 border-t border-ghost-border flex items-center justify-between">
          <span className="label-sm opacity-60">Viewing 1-5 of 1,280 entries</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ghost-border hover:bg-surface-container text-on-surface-variant">
              <span className="text-lg">‹</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ghost-border bg-primary text-white text-[11px] font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ghost-border hover:bg-surface-container text-[11px] font-bold text-on-surface-variant">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ghost-border hover:bg-surface-container text-[11px] font-bold text-on-surface-variant">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ghost-border hover:bg-surface-container text-on-surface-variant">
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Auditor Banner */}
      <div className="p-4 bg-surface-container rounded-lg border-l-4 border-primary/40 flex items-center gap-4">
        <AlertCircle className="text-primary" size={20} />
        <p className="text-xs text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Auditor View Mode:</strong> You are currently viewing this ledger with <span className="italic">Read-Only</span> permissions. Modification, deletion, or creation of new transaction entries is disabled for the Viewer role.
        </p>
      </div>
    </div>
  );
};
