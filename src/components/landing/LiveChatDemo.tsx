'use client';

import React, { useState } from 'react';
import { Bot, Send, CheckCircle2, ShoppingBag, Truck, RefreshCw, UserCheck } from 'lucide-react';

export default function LiveChatDemo() {
  const [activeTab, setActiveTab] = useState<'returns' | 'tracking' | 'policy'>('returns');

  return (
    <section id="demo-section" className="py-20 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            Interactive AI Chat Demo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See SupportOS resolve real scenarios
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Select an e-commerce customer scenario below to see zero-latency AI resolution in action.
          </p>
        </div>

        {/* Scenario Toggle Tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('returns')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'returns'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <RefreshCw className="w-4 h-4" /> Scenario 1: Return & Exchange Query
          </button>
          <button
            onClick={() => setActiveTab('tracking')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'tracking'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Truck className="w-4 h-4" /> Scenario 2: Order Tracking #9281
          </button>
          <button
            onClick={() => setActiveTab('policy')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'policy'
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <ShoppingBag className="w-4 h-4" /> Scenario 3: Store Policy & Warranty
          </button>
        </div>

        {/* Live Interactive Simulation Widget */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0D1220] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="p-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  SupportOS AI Assistant
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Engine
                  </span>
                </div>
                <div className="text-xs text-slate-400">Connected to Storefront API & Shopify Engine</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cyan-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> AI Resolved Badge
            </div>
          </div>

          {/* Conversation Body */}
          <div className="p-6 space-y-4 min-h-[300px] text-xs sm:text-sm">
            {activeTab === 'returns' && (
              <>
                <div className="flex justify-end">
                  <div className="bg-violet-600 text-white p-3.5 rounded-2xl rounded-tr-none max-w-lg shadow-md">
                    “Can I return this jacket?”
                  </div>
                </div>

                <div className="flex justify-start items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-lg space-y-3">
                    <p>
                      “Yes. According to your store's return policy, this item can be returned within 30 days of delivery for a full refund or size exchange.”
                    </p>
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center justify-between">
                      <span>Return Window Status: <strong>Eligible (18 days remaining)</strong></span>
                      <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Auto Pre-Approved</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'tracking' && (
              <>
                <div className="flex justify-end">
                  <div className="bg-violet-600 text-white p-3.5 rounded-2xl rounded-tr-none max-w-lg shadow-md">
                    “I also want to know where my package #9281 is.”
                  </div>
                </div>

                <div className="flex justify-start items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-lg space-y-3">
                    <p>“Sure. Let me check your order details right away.”</p>

                    {/* Live Order Card */}
                    <div className="p-3.5 rounded-xl bg-[#080B14] border border-violet-500/30 space-y-2">
                      <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                        <span className="font-bold text-white">Order #9281</span>
                        <span className="text-cyan-400 font-mono">Shipped • FedEx Express</span>
                      </div>
                      <div className="text-xs text-slate-300 flex justify-between">
                        <span>Waterproof Trail Runner Sneaker</span>
                        <span>$240.00</span>
                      </div>
                      <div className="text-xs text-emerald-400 font-semibold pt-1 flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5" /> Expected Delivery: Tomorrow by 1:00 PM
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" /> AI resolved in 0.14 seconds
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'policy' && (
              <>
                <div className="flex justify-end">
                  <div className="bg-violet-600 text-white p-3.5 rounded-2xl rounded-tr-none max-w-lg shadow-md">
                    “What is your warranty policy on waterproof outerwear?”
                  </div>
                </div>

                <div className="flex justify-start items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-lg space-y-2">
                    <p>
                      “All outerwear carries a 1-Year Waterproof Performance Warranty. If your garment experiences seam degradation or membrane leaks, we replace it free of charge.”
                    </p>
                    <div className="text-xs text-slate-400 pt-2 border-t border-white/10">
                      Source: <span className="text-violet-300 underline">Store_Policy_Master_2025.pdf (Page 4)</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Interactive Chat Input Simulator */}
          <div className="p-4 bg-white/[0.02] border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              readOnly
              value={
                activeTab === 'returns'
                  ? "Can I exchange for size Large instead?"
                  : activeTab === 'tracking'
                  ? "Can I change the delivery address?"
                  : "How do I file a warranty claim?"
              }
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-300 focus:outline-none"
            />
            <button className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
