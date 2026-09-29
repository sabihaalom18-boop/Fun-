'use client';

import React, { useState } from 'react';
import {
  Bot,
  ShieldAlert,
  UserCheck,
  Globe,
  CheckCircle2,
  Save,
  Sliders,
  Lock,
  Users
} from 'lucide-react';

export default function SettingsPage() {
  const [brandVoice, setBrandVoice] = useState('Professional & Empathetic');
  const [refundThreshold, setRefundThreshold] = useState('20.00');
  const [autoEscalateFrustrated, setAutoEscalateFrustrated] = useState(true);
  const [language, setLanguage] = useState('English (Auto-Detect 50+)');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            AI Engine & Merchant Policy Settings
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure SupportOS AI behavior, brand tone, sensitive action thresholds, and human handoff rules.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Settings updated successfully!
        </div>
      )}

      {/* AI Persona & Brand Voice */}
      <div className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Bot className="w-5 h-5 text-violet-400" />
          <h2 className="text-sm font-bold text-white">AI Persona & Brand Voice</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-slate-400 block mb-1">Brand Voice Style</label>
            <select
              value={brandVoice}
              onChange={(e) => setBrandVoice(e.target.value)}
              className="w-full bg-[#080B14] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
            >
              <option value="Professional & Empathetic">Professional & Empathetic (Recommended)</option>
              <option value="Casual & Friendly">Casual & Friendly</option>
              <option value="Formal Enterprise">Formal Enterprise</option>
              <option value="Short & Direct">Short & Direct</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Primary Support Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-[#080B14] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-violet-500"
            >
              <option value="English (Auto-Detect 50+)">English (Auto-Detect 50+ Languages)</option>
              <option value="Spanish (ES)">Spanish (ES)</option>
              <option value="French (FR)">French (FR)</option>
              <option value="German (DE)">German (DE)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Human Handoff & Safety Rules */}
      <div className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          <h2 className="text-sm font-bold text-white">Action Approval & Guardrails</h2>
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-slate-300 font-semibold block mb-1">
              Automatic Refund Threshold ($)
            </label>
            <p className="text-[11px] text-slate-400 mb-2">
              Refund requests exceeding this amount will automatically halt AI and require merchant approval.
            </p>
            <input
              type="text"
              value={refundThreshold}
              onChange={(e) => setRefundThreshold(e.target.value)}
              className="w-full sm:w-64 bg-[#080B14] border border-white/10 rounded-xl px-3 py-2 text-white font-mono"
            />
          </div>

          <div className="pt-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="autoEscalate"
              checked={autoEscalateFrustrated}
              onChange={(e) => setAutoEscalateFrustrated(e.target.checked)}
              className="w-4 h-4 rounded bg-[#080B14] border-white/10 text-violet-600 focus:ring-violet-500"
            />
            <label htmlFor="autoEscalate" className="text-slate-200 cursor-pointer">
              Auto-Escalate Frustrated Sentiment: Immediately alert human agents when negative emotion is detected.
            </label>
          </div>
        </div>
      </div>

      {/* Team Access */}
      <div className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Users className="w-5 h-5 text-cyan-400" />
          <h2 className="text-sm font-bold text-white">Team Members & Role Access</h2>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
            <div>
              <div className="font-bold text-white">John Doe (Owner)</div>
              <div className="text-[11px] text-slate-400">john@acmeapparel.com</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] uppercase font-bold">
              Admin / Full Control
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
            <div>
              <div className="font-bold text-white">Sarah Smith (Support Manager)</div>
              <div className="text-[11px] text-slate-400">sarah@acmeapparel.com</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px] uppercase font-bold">
              Support Manager
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
