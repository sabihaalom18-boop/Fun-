'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Bot,
  UserCheck,
  Package,
  Truck,
  ShieldCheck,
  Cpu,
  Database,
  ShoppingBag,
  ExternalLink,
  MessageSquare,
  Activity
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] bg-gradient-to-tr from-violet-700/20 via-indigo-600/15 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-300 backdrop-blur-md shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Built for Shopify & WooCommerce brands</span>
            <span className="text-slate-500">•</span>
            <span className="text-violet-300 font-medium flex items-center gap-1">
              Zero Hallucination AI Engine
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Your AI Support Team for{' '}
            <span className="gradient-text-violet-cyan">E-commerce.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Resolve customer questions, understand orders, automate support, and hand off complex conversations to humans — all from one intelligent operating system.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 text-white font-semibold text-base shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Free</span>
              <ArrowRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#demo-section"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">
                <Play className="w-3.5 h-3.5 fill-violet-300 ml-0.5" />
              </div>
              <span>Watch Demo</span>
            </a>
          </div>

          {/* Feature Bullet Micro-copy */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>1-Click Shopify & WooCommerce Sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Human approval guardrails</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL: Animated Interactive SaaS Dashboard Preview */}
        <div className="mt-14 relative max-w-6xl mx-auto">
          {/* Glass Card Container */}
          <div className="relative rounded-2xl bg-[#0D1220]/90 border border-white/10 shadow-2xl shadow-indigo-950/50 backdrop-blur-2xl overflow-hidden p-3 sm:p-5">

            {/* Window Control Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  supportOS.app / live-session-10482
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="hidden sm:inline bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  Shopify Connected
                </span>
                <span className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <Activity className="w-3 h-3" /> AI Active (98% Conf)
                </span>
              </div>
            </div>

            {/* 3-Column Dashboard Visual Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4">

              {/* Left Column: Customer Conversation */}
              <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-semibold text-slate-200">Customer Thread</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Live • Store Chat</span>
                </div>

                <div className="space-y-3">
                  {/* Customer Message */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-violet-300">Elena Rostova</span>
                      <span>10:24 AM</span>
                    </div>
                    <p className="leading-relaxed">“Where is my order #10482? It was supposed to ship two days ago.”</p>
                  </div>

                  {/* AI Response Preview */}
                  <div className="bg-violet-950/30 border border-violet-500/20 rounded-lg p-3 text-xs text-slate-200 space-y-1 relative">
                    <div className="flex items-center justify-between text-[11px] text-violet-300 font-semibold">
                      <span className="flex items-center gap-1">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" /> SupportOS AI
                      </span>
                      <span className="text-cyan-400 font-mono">0.18s</span>
                    </div>
                    <p className="leading-relaxed text-slate-300">
                      “Hi Elena! Your order #10482 is currently in transit via UPS Next Day Air. Expected delivery: Tomorrow by 2:00 PM.”
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 bg-white/[0.02] px-3 py-2 rounded-lg border border-white/5">
                  <span>Sentiment: <strong className="text-emerald-400">Calm</strong></span>
                  <span>Lang: <strong className="text-slate-200">English (US)</strong></span>
                </div>
              </div>

              {/* Center Column: AI Reasoning Engine */}
              <div className="lg:col-span-4 bg-violet-950/10 border border-violet-500/20 rounded-xl p-4 flex flex-col justify-between space-y-3 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                      <span className="text-xs font-semibold text-slate-200">AI Reasoning Engine</span>
                    </div>
                    <span className="text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2 py-0.5 rounded font-mono">
                      Zero Hallucination
                    </span>
                  </div>

                  <div className="mt-3 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/5">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-violet-400" /> Querying Shopify API
                      </span>
                      <span className="text-emerald-400 font-mono">200 OK</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/5">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-cyan-400" /> Checking Carrier API
                      </span>
                      <span className="text-emerald-400 font-mono">In Transit</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/5">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-violet-400" /> Policy Guardrail
                      </span>
                      <span className="text-cyan-300 font-mono">Verified</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 rounded-lg border border-violet-500/30 text-center space-y-1">
                  <div className="text-[11px] text-slate-300">AI Confidence Rating</div>
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-300 font-mono">
                    98%
                  </div>
                </div>
              </div>

              {/* Right Column: Order Information & Action Guardrails */}
              <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-200">Shopify Order Card</span>
                    </div>
                    <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded">
                      #10482
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                      <div className="flex justify-between text-slate-300 font-medium">
                        <span>Merino Wool Jacket (Black / M)</span>
                        <span>$184.50</span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex justify-between">
                        <span>Status: <strong className="text-cyan-400">In Transit</strong></span>
                        <span>Carrier: <strong>UPS</strong></span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] flex items-center justify-between">
                      <span>Expected Delivery</span>
                      <span className="font-bold">Tomorrow, 2:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-slate-200">Human Handoff</div>
                      <div className="text-[10px] text-slate-400">Ready if escalation requested</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded">
                    Standby
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
