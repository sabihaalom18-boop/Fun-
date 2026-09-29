'use client';

import React from 'react';
import {
  MessageSquare,
  Store,
  Search,
  RotateCcw,
  UserCheck,
  ShieldAlert,
  Globe,
  Smile,
  BarChart3,
  Database,
  Activity,
  DollarSign
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: MessageSquare,
      title: '1. AI Customer Conversations',
      description: 'Autonomous multi-turn chat and email responses with human-like understanding and high empathy.'
    },
    {
      icon: Store,
      title: '2. Shopify & WooCommerce Sync',
      description: 'Native 1-click connectors to pull live order state, customer history, SKUs, and inventory.'
    },
    {
      icon: Search,
      title: '3. Real-time Order Lookup',
      description: 'Instant carrier tracking queries (UPS, FedEx, DHL, USPS) to give precise delivery updates.'
    },
    {
      icon: RotateCcw,
      title: '4. Return & Refund Intelligence',
      description: 'Evaluates store policies dynamically to check return windows, condition rules, and restocking fees.'
    },
    {
      icon: UserCheck,
      title: '5. Human Handoff',
      description: 'Seamlessly transfers conversations to human agents with AI summaries, tags, and suggested answers.'
    },
    {
      icon: ShieldAlert,
      title: '6. AI Action Approval',
      description: 'Sensitive operations like issuing refunds or changing shipping addresses require merchant approval.'
    },
    {
      icon: Globe,
      title: '7. Multilingual Support',
      description: 'Supports over 50 languages natively, maintaining brand voice and localized policy nuances.'
    },
    {
      icon: Smile,
      title: '8. Customer Sentiment',
      description: 'Detects buyer frustration early to adjust AI tone or auto-escalate to VIP support teams.'
    },
    {
      icon: BarChart3,
      title: '9. Support Analytics',
      description: 'Real-time analytics on resolution speed, common issues, escalation rates, and CSAT scores.'
    },
    {
      icon: Database,
      title: '10. Knowledge Base Sync',
      description: 'Auto-syncs PDFs, store FAQs, policy changes, and website pages with zero vector latency.'
    },
    {
      icon: Activity,
      title: '11. AI Monitoring',
      description: 'Full observability engine to trace LLM reasoning steps, tool execution logs, and latency.'
    },
    {
      icon: DollarSign,
      title: '12. Cost-per-resolution',
      description: 'Track exact AI resolution savings compared to traditional agent headcount expenses.'
    }
  ];

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            Enterprise Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything your support team needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Engineered specifically for fast-growing Shopify and WooCommerce merchants demanding accuracy, security, and speed.
          </p>
        </div>

        {/* Feature Cards Grid (12 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#0D1220]/80 border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/30 overflow-hidden"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 mb-4">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
