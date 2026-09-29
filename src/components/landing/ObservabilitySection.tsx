'use client';

import React from 'react';
import {
  Activity,
  Cpu,
  Terminal,
  ShieldAlert,
  Zap,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { mockTraceLogs } from '@/lib/data';

export default function ObservabilitySection() {
  return (
    <section id="monitoring" className="py-24 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
            AI Observability & Trace Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See everything your AI is doing.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real-time traces, token consumption tracking, tool call inspection, latency breakdown, and complete audit logs for enterprise compliance.
          </p>
        </div>

        {/* Observability Dashboard Widget */}
        <div className="rounded-2xl bg-[#0D1220] border border-white/10 shadow-2xl overflow-hidden p-4 sm:p-6 space-y-6">

          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Avg Latency</span>
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">1.18s</div>
              <div className="text-[10px] text-emerald-400">99.4% SLA Compliance</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Token Efficiency</span>
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">1,733 / req</div>
              <div className="text-[10px] text-cyan-400">Optimized Vector Search</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Avg Cost / Resolution</span>
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">$0.0039</div>
              <div className="text-[10px] text-emerald-400">92% cheaper than human</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Guardrail Triggers</span>
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-amber-300">12 / 1,000</div>
              <div className="text-[10px] text-slate-400">Auto Escalate Triggered</div>
            </div>
          </div>

          {/* Trace Log Inspector Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Live AI Trace Stream
              </div>
              <span className="text-[11px] text-slate-400">Updated Real-Time</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#080B14]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10">
                  <tr>
                    <th className="p-3">Trace ID</th>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Tools Invoked</th>
                    <th className="p-3">Tokens</th>
                    <th className="p-3">Latency</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {mockTraceLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 text-violet-400 font-bold">{log.id}</td>
                      <td className="p-3 text-slate-400">{log.timestamp}</td>
                      <td className="p-3 text-white font-sans">{log.customer}</td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {log.toolCalls.map((tool, i) => (
                            <span key={i} className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px]">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3">{log.inputTokenCount + log.outputTokenCount}</td>
                      <td className="p-3 text-cyan-400">{log.latencyMs}ms</td>
                      <td className="p-3">
                        {log.status === 'success' ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                            <CheckCircle2 className="w-3 h-3" /> Executed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[10px]">
                            <AlertTriangle className="w-3 h-3" /> Guardrail
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

      </div>
    </section>
  );
}
