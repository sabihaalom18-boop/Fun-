"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Heart, Sparkles, ArrowRight, Check, ShieldCheck, Lock, Globe, Moon, Sun, Bell } from "lucide-react";
import { Language, RelationshipType, ThemeMode } from "@/types";

export function OnboardingWizard({ onComplete }: { onComplete: () => void }) {
  const { profile, updateProfile, lang, setLang, theme, setTheme } = useLoveJourney();
  const [step, setStep] = useState<number>(1);

  const [p1Name, setP1Name] = useState(profile.partner1Name);
  const [p1Nick, setP1Nick] = useState(profile.partner1Nickname);
  const [p2Name, setP2Name] = useState(profile.partner2Name);
  const [p2Nick, setP2Nick] = useState(profile.partner2Nickname);
  const [relType, setRelType] = useState<RelationshipType>(profile.relationshipType);
  const [startDate, setStartDate] = useState("2022-02-14");
  const [startTime, setStartTime] = useState("18:30");
  const [timezone, setTimezone] = useState(profile.timezone || "Asia/Dhaka");
  const [pinLock, setPinLock] = useState(profile.pinLock || "1234");
  const [biometric, setBiometric] = useState(profile.biometricEnabled);

  const handleFinish = () => {
    updateProfile({
      partner1Name: p1Name || "Partner 1",
      partner1Nickname: p1Nick || p1Name || "Dear",
      partner2Name: p2Name || "Partner 2",
      partner2Nickname: p2Nick || p2Name || "Love",
      relationshipType: relType,
      startDate: new Date(`${startDate}T${startTime}:00`).toISOString(),
      startTime,
      timezone,
      pinLock,
      biometricEnabled: biometric,
    });
    localStorage.setItem("lj_onboarded", "true");
    onComplete();
  };

  return (
    <div className="min-h-[600px] w-full flex flex-col justify-between p-6 bg-gradient-to-br from-rose-950/40 via-midnight-900 to-violet-950/40 text-slate-100 rounded-3xl border border-rose-500/20 backdrop-blur-xl">
      {/* Top Header Progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          <span className="font-bold text-lg bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
            Love Journey
          </span>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
          Step {step} of 5
        </span>
      </div>

      {/* Step Contents */}
      <div className="my-8 flex-1 flex flex-col justify-center">
        {step === 1 && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="relative inline-block mx-auto">
              <div className="w-20 h-20 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-500/40 shadow-lg shadow-rose-500/10">
                <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-bounce" />
              </div>
              <Sparkles className="w-6 h-6 text-amber-300 absolute -top-1 -right-1 animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome to Love Journey</h1>
            <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
              Every moment of us, in one beautiful journey. Let’s set up your private couple space.
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 rounded-xl text-xs font-medium border transition ${
                  lang === "en" ? "bg-rose-500 text-white border-rose-400" : "bg-slate-800 text-slate-400 border-slate-700"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("bn")}
                className={`px-4 py-2 rounded-xl text-xs font-medium border transition ${
                  lang === "bn" ? "bg-rose-500 text-white border-rose-400" : "bg-slate-800 text-slate-400 border-slate-700"
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <h2 className="text-xl font-bold text-center text-rose-300">Who is in this journey?</h2>
            <p className="text-xs text-slate-400 text-center">Enter your names and sweet nicknames</p>

            <div className="space-y-3 pt-2">
              <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800">
                <label className="text-xs text-rose-400 font-semibold block mb-1">Partner 1 (You)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={p1Name}
                    onChange={(e) => setP1Name(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                  <input
                    type="text"
                    value={p1Nick}
                    onChange={(e) => setP1Nick(e.target.value)}
                    placeholder="Nickname"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800">
                <label className="text-xs text-violet-400 font-semibold block mb-1">Partner 2 (Love)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={p2Name}
                    onChange={(e) => setP2Name(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-violet-500"
                  />
                  <input
                    type="text"
                    value={p2Nick}
                    onChange={(e) => setP2Nick(e.target.value)}
                    placeholder="Nickname"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-violet-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <h2 className="text-xl font-bold text-center text-rose-300">Relationship Status & Special Date</h2>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-semibold">Relationship Type</label>
              <div className="grid grid-cols-2 gap-2">
                {(['Dating', 'Engaged', 'Married', 'Long-distance'] as RelationshipType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setRelType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize border transition ${
                      relType === type
                        ? "bg-gradient-to-r from-rose-500 to-violet-600 border-rose-400 text-white shadow-md shadow-rose-500/20"
                        : "bg-slate-900/80 border-slate-800 text-slate-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-xs text-slate-400 font-semibold">When did your story start?</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <h2 className="text-xl font-bold text-center text-rose-300">Preferences & Theme</h2>

            <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-400" /> Theme Mode
                </span>
                <div className="flex gap-1">
                  {(['dark', 'light', 'system'] as ThemeMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setTheme(m)}
                      className={`px-2 py-1 rounded-lg text-[10px] uppercase font-bold border ${
                        theme === m ? "bg-rose-500 text-white border-rose-400" : "bg-slate-800 border-slate-700 text-slate-400"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" /> Timezone
                </span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="bg-slate-800 text-xs text-white rounded-lg p-1 border border-slate-700"
                >
                  <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                  <option value="America/New_York">America/New_York (EST)</option>
                  <option value="Europe/London">Europe/London (GMT)</option>
                  <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4 animate-fadeIn text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-bold text-white">Private & Secure</h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              Your photos, notes, and memories are 100% private. We never share or display ads inside your private memory vault.
            </p>

            <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-rose-400" /> Set 4-Digit Security PIN
                </span>
                <input
                  type="password"
                  maxLength={4}
                  value={pinLock}
                  onChange={(e) => setPinLock(e.target.value)}
                  placeholder="1234"
                  className="w-16 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-center text-white tracking-widest font-mono"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-300 font-semibold">Enable Biometric Lock</span>
                <input
                  type="checkbox"
                  checked={biometric}
                  onChange={(e) => setBiometric(e.target.checked)}
                  className="accent-rose-500 w-4 h-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
          >
            Back
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-300"
          >
            Skip for now
          </button>
        )}

        {step < 5 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-violet-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-rose-500/25 hover:brightness-110"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:brightness-110 animate-pulse"
          >
            Begin Journey <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
