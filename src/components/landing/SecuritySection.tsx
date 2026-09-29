'use client';

import React from 'react';
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck,
  Server,
  UserCheck
} from 'lucide-react';

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Server,
      title: 'Tenant Isolation',
      desc: 'Isolated store databases and vector spaces ensuring zero cross-tenant data leakage.'
    },
    {
      icon: Lock,
      title: 'Encrypted Data (AES-256)',
      desc: 'End-to-end encryption for stored credentials, customer emails, and order payloads.'
    },
    {
      icon: UserCheck,
      title: 'Role-Based Access (RBAC)',
      desc: 'Granular merchant permissions for support managers, developers, and agents.'
    },
    {
      icon: FileCheck,
      title: 'Immutable Audit Logs',
      desc: 'Every AI decision, human approval, and tool call is timestamped and recorded.'
    },
    {
      icon: Key,
      title: 'Secure OAuth & Webhooks',
      desc: 'HMAC signature verification for official Shopify & WooCommerce API connections.'
    },
    {
      icon: ShieldCheck,
      title: 'Least-Privilege Guardrails',
      desc: 'Strict authorization checks preventing AI from taking unauthorized store actions.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
            Enterprise Grade Security
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for enterprise privacy & high trust
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Your customer data, order details, and internal store policies remain completely secure and private.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
