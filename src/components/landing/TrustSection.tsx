'use client';

import React from 'react';
import {
  Bot,
  Search,
  UserCheck,
  Globe2,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

export default function TrustSection() {
  const brands = [
    { name: 'Shopify Plus', logo: 'SHOPIFY' },
    { name: 'WooCommerce', logo: 'WOO' },
    { name: 'Klaviyo', logo: 'KLAVIYO' },
    { name: 'Gorgias', logo: 'GORGIAS' },
    { name: 'Recharge', logo: 'RECHARGE' },
    { name: 'Yotpo', logo: 'YOTPO' }
  ];

  const metrics = [
    {
      icon: Bot,
      value: '24/7',
      label: 'Autonomous AI Support',
      desc: 'Instant replies in 0.18s across timezones'
    },
    {
      icon: Search,
      value: 'Real-Time',
      label: 'Order & Shipping Lookup',
      desc: 'Direct API lookup in Shopify & WooCommerce'
    },
    {
      icon: UserCheck,
      value: '100%',
      label: 'Safe Human Handoff',
      desc: 'Full context transfer & AI action approvals'
    },
    {
      icon: Globe2,
      value: '50+',
      label: 'Multilingual Support',
      desc: 'Fluent native translation in real time'
    }
  ];

  return (
    <section className="py-16 relative border-y border-white/5 bg-[#080B14]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Logo Strip Header */}
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">
            Trusted by modern e-commerce engineering & support teams
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300 pt-2">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-300 font-bold text-lg tracking-wider hover:text-cyan-400 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-violet-400" />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0D1220]/70 border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-600/20 transition-all mb-4">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
