'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Settings, Sparkles, X } from 'lucide-react';
import { initialPricingTiers, PricingTier } from '@/lib/data';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>(initialPricingTiers);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Admin Configuration Handlers (Product Rule #13: Configurable Pricing)
  const handlePriceChange = (id: string, field: 'monthlyPrice' | 'yearlyPrice', val: number) => {
    setPricingTiers((prev) =>
      prev.map((tier) => (tier.id === id ? { ...tier, [field]: val } : tier))
    );
  };

  return (
    <section id="pricing" className="py-24 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable plans for growing brands
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            All plans include full access to Shopify/WooCommerce integrations, real-time tracking, and zero-hallucination AI engine.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-violet-950 border border-violet-500/30 rounded-full p-1 transition-colors"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
              Yearly Billing
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => {
            const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-[#0D1220] border-2 border-violet-500 shadow-2xl shadow-violet-950/50 scale-[1.02]'
                    : 'bg-[#0D1220]/70 border border-white/10 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="text-sm font-bold text-violet-300 tracking-wider uppercase">
                    {tier.name}
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono">${price}</span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>

                  <div className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20 text-center">
                    {tier.conversations}
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2.5">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/dashboard"
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30 hover:opacity-90'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Backend / Admin Pricing Configurator Button (Product Requirement #13) */}
        <div className="text-center pt-4">
          <button
            onClick={() => setAdminModalOpen(true)}
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            <Settings className="w-3.5 h-3.5 text-violet-400" />
            <span>Admin / Backend Pricing Configurator</span>
          </button>
        </div>

        {/* Admin Configurator Modal */}
        {adminModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0D1220] border border-white/15 rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative">
              <button
                onClick={() => setAdminModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-violet-400" /> Admin Pricing Configuration
                </h3>
                <p className="text-xs text-slate-400">
                  Dynamically adjust monthly and yearly tier prices without altering business logic.
                </p>
              </div>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {pricingTiers.map((tier) => (
                  <div key={tier.id} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                    <div className="font-bold text-violet-300">{tier.name}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Monthly Price ($)</label>
                        <input
                          type="number"
                          value={tier.monthlyPrice}
                          onChange={(e) => handlePriceChange(tier.id, 'monthlyPrice', parseFloat(e.target.value) || 0)}
                          className="w-full bg-[#080B14] border border-white/10 rounded px-2 py-1 text-white text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Yearly Price ($/mo)</label>
                        <input
                          type="number"
                          value={tier.yearlyPrice}
                          onChange={(e) => handlePriceChange(tier.id, 'yearlyPrice', parseFloat(e.target.value) || 0)}
                          className="w-full bg-[#080B14] border border-white/10 rounded px-2 py-1 text-white text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setAdminModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-xs"
                >
                  Save & Apply Prices
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
