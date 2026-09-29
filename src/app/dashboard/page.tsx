'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  TrendingUp,
  UserCheck,
  Clock,
  DollarSign,
  ArrowRight,
  Bot,
  ShoppingBag,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Activity
} from 'lucide-react';
import { mockConversations } from '@/lib/data';

export default function DashboardOverview() {
  const stats = [
    { label: 'Today’s Conversations', value: '142', change: '+12% vs yesterday', icon: MessageSquare, color: 'text-violet-400' },
    { label: 'AI Resolution Rate', value: '88.4%', change: 'Zero hallucinations', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Human Escalations', value: '16', change: 'Requires approval', icon: UserCheck, color: 'text-amber-400' },
    { label: 'Avg Response Time', value: '0.18s', change: 'Sub-second vector lookup', icon: Clock, color: 'text-cyan-400' },
    { label: 'Estimated Cost Savings', value: '$1,420.00', change: 'This week', icon: DollarSign, color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-8">

      {/* Page Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            Today's Support Overview
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Stream
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time status of SupportOS autonomous resolutions, Shopify sync, and active customer threads.
          </p>
        </div>

        <Link
          href="/dashboard/inbox"
          className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30 transition-all self-start sm:self-auto"
        >
          <span>Open Support Inbox</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-2 hover:border-violet-500/30 transition-all"
            >
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-medium">{item.label}</span>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>

              <div className="text-2xl font-extrabold text-white font-mono">{item.value}</div>

              <div className="text-[10px] text-emerald-400 font-medium">{item.change}</div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Recent Activity & AI Engine Health */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column: Recent Customer Conversations */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-violet-400" />
              <h2 className="text-sm font-bold text-white">Recent Customer Conversations</h2>
            </div>
            <Link href="/dashboard/inbox" className="text-xs text-cyan-400 hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {mockConversations.map((conv) => (
              <div
                key={conv.id}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center font-bold text-violet-300">
                    {conv.customerName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      {conv.customerName}
                      <span className="text-[10px] text-slate-400 font-mono">({conv.channel})</span>
                    </div>
                    <div className="text-slate-400 text-[11px] line-clamp-1 mt-0.5">{conv.summary}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-between sm:justify-end">
                  {conv.status === 'ai_active' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <Bot className="w-3 h-3" /> AI Active (98%)
                    </span>
                  )}
                  {conv.status === 'human_needed' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Human Handoff
                    </span>
                  )}
                  {conv.status === 'resolved' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Resolved
                    </span>
                  )}

                  <span className="text-[10px] text-slate-500 font-mono">{conv.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: AI Engine Health & Store Connections */}
        <div className="lg:col-span-4 space-y-6">

          {/* Engine Status Box */}
          <div className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-bold text-white">AI Engine & Sync Status</h2>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-emerald-400" /> Shopify Store API
                </span>
                <span className="text-emerald-400 font-mono font-bold">100% Synced</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-violet-400" /> Vector Knowledge Base
                </span>
                <span className="text-cyan-400 font-mono font-bold">Ready (4 Docs)</span>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Sensitive Action Guardrail
                </div>
                <p className="text-[11px] text-amber-200/80">
                  Refunds over $20 require human approval.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
