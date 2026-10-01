"use client";

import React, { useState } from "react";
import { LoveCounterCard } from "@/components/counter/LoveCounterCard";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import {
  Heart,
  Plus,
  Sparkles,
  MessageSquareQuote,
  HelpCircle,
  BookOpen,
  Send,
  Calendar,
  Gamepad2,
  Compass,
  Share2,
  Target,
  Shield,
  Crown,
  ChevronRight,
  Smile,
} from "lucide-react";
import { TabType } from "@/components/shell/BottomNav";

interface HomeDashboardProps {
  setActiveTab: (tab: TabType) => void;
  onQuickAction?: (subView: string) => void;
}

export function HomeDashboard({ setActiveTab, onQuickAction }: HomeDashboardProps) {
  const { profile, t, subscription, questions, memories, dateIdeas, lang } = useLoveJourney();
  const [selectedMood, setSelectedMood] = useState("💖 Deeply in Love");

  const moods = ["💖 Deeply in Love", "🥰 Missing You", "🎉 Celebrating", "☕ Cozy", "✈️ Longing"];

  const dailyQuestion = questions[0] || {
    questionEn: "What was your favorite moment with me this week?",
    questionBn: "এই সপ্তাহে আমাদের কাটানো প্রিয় মুহূর্ত কোনটি?",
  };

  const memoryOfDay = memories[0] || {
    title: "Rainy Day Walk in Sylhet",
    date: "2023-07-10",
  };

  const handleAction = (tab: TabType, subView?: string) => {
    setActiveTab(tab);
    if (subView && onQuickAction) {
      onQuickAction(subView);
    }
  };

  return (
    <div className="p-4 space-y-5 pb-24">
      {/* Top Welcome Bar */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <span className="text-[11px] text-rose-400 font-medium tracking-wide uppercase">
            {profile.relationshipType} Story
          </span>
          <h1 className="text-xl font-black bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
            {profile.partner1Nickname} & {profile.partner2Nickname}
          </h1>
        </div>

        {subscription.planId !== "free" ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-sm">
            <Crown className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Premium</span>
          </div>
        ) : (
          <button
            onClick={() => handleAction("more", "pricing")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-500/20 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Go Premium</span>
          </button>
        )}
      </div>

      {/* Main Live Love Counter */}
      <LoveCounterCard />

      {/* Quick Action Grid */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleAction("memories")}
            className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center transition group"
          >
            <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mb-1 group-hover:scale-110 transition">
              <Plus className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-slate-300">{t("addMemory")}</span>
          </button>

          <button
            onClick={() => handleAction("more", "messages")}
            className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center transition group"
          >
            <div className="w-8 h-8 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center mb-1 group-hover:scale-110 transition">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-slate-300">{t("sendPartnerMessage")}</span>
          </button>

          <button
            onClick={() => handleAction("more", "games")}
            className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center transition group"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-1 group-hover:scale-110 transition">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-slate-300">{t("coupleGame")}</span>
          </button>

          <button
            onClick={() => handleAction("more", "cards")}
            className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center transition group"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-1 group-hover:scale-110 transition">
              <Share2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-slate-300">{t("createCard")}</span>
          </button>
        </div>
      </div>

      {/* Daily Romantic Note */}
      <div className="p-4 bg-gradient-to-r from-rose-900/30 via-slate-900 to-violet-900/30 border border-rose-500/20 rounded-2xl space-y-2 relative">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4" />
            {t("dailyMessage")}
          </span>
          <span className="text-[10px] text-slate-400">Today</span>
        </div>
        <p className="text-xs text-slate-200 italic leading-relaxed">
          "{lang === "bn"
            ? "তোমার হাসিতেই আমার পুরো পৃথিবী উজ্জ্বল হয়ে ওঠে। প্রতিদিন তোমাকে একটু বেশি ভালোবাসি।"
            : "In your smile, I see something more beautiful than the stars. Every single day with you is my favorite day."}"
        </p>
      </div>

      {/* Couple Mood Selector */}
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Smile className="w-4 h-4 text-amber-400" /> Couple Mood
          </span>
          <span className="text-[10px] font-semibold text-rose-400">{selectedMood}</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMood(m)}
              className={`px-3 py-1.5 rounded-xl text-[11px] whitespace-nowrap border transition ${
                selectedMood === m
                  ? "bg-rose-500 text-white border-rose-400"
                  : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Daily Couple Question Card */}
      <div className="p-4 bg-slate-900/90 border border-violet-500/20 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-violet-300 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-violet-400" />
            {t("dailyQuestion")}
          </span>
          <span className="text-[10px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full font-semibold">
            Streak 🔥 14 Days
          </span>
        </div>
        <p className="text-xs font-semibold text-slate-100">
          {lang === "bn" ? dailyQuestion.questionBn : dailyQuestion.questionEn}
        </p>
        <button
          onClick={() => handleAction("more", "games")}
          className="w-full py-2 bg-violet-600/80 hover:bg-violet-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
        >
          <span>Answer Together</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Memory of the Day Highlight */}
      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
            📸
          </div>
          <div>
            <span className="text-[10px] text-rose-400 font-bold uppercase">{t("memoryOfDay")}</span>
            <h3 className="text-xs font-bold text-white">{memoryOfDay.title}</h3>
            <span className="text-[10px] text-slate-400">{memoryOfDay.date}</span>
          </div>
        </div>
        <button
          onClick={() => handleAction("memories")}
          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
