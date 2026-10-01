"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { ShieldAlert, DollarSign, Users, TrendingUp, RefreshCw, Check } from "lucide-react";

export function AdminDashboardView() {
  const { adminStats, pricingTiers, updatePricingTier } = useLoveJourney();
  const [editingTierId, setEditingTierId] = useState<string | null>(null);
  const [usdVal, setUsdVal] = useState(0);
  const [bdtVal, setBdtVal] = useState(0);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEdit = (tierId: string, currentUsd: number, currentBdt: number) => {
    setEditingTierId(tierId);
    setUsdVal(currentUsd);
    setBdtVal(currentBdt);
  };

  const handleSaveTier = (tierId: string) => {
    updatePricingTier(tierId, usdVal, bdtVal);
    setEditingTierId(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="p-4 space-y-5 pb-24">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-500" /> Admin Revenue Analytics
        </h1>
        <p className="text-[11px] text-slate-400">Private developer dashboard & dynamic backend pricing</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-[10px] text-slate-400 font-semibold block">Monthly Recurring (MRR)</span>
          <span className="text-lg font-black text-emerald-400 font-mono">${adminStats.mrr.toLocaleString()}</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-[10px] text-slate-400 font-semibold block">Active Monthly Users</span>
          <span className="text-lg font-black text-cyan-400 font-mono">{adminStats.mau.toLocaleString()}</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-[10px] text-slate-400 font-semibold block">Google Play Fee (15%)</span>
          <span className="text-lg font-black text-rose-400 font-mono">${adminStats.playFee.toLocaleString()}</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-[10px] text-slate-400 font-semibold block">Net Revenue</span>
          <span className="text-lg font-black text-violet-400 font-mono">${adminStats.netRevenue.toLocaleString()}</span>
        </div>
      </div>

      {/* Dynamic Backend Pricing Configuration Form */}
      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-3">
        <h2 className="text-sm font-bold text-white">Dynamic Pricing Configuration</h2>
        <p className="text-xs text-slate-400">Configure global USD & Bangladesh BDT tier pricing dynamically</p>

        {savedSuccess && (
          <div className="p-2 bg-emerald-500/20 text-emerald-300 text-xs rounded-xl flex items-center gap-1.5 font-semibold">
            <Check className="w-4 h-4" /> Pricing updated dynamically!
          </div>
        )}

        <div className="space-y-2">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className="p-3 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{tier.nameEn || tier.title}</span>
                <span className="text-[10px] font-mono text-cyan-400">{tier.id}</span>
              </div>

              {editingTierId === tier.id ? (
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex-1">
                    <label className="text-[9px] text-slate-400">USD $</label>
                    <input
                      type="number"
                      step="0.01"
                      value={usdVal}
                      onChange={(e) => setUsdVal(parseFloat(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-1 text-xs text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[9px] text-slate-400">BDT ৳</label>
                    <input
                      type="number"
                      value={bdtVal}
                      onChange={(e) => setBdtVal(parseInt(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-1 text-xs text-white"
                    />
                  </div>
                  <button
                    onClick={() => handleSaveTier(tier.id)}
                    className="mt-3 px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between pt-1 text-xs font-mono">
                  <span className="text-slate-300">${tier.priceUsd} / ৳{tier.priceBdt}</span>
                  <button
                    onClick={() => handleEdit(tier.id, tier.priceUsd, tier.priceBdt)}
                    className="text-[10px] font-bold text-rose-400 hover:underline"
                  >
                    Edit Pricing
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
