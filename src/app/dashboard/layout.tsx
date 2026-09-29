'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Inbox,
  Bot,
  Users,
  ShoppingBag,
  BookOpen,
  BarChart3,
  Activity,
  Workflow,
  CreditCard,
  Settings,
  Search,
  Bell,
  ChevronDown,
  ArrowLeft,
  Menu,
  X,
  Sparkles,
  Store
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStore, setActiveStore] = useState('Acme Apparel (Shopify)');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Inbox', href: '/dashboard/inbox', icon: Inbox, badge: '3' },
    { name: 'AI Agents', href: '/dashboard/agents', icon: Bot },
    { name: 'Customers', href: '/dashboard/customers', icon: Users },
    { name: 'Orders', href: '/dashboard/orders', icon: ShoppingBag },
    { name: 'Knowledge Base', href: '/dashboard/knowledge', icon: BookOpen },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Monitoring', href: '/dashboard/monitoring', icon: Activity },
    { name: 'Integrations', href: '/dashboard/integrations', icon: Workflow },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100 flex flex-col md:flex-row">

      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-white/10 bg-[#0D1220]/80 backdrop-blur-xl shrink-0 p-4 space-y-6">

        {/* Brand Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-violet-500/20">
              <div className="w-full h-full bg-[#080B14] rounded-[11px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-violet-400" />
              </div>
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              Support<span className="text-cyan-400">OS</span>
            </span>
          </Link>

          <Link
            href="/"
            title="Return to Marketing Landing Page"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Store Selector Dropdown */}
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Store className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-200 truncate">{activeStore}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500 text-black">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Card */}
        <div className="pt-4 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold text-xs">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-xs font-bold text-white truncate">John Doe</div>
            <div className="text-[10px] text-slate-400 truncate">john@acmeapparel.com</div>
          </div>
        </div>

      </aside>

      {/* MOBILE HEADER */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#0D1220]">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-violet-400" />
          <span className="font-extrabold text-white">SupportOS</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1220] border-b border-white/10 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold ${
                pathname === item.href ? 'bg-violet-600 text-white' : 'text-slate-300'
              }`}
            >
              <span>{item.name}</span>
              {item.badge && <span className="bg-cyan-400 text-black px-1.5 py-0.5 rounded text-[10px]">{item.badge}</span>}
            </Link>
          ))}
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">

        {/* Top Header Bar */}
        <header className="h-16 border-b border-white/10 bg-[#0D1220]/50 backdrop-blur-md px-6 flex items-center justify-between shrink-0">

          {/* Search Trigger */}
          <div className="relative w-64 sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search conversations, orders (#10482), policies..."
              className="w-full pl-9 pr-4 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl bg-[#0D1220] border border-white/15 p-3 space-y-2 shadow-2xl z-50 text-xs">
                  <div className="font-bold text-white border-b border-white/10 pb-2">Notifications</div>
                  <div className="p-2 rounded bg-violet-500/10 border border-violet-500/20 text-slate-200">
                    <span className="font-semibold text-violet-300">Human Handoff Required:</span> Order #9281 size exchange refund requested.
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>View Landing Site</span>
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 flex-1">{children}</main>

      </div>

    </div>
  );
}
