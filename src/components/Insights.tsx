import React from 'react';
import { TrendingUp, Lightbulb, ArrowRight, Library, Wallet, BarChart3, ReceiptText } from 'lucide-react';
import { INSIGHTS } from '../constants';

export const Insights: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <p className="text-primary font-bold text-[10px] uppercase tracking-[0.15em] mb-2">Portfolio Intelligence</p>
        <h2 className="display-md text-on-surface">Financial Insights</h2>
        <div className="h-1 w-12 bg-primary mt-4"></div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 architectural-card p-8 group">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="label-sm opacity-60">Primary Metric</span>
              <h3 className="text-lg font-bold text-on-surface mt-1">Monthly comparison</h3>
            </div>
            <div className="p-2 bg-red-100 text-red-700 rounded-lg">
              <TrendingUp size={24} />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-5xl font-light tracking-tighter text-on-surface">Spending increased by 18%</span>
          </div>
          <p className="text-on-surface-variant mt-6 max-w-md leading-relaxed opacity-80">
            Based on your activity in the current billing cycle, your outflow has exceeded last month's baseline primarily due to seasonal recurring costs.
          </p>
          <div className="mt-8 flex items-center text-primary text-sm font-semibold cursor-pointer group-hover:translate-x-1 transition-transform">
            Review detailed breakdown
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>

        <div className="architectural-card p-8">
          <span className="label-sm opacity-60">Category Leader</span>
          <h3 className="text-lg font-bold text-on-surface mt-1 mb-8">Highest spending</h3>
          <div className="space-y-4">
            <div className="p-4 bg-surface-container rounded-lg">
              <span className="text-sm font-semibold text-primary block mb-1">Food & Dining</span>
              <span className="text-2xl font-bold text-on-surface tracking-tight">$2,480.00</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[65%]"></div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              This category represents 34% of your total monthly expenditure.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-primary text-white rounded-xl p-8 flex flex-col justify-between min-h-[280px]">
          <Lightbulb size={40} className="opacity-50" />
          <div>
            <span className="label-sm text-white/70">Tactical Tip</span>
            <p className="text-2xl font-medium tracking-tight mt-2 leading-snug">You've saved 5% more than last month.</p>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          {INSIGHTS.map((insight) => (
            <div key={insight.id} className="architectural-card !p-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  {insight.type === 'audit' && <ReceiptText size={24} />}
                  {insight.type === 'alert' && <Wallet size={24} />}
                  {insight.type === 'tax' && <BarChart3 size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{insight.title}</h4>
                  <p className="text-sm text-on-surface-variant">{insight.description}</p>
                </div>
              </div>
              <button className="text-xs font-bold text-primary tracking-widest uppercase px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                {insight.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="pt-12 border-t border-ghost-border/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-medium opacity-50">
            Zorvyn © 2024 Institutional Data Insights
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Methodology</a>
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
