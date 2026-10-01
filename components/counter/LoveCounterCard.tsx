"use client";

import React, { useState, useEffect } from "react";
import { Heart, Clock, Calendar, Sparkles } from "lucide-react";
import { useLoveJourney } from "@/context/LoveJourneyContext";

export function LoveCounterCard() {
  const { profile, t } = useLoveJourney();
  const [diff, setDiff] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(profile.startDate || "2022-02-14T00:00:00.000Z");
      const now = new Date();

      let diffMs = now.getTime() - start.getTime();
      if (diffMs < 0) diffMs = 0;

      const totalSecs = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSecs / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Precise breakdown
      let tempDate = new Date(start.getTime());

      let years = now.getFullYear() - tempDate.getFullYear();
      let months = now.getMonth() - tempDate.getMonth();
      let days = now.getDate() - tempDate.getDate();
      let hours = now.getHours() - tempDate.getHours();
      let minutes = now.getMinutes() - tempDate.getMinutes();
      let seconds = now.getSeconds() - tempDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes -= 1;
      }
      if (minutes < 0) {
        minutes += 60;
        hours -= 1;
      }
      if (hours < 0) {
        hours += 24;
        days -= 1;
      }
      if (days < 0) {
        months -= 1;
        const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonthLastDay;
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setDiff({
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
        totalDays: profile.countFirstDay ? totalDays + 1 : totalDays,
        totalHours,
        totalMinutes,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [profile.startDate, profile.countFirstDay]);

  return (
    <div className="w-full rounded-3xl p-6 bg-gradient-to-br from-rose-950/70 via-slate-900 to-violet-950/70 border border-rose-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Background Subtle Heart & Sparkle decor */}
      <Heart className="w-40 h-40 text-rose-500/10 absolute -right-8 -bottom-8 pointer-events-none fill-rose-500/10 animate-pulse" />
      <Sparkles className="w-8 h-8 text-amber-300/30 absolute top-4 right-4 pointer-events-none" />

      {/* Header Profile Badges */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={profile.partner1Photo}
              alt={profile.partner1Name}
              className="w-11 h-11 rounded-full object-cover border-2 border-rose-400 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 text-[10px] bg-rose-500 text-white rounded-full px-1">
              ❤️
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white tracking-wide">
              {profile.partner1Nickname || profile.partner1Name} & {profile.partner2Nickname || profile.partner2Name}
            </span>
            <span className="text-[10px] text-rose-300 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(profile.startDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={profile.partner2Photo}
            alt={profile.partner2Name}
            className="w-11 h-11 rounded-full object-cover border-2 border-violet-400 shadow-md"
          />
        </div>
      </div>

      {/* Live Relationship Counter Ticker */}
      <div className="grid grid-cols-3 gap-2 my-4 text-center">
        <div className="p-2.5 bg-slate-900/80 rounded-2xl border border-rose-500/20 shadow-inner">
          <span className="text-2xl font-black text-white font-mono">{diff.years}</span>
          <span className="block text-[10px] text-rose-300 uppercase tracking-wider font-semibold">{t("years")}</span>
        </div>
        <div className="p-2.5 bg-slate-900/80 rounded-2xl border border-rose-500/20 shadow-inner">
          <span className="text-2xl font-black text-white font-mono">{diff.months}</span>
          <span className="block text-[10px] text-rose-300 uppercase tracking-wider font-semibold">{t("months")}</span>
        </div>
        <div className="p-2.5 bg-slate-900/80 rounded-2xl border border-rose-500/20 shadow-inner">
          <span className="text-2xl font-black text-white font-mono">{diff.days}</span>
          <span className="block text-[10px] text-rose-300 uppercase tracking-wider font-semibold">{t("days")}</span>
        </div>
      </div>

      {/* Realtime HMS Second Ticker */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div className="py-1.5 px-2 bg-rose-950/40 rounded-xl border border-rose-500/10">
          <span className="text-sm font-bold text-rose-200 font-mono">{diff.hours}</span>
          <span className="text-[9px] text-slate-400 block">{t("hours")}</span>
        </div>
        <div className="py-1.5 px-2 bg-rose-950/40 rounded-xl border border-rose-500/10">
          <span className="text-sm font-bold text-rose-200 font-mono">{diff.minutes}</span>
          <span className="text-[9px] text-slate-400 block">{t("minutes")}</span>
        </div>
        <div className="py-1.5 px-2 bg-rose-950/40 rounded-xl border border-rose-500/10">
          <span className="text-sm font-bold text-rose-400 font-mono animate-pulse">{diff.seconds}</span>
          <span className="text-[9px] text-slate-400 block">{t("seconds")}</span>
        </div>
      </div>

      {/* Aggregate Totals Footnote */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t("totalDays")}: <strong className="text-white font-mono">{diff.totalDays.toLocaleString()}</strong></span>
        </div>
        <div className="text-violet-300 font-mono text-[10px]">
          {diff.totalHours.toLocaleString()} hrs
        </div>
      </div>
    </div>
  );
}
