'use client';

import React from 'react';
import {
  MessageSquare,
  BrainCircuit,
  BookOpen,
  ShoppingBag,
  CheckCircle2,
  UserCheck,
  ChevronRight
} from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Customer Message',
      desc: 'Inbound chat, email, or WhatsApp message received.'
    },
    {
      step: '02',
      icon: BrainCircuit,
      title: 'AI Understands',
      desc: 'Intent parsing, sentiment analysis & entity extraction.'
    },
    {
      step: '03',
      icon: BookOpen,
      title: 'Knowledge Base',
      desc: 'Retrieves store return policies & FAQ documentation.'
    },
    {
      step: '04',
      icon: ShoppingBag,
      title: 'Shopify / Woo',
      desc: 'Fetches live order status, tracking & customer history.'
    },
    {
      step: '05',
      icon: CheckCircle2,
      title: 'AI Resolves',
      desc: 'Sends accurate response with order context.'
    },
    {
      step: '06',
      icon: UserCheck,
      title: 'Human Handoff',
      desc: 'Triggers agent alert if high risk or refund approval needed.'
    }
  ];

  return (
    <section id="solutions" className="py-20 relative bg-[#0D1220]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
            Autonomous Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How SupportOS Processes Support
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A deterministic, hallucination-free pipeline connecting AI reasoning with live store data.
          </p>
        </div>

        {/* Horizontal Workflow Stepper */}
        <div className="relative">
          {/* Connecting line behind items */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-violet-600 via-cyan-400 to-indigo-600 -translate-y-6 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-5 rounded-xl bg-[#080B14] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Step Number Badge */}
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase px-2 py-0.5 rounded bg-white/5 mb-3">
                    Stage {item.step}
                  </span>

                  {/* Icon with glowing aura */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/30 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-lg shadow-violet-950/50">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Arrow for small screens */}
                  {idx < steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-slate-600 my-2 lg:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
