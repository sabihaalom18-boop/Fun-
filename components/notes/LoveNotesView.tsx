"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { FileText, Plus, Heart, Sparkles, BookOpen, Clock, Send } from "lucide-react";

export function LoveNotesView() {
  const { notes, addNote, profile, lang } = useLoveJourney();
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<any>("daily");
  const [openWhen, setOpenWhen] = useState("");

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addNote({
      type: (category as any) || "letter",
      category,
      title,
      content,
      date: new Date().toISOString().split("T")[0],
      openWhenCondition: openWhen,
      createdAt: new Date().toISOString().split("T")[0],
      isFavorite: false,
      isArchived: false,
    });

    setShowAddModal(false);
    setTitle("");
    setContent("");
    setOpenWhen("");
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-rose-500" /> Love Notes & Open-When Letters
          </h1>
          <p className="text-[11px] text-slate-400">Daily notes, promises & scheduled letters</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl flex items-center gap-1.5 text-xs font-semibold shadow-lg shadow-rose-500/20 transition"
        >
          <Plus className="w-4 h-4" />
          <span>Write Note</span>
        </button>
      </div>

      <div className="space-y-3">
        {notes.map((n) => (
          <div
            key={n.id}
            className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-rose-400 uppercase bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                {n.category}
              </span>
              <span className="text-[10px] text-slate-400">{n.createdAt}</span>
            </div>

            <h3 className="text-xs font-bold text-white">{n.title}</h3>
            <p className="text-xs text-slate-300 italic leading-relaxed">"{n.content}"</p>

            {n.openWhenCondition && (
              <div className="p-2 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] text-violet-300 flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" /> Open When: {n.openWhenCondition}
              </div>
            )}
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-full max-w-sm space-y-4">
            <h2 className="text-base font-bold text-white">Write Love Note</h2>
            <form onSubmit={handleCreateNote} className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Open When You Miss Me"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Letter Content</label>
                <textarea
                  rows={4}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your sweet love letter..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white"
                >
                  <option value="daily">Daily Note</option>
                  <option value="open_when">Open-When Letter</option>
                  <option value="anniversary">Anniversary Letter</option>
                  <option value="promise">Promise Note</option>
                </select>
              </div>

              {category === "open_when" && (
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Open When Condition</label>
                  <input
                    type="text"
                    value={openWhen}
                    onChange={(e) => setOpenWhen(e.target.value)}
                    placeholder="e.g. When distance feels hard"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              )}

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
                  Save Letter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
