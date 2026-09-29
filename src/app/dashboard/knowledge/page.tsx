'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Upload,
  RefreshCw,
  CheckCircle2,
  FileText,
  ShoppingBag,
  HelpCircle,
  Plus,
  Search,
  Sparkles
} from 'lucide-react';
import { mockKnowledgeDocs, KnowledgeDoc } from '@/lib/data';

export default function KnowledgeBasePage() {
  const [docs, setDocs] = useState<KnowledgeDoc[]>(mockKnowledgeDocs);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Policy' | 'Shipping' | 'Product' | 'FAQ' | 'Store Sync'>('Policy');

  const handleAddDocument = () => {
    if (!newTitle.trim()) return;
    const newDoc: KnowledgeDoc = {
      id: `doc_${Date.now()}`,
      title: newTitle,
      category: newCategory,
      type: 'Document',
      lastUpdated: 'Just now',
      status: 'Synced',
      wordCount: 1250,
      tokenCount: 1680
    };
    setDocs([newDoc, ...docs]);
    setNewTitle('');
    setAddModalOpen(false);
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            Knowledge Base & Policy Sync
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Vector Index Active
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Import store policies, shipping guidelines, FAQs, and catalog items for zero-hallucination support.
          </p>
        </div>

        <button
          onClick={() => setAddModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Knowledge Document</span>
        </button>
      </div>

      {/* Sync Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Total Indexed Knowledge</span>
            <BookOpen className="w-4 h-4 text-violet-400" />
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">{docs.length} Sources</div>
          <div className="text-[10px] text-emerald-400 font-semibold">100% Deterministic Parsing</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Shopify Catalog Vector Sync</span>
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">1,840 Items</div>
          <div className="text-[10px] text-cyan-400 font-semibold">Auto-Synced 10m ago</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0D1220] border border-white/10 space-y-1">
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Total Vector Tokens</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">137,350</div>
          <div className="text-[10px] text-emerald-400 font-semibold">Ready for RAG Queries</div>
        </div>
      </div>

      {/* Document List Table */}
      <div className="p-6 rounded-2xl bg-[#0D1220] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white">Active Store Documents & FAQs</h2>
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search knowledge items..."
              className="w-full pl-8 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#080B14]">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10 font-mono">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Type</th>
                <th className="p-3">Last Updated</th>
                <th className="p-3">Tokens</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {docs.map((doc) => (
                <tr key={doc.id} className="hover:bg-white/[0.02]">
                  <td className="p-3 font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{doc.title}</span>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px] uppercase font-mono">
                      {doc.category}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{doc.type}</td>
                  <td className="p-3 text-slate-400 font-mono">{doc.lastUpdated}</td>
                  <td className="p-3 text-cyan-400 font-mono">{doc.tokenCount.toLocaleString()}</td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px] font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> {doc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Document Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0D1220] border border-white/15 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <h3 className="text-base font-bold text-white">Add Knowledge Document</h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Document Title / URL</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Extended Holiday Return Policy 2025"
                  className="w-full bg-[#080B14] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-[#080B14] border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="Policy">Policy</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Product">Product</option>
                  <option value="FAQ">FAQ</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 text-xs font-bold pt-2">
              <button
                onClick={() => setAddModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDocument}
                className="px-4 py-2 rounded-xl bg-violet-600 text-white shadow-lg"
              >
                Index Document
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
