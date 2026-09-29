'use client';

import React, { useState } from 'react';
import {
  Bot,
  Send,
  UserCheck,
  ShieldAlert,
  CheckCircle2,
  Search,
  Filter,
  ShoppingBag,
  Truck,
  RotateCcw,
  FileText,
  Sparkles,
  Lock,
  MessageSquare,
  X,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { mockConversations, Conversation, Message } from '@/lib/data';

export default function InboxPage() {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [activeConvId, setActiveConvId] = useState<string>(mockConversations[0].id);
  const [filter, setFilter] = useState<'all' | 'ai_active' | 'human_needed' | 'resolved'>('all');
  const [responseMode, setResponseMode] = useState<'ai' | 'human' | 'note'>('human');
  const [inputText, setInputText] = useState('');
  const [actionModalOpen, setActionModalOpen] = useState(false);

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const filteredConversations = conversations.filter((c) => {
    if (filter === 'all') return true;
    return c.status === filter;
  });

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      sender: responseMode === 'ai' ? 'ai' : responseMode === 'human' ? 'agent' : 'system',
      senderName: responseMode === 'ai' ? 'SupportOS AI' : responseMode === 'human' ? 'Agent (John)' : 'Internal Note',
      text: inputText,
      timestamp: 'Just now'
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConvId
          ? {
              ...c,
              messages: [...c.messages, newMessage],
              lastUpdated: 'Just now'
            }
          : c
      )
    );

    setInputText('');
  };

  const handleApproveAction = () => {
    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeConvId) {
          const updatedMsgs = c.messages.map((m) =>
            m.suggestedAction ? { ...m, suggestedAction: { ...m.suggestedAction, approved: true } } : m
          );
          return { ...c, status: 'resolved', messages: updatedMsgs };
        }
        return c;
      })
    );
    setActionModalOpen(false);
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col space-y-4">

      {/* Inbox Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1220] p-4 rounded-2xl border border-white/10 shrink-0">
        <div>
          <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            E-commerce Customer Inbox
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {conversations.length} Active
            </span>
          </h1>
          <p className="text-xs text-slate-400">
            Real-time customer messages with automatic Shopify/WooCommerce order context & AI action approvals.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all' ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            All Threads
          </button>
          <button
            onClick={() => setFilter('ai_active')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
              filter === 'ai_active' ? 'bg-emerald-600 text-white' : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" /> AI Active
          </button>
          <button
            onClick={() => setFilter('human_needed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
              filter === 'human_needed' ? 'bg-amber-600 text-white' : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" /> Human Needed
          </button>
          <button
            onClick={() => setFilter('resolved')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'resolved' ? 'bg-cyan-600 text-white' : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            Resolved
          </button>
        </div>
      </div>

      {/* 3-PANE SUPPORT WORKSPACE */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0 overflow-hidden">

        {/* PANE 1: Conversation List (3 Cols) */}
        <div className="lg:col-span-3 bg-[#0D1220] border border-white/10 rounded-2xl flex flex-col min-h-0 overflow-hidden">
          <div className="p-3 border-b border-white/10">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by customer name or email..."
                className="w-full pl-8 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-white/5">
            {filteredConversations.map((c) => {
              const isSelected = c.id === activeConvId;
              return (
                <div
                  key={c.id}
                  onClick={() => setActiveConvId(c.id)}
                  className={`p-3.5 cursor-pointer transition-colors space-y-2 ${
                    isSelected ? 'bg-violet-950/40 border-l-4 border-violet-500' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      {c.customerName}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{c.lastUpdated}</span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-1 leading-tight">{c.summary}</p>

                  <div className="flex items-center justify-between text-[10px]">
                    {c.status === 'ai_active' && (
                      <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                        AI Active (98%)
                      </span>
                    )}
                    {c.status === 'human_needed' && (
                      <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 font-semibold">
                        Action Approval
                      </span>
                    )}
                    {c.status === 'resolved' && (
                      <span className="bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20 font-semibold">
                        Resolved
                      </span>
                    )}

                    <span className="text-slate-500 uppercase font-mono">{c.channel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PANE 2: Live Conversation Thread & Messaging (6 Cols) */}
        <div className="lg:col-span-6 bg-[#0D1220] border border-white/10 rounded-2xl flex flex-col min-h-0 overflow-hidden">

          {/* Thread Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center font-bold text-violet-300">
                {activeConv.customerName.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  {activeConv.customerName}
                  <span className="text-[10px] text-slate-400 font-normal">({activeConv.customerEmail})</span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span>Channel: <strong>{activeConv.channel}</strong></span>
                  <span>•</span>
                  <span>Sentiment: <strong className="text-amber-400">{activeConv.sentiment}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-mono font-semibold">
                Confidence: {(activeConv.aiConfidence * 100).toFixed(0)}%
              </span>
            </div>
          </div>

          {/* AI Summary Banner */}
          <div className="p-3 bg-violet-950/30 border-b border-violet-500/20 text-xs text-slate-300 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300">AI Summary:</strong> {activeConv.summary}
            </div>
          </div>

          {/* Message Thread Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {activeConv.messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col space-y-1 ${
                  m.sender === 'customer' ? 'items-start' : m.sender === 'ai' ? 'items-start' : 'items-end'
                }`}
              >
                <div className="flex items-center gap-2 text-[10px] text-slate-400 px-1">
                  <span className="font-bold text-slate-300">{m.senderName}</span>
                  <span>{m.timestamp}</span>
                </div>

                <div
                  className={`p-3.5 rounded-2xl max-w-lg space-y-2 ${
                    m.sender === 'customer'
                      ? 'bg-white/10 text-white rounded-tl-none border border-white/10'
                      : m.sender === 'ai'
                      ? 'bg-violet-950/50 text-slate-200 border border-violet-500/30 rounded-tl-none'
                      : 'bg-violet-600 text-white rounded-tr-none shadow-md'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>

                  {/* AI Tool & Source Badges */}
                  {m.sourcesUsed && (
                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1 text-[10px]">
                      <span className="text-slate-400">Sources:</span>
                      {m.sourcesUsed.map((src, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono">
                          {src}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Suggested AI Action Box with Approval (Requirement #24) */}
                  {m.suggestedAction && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2">
                      <div className="font-bold flex items-center justify-between text-amber-300 text-xs">
                        <span className="flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4" /> Sensitive AI Action Required
                        </span>
                        {m.suggestedAction.approved ? (
                          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                            Approved & Executed
                          </span>
                        ) : (
                          <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                            Approval Needed
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-amber-100">{m.suggestedAction.details}</p>

                      {!m.suggestedAction.approved && (
                        <button
                          onClick={() => setActionModalOpen(true)}
                          className="w-full py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-extrabold rounded-lg text-xs shadow-md"
                        >
                          Review & Execute Action
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Response Mode Selector & Composer */}
          <div className="p-3 border-t border-white/10 bg-white/[0.02] space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 text-[10px] uppercase font-bold">Response Mode:</span>
              <button
                onClick={() => setResponseMode('human')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  responseMode === 'human' ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400'
                }`}
              >
                Human Agent
              </button>
              <button
                onClick={() => setResponseMode('ai')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  responseMode === 'ai' ? 'bg-cyan-600 text-white' : 'bg-white/5 text-slate-400'
                }`}
              >
                Draft AI Reply
              </button>
              <button
                onClick={() => setResponseMode('note')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  responseMode === 'note' ? 'bg-amber-600 text-white' : 'bg-white/5 text-slate-400'
                }`}
              >
                Internal Note
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={
                  responseMode === 'human'
                    ? 'Type human response to customer...'
                    : responseMode === 'ai'
                    ? 'Prompt SupportOS AI to draft a response...'
                    : 'Add private internal team note...'
                }
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* PANE 3: Customer & Order Context Panel (3 Cols) */}
        <div className="lg:col-span-3 bg-[#0D1220] border border-white/10 rounded-2xl p-4 flex flex-col min-h-0 overflow-y-auto space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-indigo-400" /> Shopify Store Context
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
              Live API
            </span>
          </div>

          {activeConv.order ? (
            <div className="space-y-4">
              {/* Order Overview Card */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex justify-between items-center font-bold text-white">
                  <span>Order {activeConv.order.orderNumber}</span>
                  <span className="text-cyan-400 font-mono">${activeConv.order.totalAmount.toFixed(2)}</span>
                </div>
                <div className="text-[11px] text-slate-400 space-y-1">
                  <div>Status: <strong className="text-white">{activeConv.order.status}</strong></div>
                  <div>Carrier: <strong className="text-white">{activeConv.order.carrier}</strong></div>
                  <div>Tracking: <strong className="text-cyan-400 font-mono">{activeConv.order.trackingNumber}</strong></div>
                  <div>Expected: <strong className="text-emerald-400">{activeConv.order.expectedDelivery}</strong></div>
                </div>
              </div>

              {/* Order Purchased Items */}
              <div className="space-y-2">
                <div className="font-bold text-slate-300">Purchased Line Items:</div>
                {activeConv.order.items.map((item) => (
                  <div key={item.id} className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-[11px]">
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-slate-400 font-mono">SKU: {item.sku}</div>
                    </div>
                    <div className="font-bold text-slate-200">${item.price}</div>
                  </div>
                ))}
              </div>

              {/* Safety Rules & Refund Eligibility */}
              <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/20 space-y-1">
                <div className="font-bold text-violet-300 flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" /> Return Safety Rules
                </div>
                <div className="text-[11px] text-slate-300">
                  Return Window: <strong className="text-emerald-400">{activeConv.order.returnWindowDaysRemaining} Days Left</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-slate-500 italic">
              No direct order linked to this inquiry.
            </div>
          )}
        </div>

      </div>

      {/* Sensitive Action Approval Modal */}
      {actionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0D1220] border border-violet-500/40 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setActionModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Merchant Action Approval</h3>
                <p className="text-xs text-slate-400">Merchant permission required before API trigger.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="text-slate-300 font-semibold">Requested Action:</div>
              <p className="text-amber-200">
                {activeConv.messages.find((m) => m.suggestedAction)?.suggestedAction?.details}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 text-xs font-bold">
              <button
                onClick={() => setActionModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
              >
                Reject / Cancel
              </button>
              <button
                onClick={handleApproveAction}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" /> Approve & Execute Action
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
