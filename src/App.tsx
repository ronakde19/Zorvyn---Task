import React, { useState } from 'react';
import { Sidebar, TopBar } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Transactions } from './components/Transactions';
import { Insights } from './components/Insights';
import { View } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-surface flex overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isOpen={isSidebarOpen} 
      />
      
      <div className={cn(
        "flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out",
        isSidebarOpen ? "ml-64" : "ml-0"
      )}>
        <TopBar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full overflow-y-auto">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'transactions' && <Transactions />}
          {currentView === 'insights' && <Insights />}
        </main>
      </div>
    </div>
  );
}
