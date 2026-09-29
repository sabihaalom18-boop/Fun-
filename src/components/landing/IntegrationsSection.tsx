'use client';

import React from 'react';
import { ShoppingBag, Mail, MessageSquare, MessageCircle, BarChart, Code2, Webhook } from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Shopify & Shopify Plus', category: 'E-commerce Platform', icon: ShoppingBag, color: 'text-emerald-400' },
    { name: 'WooCommerce', category: 'E-commerce Platform', icon: ShoppingBag, color: 'text-violet-400' },
    { name: 'Customer Email (SMTP / IMAP)', category: 'Support Channel', icon: Mail, color: 'text-cyan-400' },
    { name: 'WhatsApp Business API', category: 'Messaging Channel', icon: MessageSquare, color: 'text-emerald-300' },
    { name: 'Slack / Teams Handoff', category: 'Internal Alerting', icon: MessageCircle, color: 'text-pink-400' },
    { name: 'Google Analytics 4', category: 'Support Metrics', icon: BarChart, color: 'text-amber-400' },
    { name: 'Custom Webhooks', category: 'Developer Tools', icon: Webhook, color: 'text-blue-400' },
    { name: 'REST & GraphQL API', category: 'Developer Tools', icon: Code2, color: 'text-indigo-400' }
  ];

  return (
    <section id="integrations" className="py-24 relative bg-[#0D1220]/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            Ecosystem Connectors
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect your entire e-commerce stack
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Plug SupportOS directly into your store, communication channels, and internal developer tools in under 5 minutes.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#080B14] border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-sm text-white">{item.name}</div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">{item.category}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
