'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, ArrowRight, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B14]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-950/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all">
            <div className="w-full h-full bg-[#080B14] rounded-[11px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              Support<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">OS</span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                AI Native
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          <a
            href="#product"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Product
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#integrations"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Integrations
          </a>
          <a
            href="#monitoring"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            Resources
          </a>
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0D1220] rounded-[10px] group-hover:bg-opacity-0 text-white flex items-center gap-1.5">
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#080B14]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
          >
            Product <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
          >
            Solutions <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
          >
            Pricing <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a
            href="#integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
          >
            Integrations <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <a
            href="#monitoring"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
          >
            Resources <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/dashboard"
              className="w-full text-center py-2.5 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5 font-medium"
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg shadow-violet-500/20"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
