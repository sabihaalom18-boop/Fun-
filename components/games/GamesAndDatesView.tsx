"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Gamepad2, Compass, Heart, Sparkles, Check, RefreshCw, Trophy, Flame } from "lucide-react";

export function GamesAndDatesView() {
  const { questions, answerQuestion, dateIdeas, toggleDateCompleted, toggleDateFavorite, lang } = useLoveJourney();
  const [subTab, setSubTab] = useState<"games" | "dates">("games");

  // Spin the wheel randomizer
  const [spinning, setSpinning] = useState(false);
  const [randomDate, setRandomDate] = useState(dateIdeas[0]);

  const spinWheel = () => {
    setSpinning(true);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * dateIdeas.length);
      setRandomDate(dateIdeas[idx]);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="p-4 space-y-4 pb-24">
      {/* Top Switcher */}
      <div className="grid grid-cols-2 p-1 bg-slate-900 border border-slate-800 rounded-2xl">
        <button
          onClick={() => setSubTab("games")}
          className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            subTab === "games" ? "bg-rose-500 text-white shadow-md" : "text-slate-400 hover:text-white"
          }`}
        >
          <Gamepad2 className="w-4 h-4" /> Couple Games
        </button>
        <button
          onClick={() => setSubTab("dates")}
          className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            subTab === "dates" ? "bg-violet-600 text-white shadow-md" : "text-slate-400 hover:text-white"
          }`}
        >
          <Compass className="w-4 h-4" /> Date Generator
        </button>
      </div>

      {subTab === "games" ? (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-rose-900/40 via-slate-900 to-violet-900/40 border border-rose-500/20 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-[10px] text-rose-400 font-bold uppercase">Daily Quiz Streak</span>
              <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400" /> 14 Days Fire Streak
              </h2>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-black">
              <Trophy className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase">Interactive Couple Questions</h3>
            {questions.map((q) => (
              <div
                key={q.id}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    {q.category}
                  </span>
                  {q.isCompleted && (
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Answered
                    </span>
                  )}
                </div>

                <h4 className="text-xs font-bold text-white leading-snug">
                  {lang === "bn" ? q.questionBn : q.questionEn}
                </h4>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px]">
                    <span className="text-[10px] text-rose-400 font-bold block mb-1">Partner 1</span>
                    <span className="text-slate-300">{q.partner1Answer || "Pending answer..."}</span>
                  </div>
                  <div className="p-2 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px]">
                    <span className="text-[10px] text-violet-400 font-bold block mb-1">Partner 2</span>
                    <span className="text-slate-300">{q.partner2Answer || "Pending answer..."}</span>
                  </div>
                </div>

                {!q.isCompleted && (
                  <button
                    onClick={() => answerQuestion(q.id, "Love her laugh!", "He loves coffee!")}
                    className="w-full py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition shadow-md"
                  >
                    Submit Both Answers
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Spin the Wheel Card */}
          <div className="p-5 bg-gradient-to-br from-violet-950/80 via-slate-900 to-rose-950/80 border border-violet-500/30 rounded-3xl text-center space-y-3 shadow-2xl">
            <Sparkles className="w-8 h-8 text-amber-300 mx-auto" />
            <h2 className="text-base font-bold text-white">Date Idea Randomizer Spinner</h2>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Can’t decide what to do tonight? Let Love Journey pick a romantic date for you!
            </p>

            <div className={`p-4 bg-slate-950/90 border border-slate-800 rounded-2xl transition ${spinning ? "animate-pulse scale-95" : ""}`}>
              <span className="text-[10px] text-violet-400 font-bold uppercase">{randomDate.category} Date</span>
              <h3 className="text-sm font-bold text-white mt-1">
                {lang === "bn" ? randomDate.titleBn : randomDate.titleEn}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === "bn" ? randomDate.descriptionBn : randomDate.descriptionEn}
              </p>
            </div>

            <button
              onClick={spinWheel}
              disabled={spinning}
              className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-rose-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 mx-auto hover:brightness-110 transition"
            >
              <RefreshCw className={`w-4 h-4 ${spinning ? "animate-spin" : ""}`} />
              <span>{spinning ? "Spinning..." : "Spin For Random Date"}</span>
            </button>
          </div>

          {/* Date Ideas Catalog */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase">Romantic Date Catalog</h3>
            {dateIdeas.map((d) => (
              <div
                key={d.id}
                className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2 flex items-center justify-between"
              >
                <div className="space-y-1 max-w-[70%]">
                  <span className="text-[10px] font-bold text-rose-400 uppercase bg-rose-500/10 px-2 py-0.5 rounded">
                    {d.category}
                  </span>
                  <h4 className="text-xs font-bold text-white">{lang === "bn" ? d.titleBn : d.titleEn}</h4>
                  <p className="text-[11px] text-slate-400">{lang === "bn" ? d.descriptionBn : d.descriptionEn}</p>
                </div>

                <button
                  onClick={() => toggleDateCompleted(d.id)}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center gap-1 ${
                    d.isCompleted
                      ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>{d.isCompleted ? "Done" : "Mark"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
