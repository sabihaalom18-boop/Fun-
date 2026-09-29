'use client';

import React from 'react';
import {
  UserCheck,
  Bot,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  FileText,
  ShoppingBag,
  Sparkles,
  Zap
} from 'lucide-react';

export default function HumanHandoffSection() {
  return (
    <section className="py-24 relative bg-[#0D1220]/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            Safety & Merchant Control
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            When AI should stop, humans take over.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            SupportOS automatically flags sensitive requests, angry customers, or policy exceptions, handing off full context to human managers in one click.
          </p>
        </div>

        {/* Transition Visual Card */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* AI Agent Stage (Left) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080B14] border border-violet-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-300">
                <Bot className="w-4 h-4 text-cyan-400" /> AI Agent Stage
              </div>
              <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded font-mono">
                Escalation Triggered
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                <div className="font-semibold text-white mb-1">Customer Request:</div>
                “I want a refund on shipping and an exchange for size 11.”
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-300">
                  <ShieldAlert className="w-4 h-4" /> Sensitive Action Guardrail
                </div>
                <p className="text-[11px] text-amber-200/80">
                  Refund threshold exceeded ($15.00). Requires merchant manager approval before execution.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="text-[11px] text-slate-400">AI Generated Summary:</div>
                <div className="font-medium text-slate-200">
                  Customer wants size exchange to 11 and $15 shipping fee refunded. Return window is valid.
                </div>
              </div>
            </div>
          </div>

          {/* Animated Transition Arrow (Center) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center gap-2 text-center py-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#080B14] rounded-full flex items-center justify-center text-cyan-400">
                <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-semibold">
              Instant Handoff
            </span>
          </div>

          {/* Human Agent Workspace (Right) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080B14] border border-emerald-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <UserCheck className="w-4 h-4" /> Human Agent Workspace
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                Context Received
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-slate-200">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-violet-400" /> Full Thread History
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-slate-200">
                <span className="flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" /> Shopify Order Context (#9281)
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 1-Click Refund Action Ready
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>

              <button className="w-full mt-2 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 text-xs">
                <span>Accept Handoff & Approve Refund ($15.00)</span>
                <Zap className="w-3.5 h-3.5 fill-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
