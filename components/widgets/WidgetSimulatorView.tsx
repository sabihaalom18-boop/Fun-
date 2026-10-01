"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Layout, Heart, Calendar, Clock, Image, EyeOff } from "lucide-react";

export function WidgetSimulatorView() {
  const { profile } = useLoveJourney();
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [privacyMode, setPrivacyMode] = useState(false);

  return (
    <div className="p-4 space-y-4 pb-24">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Layout className="w-5 h-5 text-rose-500" /> Android Home Widgets Simulator
        </h1>
        <p className="text-[11px] text-slate-400">Preview live widgets for your Android home screen</p>
      </div>

      <div className="flex items-center justify-between p-2 bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="flex gap-1">
          {(["small", "medium", "large"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize border ${
                size === s ? "bg-rose-500 text-white border-rose-400" : "bg-slate-800 text-slate-400 border-slate-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPrivacyMode(!privacyMode)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 border ${
            privacyMode ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : "bg-slate-800 text-slate-400 border-slate-700"
          }`}
        >
          <EyeOff className="w-3.5 h-3.5" /> Privacy
        </button>
      </div>

      {/* Widget Canvas Simulation */}
      <div className="flex items-center justify-center p-6 bg-slate-950 rounded-3xl border border-slate-800">
        <div
          className={`bg-gradient-to-br from-rose-950 via-slate-900 to-violet-950 border border-rose-500/30 rounded-3xl p-4 shadow-2xl relative transition-all duration-300 ${
            size === "small"
              ? "w-44 h-44 flex flex-col justify-between"
              : size === "medium"
              ? "w-72 h-44 flex flex-col justify-between"
              : "w-80 h-64 flex flex-col justify-between"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs">
              <Heart className="w-4 h-4 fill-rose-500" />
              <span>Love Counter</span>
            </div>
            <span className="text-[10px] text-slate-400">1,460 Days</span>
          </div>

          <div className="text-center my-auto">
            {!privacyMode ? (
              <>
                <h3 className="text-sm font-bold text-white">
                  {profile.partner1Nickname} ❤️ {profile.partner2Nickname}
                </h3>
                <span className="text-2xl font-black text-rose-400 font-mono">1,460 Days</span>
              </>
            ) : (
              <div className="text-xs text-slate-400 italic">🔒 Privacy Mode Active</div>
            )}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Next: Anniversary</span>
            <span className="text-cyan-400 font-mono">14 Days left</span>
          </div>
        </div>
      </div>
    </div>
  );
}
