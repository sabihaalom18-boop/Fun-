"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Lock, Unlock, Shield, Heart, Plus, Star, Trash2, Image, Sparkles, AlertCircle, BookOpen } from "lucide-react";

export function MemoryVaultView() {
  const { memories, addMemory, toggleMemoryFavorite, deleteMemory, unlockAppWithPin, profile, t } = useLoveJourney();
  const [activeTab, setActiveTab] = useState<"journal" | "vault">("journal");
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("💖 Happy");
  const [isVaultEntry, setIsVaultEntry] = useState(false);

  const handleUnlockVault = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlockAppWithPin(pinInput)) {
      setIsVaultUnlocked(true);
      setPinError(false);
      setPinInput("");
    } else {
      setPinError(true);
    }
  };

  const handleCreateMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addMemory({
      title,
      content,
      date: new Date().toISOString().split("T")[0],
      photos: ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80"],
      mood,
      tags: [activeTab === "vault" || isVaultEntry ? "vault" : "memory"],
      isFavorite: false,
      isPrivateVault: activeTab === "vault" || isVaultEntry,
      archived: false,
    });

    setShowAddModal(false);
    setTitle("");
    setContent("");
  };

  const displayedMemories = memories.filter((m) =>
    activeTab === "vault" ? m.isPrivateVault : !m.isPrivateVault
  );

  return (
    <div className="p-4 space-y-4 pb-24">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-rose-500" /> Memory Journal
          </h1>
          <p className="text-[11px] text-slate-400">Captured love moments & private photo vault</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl flex items-center gap-1.5 text-xs font-semibold shadow-lg shadow-rose-500/20 transition"
        >
          <Plus className="w-4 h-4" />
          <span>New Memory</span>
        </button>
      </div>

      {/* Switcher: Journal vs Private Photo Vault */}
      <div className="grid grid-cols-2 p-1 bg-slate-900 border border-slate-800 rounded-2xl">
        <button
          onClick={() => setActiveTab("journal")}
          className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            activeTab === "journal" ? "bg-rose-500 text-white shadow-md" : "text-slate-400 hover:text-white"
          }`}
        >
          <Heart className="w-4 h-4" /> Journal
        </button>
        <button
          onClick={() => setActiveTab("vault")}
          className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            activeTab === "vault" ? "bg-violet-600 text-white shadow-md" : "text-slate-400 hover:text-white"
          }`}
        >
          <Lock className="w-4 h-4" /> Private Vault 🔒
        </button>
      </div>

      {/* Vault Security Guard Check */}
      {activeTab === "vault" && !isVaultUnlocked ? (
        <div className="p-6 bg-slate-900/90 border border-violet-500/30 rounded-3xl text-center space-y-4 my-6">
          <div className="w-16 h-16 bg-violet-500/20 border border-violet-500/40 rounded-full flex items-center justify-center mx-auto text-violet-400 shadow-xl">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Private Photo Vault Locked</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              Photos & private letters here are encrypted and never shown publicly. Enter your 4-digit PIN.
            </p>
          </div>

          <form onSubmit={handleUnlockVault} className="space-y-3 max-w-xs mx-auto">
            <input
              type="password"
              maxLength={4}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder="••••"
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl py-2.5 text-center text-lg text-white font-mono tracking-widest focus:outline-none focus:border-violet-500"
            />
            {pinError && (
              <span className="text-[11px] text-rose-400 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {t("pinIncorrect")}
              </span>
            )}
            <button
              type="submit"
              className="w-full py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-violet-600/30 transition"
            >
              Unlock Vault
            </button>
          </form>
        </div>
      ) : (
        /* Memory Grid & Cards */
        <div className="space-y-4">
          {displayedMemories.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No entries in this section yet. Add your first memory!
            </div>
          ) : (
            displayedMemories.map((m) => (
              <div
                key={m.id}
                className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 shadow-lg hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                      {m.date}
                    </span>
                    {m.isPrivateVault && (
                      <span className="text-[10px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-md border border-violet-500/30 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> Vault
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleMemoryFavorite(m.id)}
                      className={`p-1.5 rounded-lg transition ${
                        m.isFavorite ? "text-amber-400 bg-amber-400/10" : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      <Star className={`w-4 h-4 ${m.isFavorite ? "fill-amber-400" : ""}`} />
                    </button>
                    <button
                      onClick={() => deleteMemory(m.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{m.content}</p>

                {m.photos && m.photos.length > 0 && (
                  <div className="rounded-xl overflow-hidden border border-slate-800">
                    <img src={m.photos[0]} alt={m.title} className="w-full h-40 object-cover" />
                  </div>
                )}

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span className="text-amber-300 font-semibold">{m.mood}</span>
                  <div className="flex gap-1">
                    {m.tags.map((tg) => (
                      <span key={tg} className="text-slate-500">#{tg}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Add Memory Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-full max-w-sm space-y-4">
            <h2 className="text-base font-bold text-white">Add New Memory</h2>
            <form onSubmit={handleCreateMemory} className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title of this memory"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Content</label>
                <textarea
                  rows={3}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Describe your special moment..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Mood</label>
                  <select
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white"
                  >
                    <option value="💖 Happy">💖 Happy</option>
                    <option value="🌊 Peaceful">🌊 Peaceful</option>
                    <option value="🥰 Loved">🥰 Loved</option>
                    <option value="🔐 Private">🔐 Private</option>
                  </select>
                </div>
                <div className="flex items-end pb-2">
                  <label className="flex items-center gap-2 text-xs text-slate-300 font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isVaultEntry}
                      onChange={(e) => setIsVaultEntry(e.target.checked)}
                      className="accent-violet-600 w-4 h-4"
                    />
                    <span>Save in Photo Vault 🔒</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl text-xs shadow-md"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
