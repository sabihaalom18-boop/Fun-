"use client";

import React from "react";
import { Heart, Calendar, BookOpen, Sparkles, LayoutGrid } from "lucide-react";
import { useLoveJourney } from "@/context/LoveJourneyContext";

export type TabType = "home" | "journey" | "calendar" | "memories" | "more";

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const { t } = useLoveJourney();

  const navItems = [
    { id: "home" as TabType, label: t("home"), icon: Heart },
    { id: "journey" as TabType, label: t("journey"), icon: Sparkles },
    { id: "calendar" as TabType, label: t("calendar"), icon: Calendar },
    { id: "memories" as TabType, label: t("memories"), icon: BookOpen },
    { id: "more" as TabType, label: t("more"), icon: LayoutGrid },
  ];

  return (
    <div className="w-full bg-slate-900/90 backdrop-blur-xl border-t border-slate-800/80 px-2 py-2 flex items-center justify-around z-40">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-300 relative ${
              isActive ? "text-rose-400 scale-105" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {isActive && (
              <span className="absolute -top-1 w-8 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full animate-pulse" />
            )}
            <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "fill-rose-500/20 stroke-rose-400 stroke-[2.2]" : "stroke-[1.8]"}`} />
            <span className="text-[10px] font-medium mt-1 tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
