"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Sparkles, Filter, Search, Plus, MapPin, Tag, Lock, Heart, Calendar } from "lucide-react";
import { EventType } from "@/types";

export function TimelineView() {
  const { timeline, addTimelineEvent, lang, t } = useLoveJourney();
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<EventType>("first_date");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

  const categories: { id: string; label: string }[] = [
    { id: "all", label: "All Stories" },
    { id: "date", label: "Dates" },
    { id: "meeting", label: "First Met" },
    { id: "conversation", label: "Conversations" },
    { id: "trip", label: "Trips" },
    { id: "milestone", label: "Milestones" },
  ];

  const filteredTimeline = timeline.filter((item) => {
    const matchesCategory = filterCategory === "all" || item.category === filterCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTimelineEvent({
      title,
      category,
      date,
      description,
      location,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      photos: ["https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=80"],
      isPrivate: false,
    });
    setShowAddModal(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-500" /> Love Journey Timeline
          </h1>
          <p className="text-[11px] text-slate-400">Our complete relationship story in moments</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl flex items-center gap-1.5 text-xs font-semibold shadow-lg shadow-rose-500/20 transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Moment</span>
        </button>
      </div>

      {/* Search & Category Filter bar */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search memories, locations, tags..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold whitespace-nowrap border transition ${
                filterCategory === cat.id
                  ? "bg-rose-500 border-rose-400 text-white"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 border-l-2 border-rose-500/30 space-y-6 pt-2">
        {filteredTimeline.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">No story moments found. Add your first memory!</div>
        ) : (
          filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Pin Node */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-rose-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
              </div>

              {/* Event Card */}
              <div className="p-4 bg-slate-900/90 border border-slate-800/80 rounded-2xl space-y-2 hover:border-rose-500/30 transition shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {item.date} {item.time && `• ${item.time}`}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

                {item.photos && item.photos.length > 0 && (
                  <div className="rounded-xl overflow-hidden mt-2 border border-slate-800">
                    <img src={item.photos[0]} alt={item.title} className="w-full h-36 object-cover" />
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                  {item.location ? (
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-3 h-3 text-rose-400" /> {item.location}
                    </span>
                  ) : (
                    <span />
                  )}
                  {item.mood && <span className="text-amber-300 font-semibold">{item.mood}</span>}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Timeline Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-full max-w-sm space-y-4">
            <h2 className="text-base font-bold text-white">Add Journey Milestone</h2>
            <form onSubmit={handleCreateEvent} className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. First Kiss, Trip to Sylhet"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as EventType)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white"
                  >
                    <option value="date">Date</option>
                    <option value="meeting">First Meeting</option>
                    <option value="trip">Trip</option>
                    <option value="milestone">Milestone</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell your romantic memory..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dhaka, Bangladesh"
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
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
