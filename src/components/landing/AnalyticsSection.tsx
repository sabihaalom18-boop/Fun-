'use client';

import React from 'react';
import { BarChart3, TrendingUp, Clock, DollarSign, Smile, MessageSquare } from 'lucide-react';

export default function AnalyticsSection() {
  const metrics = [
    { label: 'Total Conversations', value: '12,482', change: '+24.5% vs last mo', icon: MessageSquare, color: 'text-violet-400' },
    { label: 'AI Resolution Rate', value: '84.6%', change: '+8.2% accuracy', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Human Escalations', value: '15.4%', change: 'Down 12% MoM', icon: BarChart3, color: 'text-amber-400' },
    { label: 'Avg Response Time', value: '1.8s', change: 'Sub-second AI engine', icon: Clock, color: 'text-cyan-400' },
    { label: 'Cost / Resolution', value: '$0.12', change: '88% savings vs agent', icon: DollarSign, color: 'text-indigo-400' },
    { label: 'Customer Satisfaction', value: '4.8 / 5', change: 'Based on 4,120 CSATs', icon: Smile, color: 'text-pink-400' }
  ];

  return (
    <section className="py-24 relative bg-[#0D1220]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            Real-Time Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Support Analytics & CSAT Performance
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Monitor store resolution trends, human handoff ratios, response speeds, and direct ROI metrics.
          </p>
        </div>

        {/* Grid of Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080B14] border border-white/10 hover:border-violet-500/40 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">{item.label}</span>
                  <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                  {item.value}
                </div>

                <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <span>{item.change}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
