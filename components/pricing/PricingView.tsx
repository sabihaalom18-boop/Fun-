"use client";

import React from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Crown, Check, ShieldCheck, RefreshCw, Sparkles } from "lucide-react";

export function PricingView() {
  const { pricingTiers, subscription, subscribeToPlan, restorePurchases, t } = useLoveJourney();

  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="text-center space-y-2 pt-2">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20">
          <Crown className="w-6 h-6 fill-white" />
        </div>
        <h1 className="text-xl font-black bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 bg-clip-text text-transparent">
          Love Journey Premium
        </h1>
        <p className="text-xs text-slate-300 max-w-xs mx-auto">
          Unlock unlimited memories, photo vault, AI writing, and real-time partner sync
        </p>
      </div>

      <div className="space-y-3">
        {pricingTiers.map((tier) => {
          const isSelected = subscription.planId === tier.id;
          return (
            <div
              key={tier.id}
              className={`p-4 rounded-3xl border transition relative ${
                tier.isPopular
                  ? "bg-gradient-to-br from-rose-950/80 via-slate-900 to-violet-950/80 border-rose-500 shadow-xl shadow-rose-500/10"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-md">
                  MOST POPULAR
                </span>
              )}

              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-sm font-bold text-white">{tier.nameEn}</h3>
                  <span className="text-[10px] text-slate-400">{tier.nameBn}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-rose-400 font-mono">${tier.priceUsd}</span>
                  <span className="block text-[10px] text-slate-400">/ BDT ৳{tier.priceBdt}</span>
                </div>
              </div>

              <div className="space-y-1.5 my-3">
                {tier.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => subscribeToPlan(tier.id as any)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs transition shadow-md ${
                  isSelected
                    ? "bg-emerald-600 text-white"
                    : "bg-gradient-to-r from-rose-500 to-violet-600 text-white hover:brightness-110"
                }`}
              >
                {isSelected ? "Active Plan" : `Subscribe for $${tier.priceUsd}`}
              </button>
            </div>
          );
        })}
      </div>

      <div className="pt-2 flex justify-center">
        <button
          onClick={restorePurchases}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Restore Purchases
        </button>
      </div>
    </div>
  );
}
