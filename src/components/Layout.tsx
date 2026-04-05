import React from 'react';
import { LayoutDashboard, ReceiptText, LineChart, Search, Bell, Settings, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transactions', icon: ReceiptText },
    { id: 'insights', label: 'Insights', icon: LineChart },
  ] as const;

  return (
    <aside className={cn(
      "fixed left-0 top-0 bottom-0 flex flex-col h-screen w-64 bg-surface-container border-r border-ghost-border z-50 transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tighter text-primary">Zorvyn</h1>
        <p className="text-[10px] text-on-surface-variant tracking-wider uppercase mt-1 opacity-70">Institutional Finance</p>
      </div>

      <nav className="flex-1 mt-4 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200",
              currentView === item.id 
                ? "bg-primary text-white shadow-sm" 
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
            )}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 border-t border-ghost-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center overflow-hidden">
            <img 
              src="https://picsum.photos/seed/zorvyn/100/100" 
              alt="Zorvyn Corp" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-on-surface truncate">Zorvyn Corp</span>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest truncate">Premium Account</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

interface TopBarProps {
  onToggleSidebar: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-6 h-16 w-full sticky top-0 z-40 bg-surface-container-lowest/80 backdrop-blur-md border-b border-ghost-border">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onToggleSidebar}
          className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant"
        >
          <Menu size={24} />
        </button>
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-50 group-focus-within:opacity-100 transition-opacity" size={18} />
          <input 
            type="text" 
            placeholder="Search analytics, logs, or entities..." 
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-surface-container-high rounded-full px-3 py-1.5 gap-2 border border-ghost-border cursor-pointer hover:bg-surface-container-high/80 transition-colors">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface">Admin Mode</span>
          <ChevronDown size={14} className="text-on-surface-variant" />
        </div>

        <div className="flex items-center gap-4 text-on-surface-variant">
          <button className="hover:text-on-surface transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="hover:text-on-surface transition-colors">
            <Settings size={20} />
          </button>
        </div>

        <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-surface-container-high cursor-pointer">
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="User Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
