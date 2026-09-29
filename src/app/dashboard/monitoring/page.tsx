'use client';

import React from 'react';
import {
  Activity,
  Terminal,
  Cpu,
  Clock,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { mockTraceLogs } from '@/lib/data';

export default function MonitoringPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            AI Observability & Trace Logs
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Stream
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time LLM execution traces, token consumption, latency breakdown, tool calls, and security audit trails.
          </p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Average Latency</span>
            <Clock className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">1,180 ms</div>
          <div className="text-[10px] text-emerald-400 font-semibold">99.8% Sub-second SLA</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Tokens Consumed Today</span>
            <Cpu className="w-4 h-4 text-violet-400" />
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">482.4k</div>
          <div className="text-[10px] text-cyan-400 font-semibold">Optimized Context Windows</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Avg Cost / Resolution</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">$0.0039</div>
          <div className="text-[10px] text-emerald-400 font-semibold">GPT-4o-SupportOS Engine</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Guardrail Escalations</span>
            <ShieldAlert className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-amber-300 font-mono">1.2%</div>
          <div className="text-[10px] text-slate-400 font-semibold">Requires Merchant Action</div>
        </div>
      </div>

      {/* Trace Log Inspector Table */}
      <div className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-bold text-white">Execution Trace Inspector</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">Filter: All Traces</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#080B14]">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10">
              <tr>
                <th className="p-3">Trace ID</th>
                <th className="p-3">Timestamp</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Tool Execution Call</th>
                <th className="p-3">Cost ($)</th>
                <th className="p-3">Latency</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {mockTraceLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.02]">
                  <td className="p-3 text-violet-400 font-bold">{log.id}</td>
                  <td className="p-3 text-slate-400">{log.timestamp}</td>
                  <td className="p-3 text-white font-sans">{log.customer}</td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {log.toolCalls.map((t, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 text-emerald-400">${log.costUsd}</td>
                  <td className="p-3 text-cyan-400">{log.latencyMs}ms</td>
                  <td className="p-3">
                    {log.status === 'success' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                        <CheckCircle2 className="w-3 h-3" /> Executed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[10px]">
                        <AlertTriangle className="w-3 h-3" /> Guardrail Trigger
                      </span>
                    )}
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
