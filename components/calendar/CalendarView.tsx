"use client";

import React, { useState, useEffect } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Calendar as CalendarIcon, Heart, Gift, Sparkles, Plus, Clock, PartyPopper } from "lucide-react";

export function CalendarView() {
  const { counters, lang, t } = useLoveJourney();
  const [selectedMonth, setSelectedMonth] = useState("2026-02");

  const milestones = [
    { days: 100, title: "100 Days of Love", date: "2022-05-25", celebration: "🌸 Milestone" },
    { days: 365, title: "1 Year Anniversary (365 Days)", date: "2023-02-14", celebration: "🥂 1 Year" },
    { days: 500, title: "500 Days Together", date: "2023-06-28", celebration: "🎉 Milestone" },
    { days: 1000, title: "1,000 Days of Love", date: "2024-11-10", celebration: "✨ Grand Milestone" },
    { days: 1460, title: "4th Anniversary (1,460 Days)", date: "2026-02-14", celebration: "❤️ 4 Years" },
  ];

  return (
    <div className="p-4 space-y-4 pb-24">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-rose-500" /> Anniversary & Event Calendar
        </h1>
        <p className="text-[11px] text-slate-400">Automated milestone calculations & upcoming couple events</p>
      </div>

      <div className="p-4 bg-gradient-to-r from-rose-950/60 via-slate-900 to-violet-950/60 border border-rose-500/20 rounded-3xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
            <PartyPopper className="w-4 h-4 text-amber-400" /> Next Big Anniversary
          </span>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold">
            Feb 14, 2026
          </span>
        </div>

        <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800 text-center">
          <span className="text-2xl font-black text-white font-mono">14 Days</span>
          <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
            Countdown to 4th Anniversary
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase">Automated Milestones</h3>
        <div className="space-y-2">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white">{m.title}</h4>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" /> Date: {m.date}
                </p>
              </div>
              <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-xl border border-rose-500/20">
                {m.celebration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
