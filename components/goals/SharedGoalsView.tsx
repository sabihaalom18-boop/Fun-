"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Target, Plus, CheckSquare, Square, Trophy, Plane, Film, DollarSign } from "lucide-react";

export function SharedGoalsView() {
  const { goals, addGoal, toggleGoalChecklist } = useLoveJourney();
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<"travel" | "savings" | "movies" | "fitness">("travel");
  const [checklistItems, setChecklistItems] = useState("");

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addGoal({
      title,
      category,
      isCompleted: false,
      checklist: checklistItems
        .split(",")
        .map((t, idx) => ({ id: `c_${idx}_${Date.now()}`, text: t.trim(), done: false }))
        .filter((c) => c.text.length > 0),
    });

    setShowAddModal(false);
    setTitle("");
    setChecklistItems("");
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent flex items-center gap-2">
            <Target className="w-5 h-5 text-rose-500" /> Couple Goals & Bucket List
          </h1>
          <p className="text-[11px] text-slate-400">Shared dreams, travel bucket list & future savings</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl flex items-center gap-1.5 text-xs font-semibold shadow-lg shadow-rose-500/20 transition"
        >
          <Plus className="w-4 h-4" />
          <span>New Goal</span>
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((g) => {
          const checklist = g.checklist || [];
          const completedCount = checklist.filter((c: any) => c.done).length;
          const progressPercent =
            checklist.length > 0 ? Math.round((completedCount / checklist.length) * 100) : (g.progressPercent || 0);

          return (
            <div
              key={g.id}
              className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-rose-400 uppercase bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  {g.category}
                </span>
                <span className="text-xs font-mono font-bold text-slate-300">{progressPercent}% Completed</span>
              </div>

              <h3 className="text-sm font-bold text-white">{g.title}</h3>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 to-violet-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Checklist Items */}
              <div className="space-y-1.5 pt-1">
                {checklist.map((item: any) => (
                  <button
                    key={item.id}
                    onClick={() => toggleGoalChecklist(g.id, item.id)}
                    className="w-full flex items-center gap-2 text-left p-1.5 rounded-xl hover:bg-slate-800/60 transition text-xs text-slate-300"
                  >
                    {item.done ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                    <span className={item.done ? "line-through text-slate-500" : ""}>{item.text}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-full max-w-sm space-y-4">
            <h2 className="text-base font-bold text-white">Create Shared Goal</h2>
            <form onSubmit={handleCreateGoal} className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Goal Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Sajek Valley Winter Tour"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white"
                >
                  <option value="travel">Travel</option>
                  <option value="savings">Savings</option>
                  <option value="movies">Movies</option>
                  <option value="fitness">Fitness</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Checklist Items (comma separated)</label>
                <textarea
                  rows={2}
                  value={checklistItems}
                  onChange={(e) => setChecklistItems(e.target.value)}
                  placeholder="e.g. Book resort, Buy tickets, Pack bags"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
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
                  Save Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
