"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Share2, Heart, Sparkles, Download, Check } from "lucide-react";

export function ShareCardsView() {
  const { profile, subscription } = useLoveJourney();
  const [cardTitle, setCardTitle] = useState("1,460 Days of Love");
  const [subText, setSubText] = useState("Every single day with you is my favorite day ❤️");
  const [showWatermark, setShowWatermark] = useState(subscription.planId === "free");
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const handleShareCard = () => {
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      <div>
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Share2 className="w-5 h-5 text-rose-500" /> Shareable Milestone Cards
        </h1>
        <p className="text-[11px] text-slate-400">High-resolution cards for Instagram, WhatsApp & Wallpapers</p>
      </div>

      {/* Card Preview */}
      <div className="p-6 bg-gradient-to-br from-rose-950 via-slate-900 to-violet-950 border-2 border-rose-500/40 rounded-3xl text-center space-y-4 shadow-2xl relative overflow-hidden">
        <Heart className="w-32 h-32 text-rose-500/10 absolute -right-6 -bottom-6 fill-rose-500/10 animate-pulse" />

        <div className="flex items-center justify-center gap-2">
          <img
            src={profile.partner1Photo}
            alt={profile.partner1Name}
            className="w-12 h-12 rounded-full border-2 border-rose-400 shadow-md object-cover"
          />
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-bounce" />
          <img
            src={profile.partner2Photo}
            alt={profile.partner2Name}
            className="w-12 h-12 rounded-full border-2 border-violet-400 shadow-md object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-black text-white">{cardTitle}</h2>
          <p className="text-xs text-rose-200 mt-1 italic">"{subText}"</p>
        </div>

        <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-800">
          <span>{profile.partner1Nickname} & {profile.partner2Nickname} • Feb 14, 2022</span>
        </div>

        {showWatermark && (
          <span className="text-[9px] text-slate-500 block font-semibold">
            Made with Love Journey App
          </span>
        )}
      </div>

      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
        <div>
          <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Card Headline</label>
          <input
            type="text"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
          />
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Subtext / Message</label>
          <input
            type="text"
            value={subText}
            onChange={(e) => setSubText(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
          />
        </div>

        <button
          onClick={handleShareCard}
          className="w-full py-2.5 bg-gradient-to-r from-rose-500 to-violet-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition"
        >
          <Share2 className="w-4 h-4" />
          <span>Export & Share Card</span>
        </button>

        {copiedSuccess && (
          <div className="p-2 bg-emerald-500/20 text-emerald-300 text-xs rounded-xl text-center font-semibold flex items-center justify-center gap-1">
            <Check className="w-4 h-4" /> Card ready to share!
          </div>
        )}
      </div>
    </div>
  );
}
