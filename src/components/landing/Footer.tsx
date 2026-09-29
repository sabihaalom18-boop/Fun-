'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#080B14] border-t border-white/10 overflow-hidden pt-20 pb-12">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-violet-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* FINAL CTA BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-slate-900/60 border border-violet-500/30 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 text-xs font-semibold">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            Empower Your Brand
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Turn customer support into an AI-powered advantage.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join hundreds of modern Shopify & WooCommerce brands replacing manual ticket backlogs with autonomous 24/7 resolution.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#demo-section"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* FOOTER NAV COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 pt-6 border-t border-white/5 text-xs">

          {/* Brand Info Column */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#080B14] rounded-[7px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Support<span className="text-cyan-400">OS</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-xs">
              Autonomous AI customer support operating system built for high-growth e-commerce brands.
            </p>

            <div className="text-slate-500 flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Compliant & Encrypted</span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Product</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#product" className="hover:text-white transition-colors">AI Conversations</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Order Lookup</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Human Handoff</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Action Guardrails</a></li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Solutions</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">Shopify Brands</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">WooCommerce Stores</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Omnichannel Support</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">High Volume Support</a></li>
            </ul>
          </div>

          {/* Links Column 3: Integrations */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Integrations</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#integrations" className="hover:text-white transition-colors">Shopify Plus</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">WooCommerce</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">WhatsApp & Email</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Slack & Webhooks</a></li>
            </ul>
          </div>

          {/* Links Column 4: Pricing */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Pricing</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Starter ($39)</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Growth ($99)</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pro ($299)</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Enterprise ($799+)</a></li>
            </ul>
          </div>

          {/* Links Column 5: Developers */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Developers</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#monitoring" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#monitoring" className="hover:text-white transition-colors">Webhooks Docs</a></li>
              <li><a href="#monitoring" className="hover:text-white transition-colors">Trace Logs API</a></li>
              <li><a href="#monitoring" className="hover:text-white transition-colors">Status Page</a></li>
            </ul>
          </div>

          {/* Links Column 6: Resources */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Resources</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">E-commerce Benchmarks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} SupportOS Inc. All rights reserved. Built for Shopify & WooCommerce.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
