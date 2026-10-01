"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { AndroidShell } from "@/components/shell/AndroidShell";
import { BottomNav, TabType } from "@/components/shell/BottomNav";
import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";

import { HomeDashboard } from "@/components/dashboard/HomeDashboard";
import { TimelineView } from "@/components/timeline/TimelineView";
import { CalendarView } from "@/components/calendar/CalendarView";
import { MemoryVaultView } from "@/components/memories/MemoryVaultView";

import { SpecialMessagesView } from "@/components/messages/SpecialMessagesView";
import { LoveNotesView } from "@/components/notes/LoveNotesView";
import { GamesAndDatesView } from "@/components/games/GamesAndDatesView";
import { SharedGoalsView } from "@/components/goals/SharedGoalsView";
import { WidgetSimulatorView } from "@/components/widgets/WidgetSimulatorView";
import { ShareCardsView } from "@/components/share-cards/ShareCardsView";
import { AdminDashboardView } from "@/components/admin/AdminDashboardView";
import { PricingView } from "@/components/pricing/PricingView";

import {
  Heart,
  Calendar as CalendarIcon,
  MessageCircle,
  FileText,
  Gamepad2,
  Target,
  Layout,
  Share2,
  Crown,
  ShieldCheck,
  Settings,
  Globe,
} from "lucide-react";

export function MainAppContent() {
  const { isOnboarded, setIsOnboarded, lang, setLang, profile, updateProfile, t } = useLoveJourney();
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [moreSubView, setMoreSubView] = useState<string | null>(null);

  if (!isOnboarded) {
    return (
      <AndroidShell>
        <div className="p-4 flex-1 flex items-center justify-center">
          <OnboardingWizard onComplete={() => setIsOnboarded(true)} />
        </div>
      </AndroidShell>
    );
  }

  const handleQuickAction = (subView: string) => {
    setActiveTab("more");
    setMoreSubView(subView);
  };

  const renderMoreSubView = () => {
    switch (moreSubView) {
      case "messages":
        return <SpecialMessagesView />;
      case "notes":
        return <LoveNotesView />;
      case "games":
        return <GamesAndDatesView />;
      case "goals":
        return <SharedGoalsView />;
      case "widgets":
        return <WidgetSimulatorView />;
      case "cards":
        return <ShareCardsView />;
      case "admin":
        return <AdminDashboardView />;
      case "pricing":
        return <PricingView />;
      default:
        return (
          <div className="p-4 space-y-4 pb-24">
            <div className="flex items-center justify-between pt-2">
              <h1 className="text-xl font-bold text-white">More Options & Tools</h1>
              <button
                onClick={() => setLang(lang === "en" ? "bn" : "en")}
                className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-rose-300 font-semibold flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === "en" ? "বাংলা" : "English"}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMoreSubView("messages")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-rose-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Special Messages</span>
              </button>

              <button
                onClick={() => setMoreSubView("notes")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-pink-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Love Notes & Letters</span>
              </button>

              <button
                onClick={() => setMoreSubView("games")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-violet-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Games & Date Generator</span>
              </button>

              <button
                onClick={() => setMoreSubView("goals")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-cyan-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Shared Goals</span>
              </button>

              <button
                onClick={() => setMoreSubView("widgets")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-amber-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Layout className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Android Widgets</span>
              </button>

              <button
                onClick={() => setMoreSubView("cards")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-emerald-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Share Cards</span>
              </button>

              <button
                onClick={() => setMoreSubView("pricing")}
                className="p-4 bg-gradient-to-br from-rose-900/40 to-slate-900 border border-rose-500/30 rounded-2xl flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                  <Crown className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-xs font-bold text-white">Subscriptions & Pricing</span>
              </button>

              <button
                onClick={() => setMoreSubView("admin")}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-emerald-500/40 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Admin Dashboard</span>
              </button>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <h3 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-rose-400" /> Couple Settings & Profile
              </h3>
              <div className="text-xs space-y-2 text-slate-400">
                <div className="flex justify-between">
                  <span>Relationship:</span>
                  <strong className="text-white capitalize">{profile.relationshipType}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Count Day 1:</span>
                  <input
                    type="checkbox"
                    checked={profile.countFirstDay}
                    onChange={(e) => updateProfile({ countFirstDay: e.target.checked })}
                    className="accent-rose-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AndroidShell>
      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {moreSubView && activeTab === "more" && (
            <button
              onClick={() => setMoreSubView(null)}
              className="m-4 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-rose-300 font-semibold"
            >
              ← Back to More Options
            </button>
          )}

          {activeTab === "home" && <HomeDashboard setActiveTab={setActiveTab} onQuickAction={handleQuickAction} />}
          {activeTab === "journey" && <TimelineView />}
          {activeTab === "calendar" && <CalendarView />}
          {activeTab === "memories" && <MemoryVaultView />}
          {activeTab === "more" && renderMoreSubView()}
        </div>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </AndroidShell>
  );
}
