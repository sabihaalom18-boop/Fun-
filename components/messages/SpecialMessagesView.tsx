"use client";

import React, { useState } from "react";
import { useLoveJourney } from "@/context/LoveJourneyContext";
import { Send, Heart, Sparkles, MessageCircle, Share2, Check, Clock, PhoneCall, BellRing } from "lucide-react";
import { ScheduledSpecialMessage, SpecialMessageTemplate } from "@/types";

export function SpecialMessagesView() {
  const {
    profile,
    specialTemplates,
    scheduledSpecialMessages,
    addScheduledSpecialMessage,
    toggleScheduledSpecialMessage,
    lang,
    t,
  } = useLoveJourney();

  const [selectedTemplate, setSelectedTemplate] = useState<SpecialMessageTemplate>(specialTemplates[0]);
  const [customText, setCustomText] = useState(
    specialTemplates[0].text
      .replace("{partner}", profile.partner2Name || "Nusrat")
      .replace("{days}", "1,460")
  );
  const [selectedTone, setSelectedTone] = useState<string>("romantic");
  const [targetApp, setTargetApp] = useState<"whatsapp" | "messenger" | "sms" | "email">("whatsapp");
  const [scheduledDate, setScheduledDate] = useState("2026-02-14");
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const tones = [
    { id: "romantic", label: "Romantic ❤️" },
    { id: "cute", label: "Cute 🥰" },
    { id: "emotional", label: "Emotional 🥹" },
    { id: "funny", label: "Funny 😄" },
    { id: "birthday", label: "Birthday 🎂" },
    { id: "anniversary", label: "Anniversary 🥂" },
    { id: "long-distance", label: "LDR ✈️" },
  ];

  const handleSelectTemplate = (template: SpecialMessageTemplate) => {
    setSelectedTemplate(template);
    setSelectedTone(template.tone);
    setCustomText(
      template.text
        .replace("{partner}", profile.partner2Name || "Nusrat")
        .replace("{days}", "1,460")
    );
  };

  const handleAISuggest = () => {
    const suggestionsEn = [
      `My dearest ${profile.partner2Name}, after spending all these days together, my heart still skips a beat whenever I see your smile. Happy Special Day! ❤️`,
      `To the person who makes every ordinary day feel extraordinary: Happy Anniversary ${profile.partner2Name}! You are my forever home. ✨`,
    ];
    const suggestionsBn = [
      `আমার জীবনের সবচেয়ে সুন্দর উপহার তুমি, ${profile.partner2Name}! একসাথে কাটানো প্রতিটি দিন যেন এক নতুন ভালোবাসার গল্প। শুভ বিশেষ দিন! ❤️`,
      `তোমার সাথেই আমার পৃথিবী সুন্দর। এই বিশেষ দিনে তোমার জন্য রইল হাজারো গোলাপের শুভেচ্ছা ও ভালোবাসা! 🌹`,
    ];

    const pool = lang === "bn" ? suggestionsBn : suggestionsEn;
    const randomMsg = pool[Math.floor(Math.random() * pool.length)];
    setCustomText(randomMsg);
  };

  const handleSafeShare = (app: "whatsapp" | "messenger" | "sms" | "email") => {
    setTargetApp(app);
    // Simulate Android Safe Intent Launch
    if (navigator.clipboard) {
      navigator.clipboard.writeText(customText);
    }
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addScheduledSpecialMessage({
      eventTitle: selectedTemplate.title,
      scheduledDate,
      messageText: customText,
      tone: selectedTone,
      lang: lang as "en" | "bn",
      targetApp,
      isEnabled: true,
    });
    setShowScheduleModal(false);
  };

  return (
    <div className="p-4 space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">
            Special Day Automation
          </span>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" /> Special Day Messages
          </h1>
        </div>
        <button
          onClick={() => setShowScheduleModal(true)}
          className="px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md"
        >
          <BellRing className="w-3.5 h-3.5" />
          <span>Schedule</span>
        </button>
      </div>

      {/* Tone Selector */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-slate-400 uppercase">Select Message Tone</label>
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {tones.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTone(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition ${
                selectedTone === t.id
                  ? "bg-rose-500 border-rose-400 text-white shadow-md shadow-rose-500/20"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Selector Carousel */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-bold text-slate-400 uppercase">Template Library</label>
          <button
            onClick={handleAISuggest}
            className="text-xs text-rose-400 font-semibold flex items-center gap-1 hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Suggestion</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {specialTemplates.map((st) => (
            <button
              key={st.id}
              onClick={() => handleSelectTemplate(st)}
              className={`p-3 rounded-2xl border text-left transition space-y-1 ${
                selectedTemplate.id === st.id
                  ? "bg-slate-900 border-rose-500 shadow-lg shadow-rose-500/10"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{st.title}</span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                  {st.lang}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 line-clamp-2">{st.text}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Message Preview & Editor */}
      <div className="p-4 bg-gradient-to-br from-slate-900 via-midnight-900 to-slate-900 border border-slate-800 rounded-3xl space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-rose-400" /> Live Message Preview
          </span>
          <span className="text-[10px] text-slate-400">Target: {profile.partner2Name}</span>
        </div>

        <textarea
          rows={4}
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl p-3 text-xs text-slate-100 focus:outline-none focus:border-rose-500 leading-relaxed font-sans"
        />

        {/* Safe Share Intents */}
        <div className="pt-2 border-t border-slate-800/80 space-y-2">
          <span className="text-[10px] font-semibold text-slate-400 block">
            Safe Send via Installed App (Pre-filled on click):
          </span>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => handleSafeShare("whatsapp")}
              className="py-2.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 shadow-md"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => handleSafeShare("messenger")}
              className="py-2.5 bg-sky-600/90 hover:bg-sky-600 text-white rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Messenger</span>
            </button>
            <button
              onClick={() => handleSafeShare("sms")}
              className="py-2.5 bg-violet-600/90 hover:bg-violet-600 text-white rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>SMS</span>
            </button>
            <button
              onClick={() => handleSafeShare("email")}
              className="py-2.5 bg-rose-600/90 hover:bg-rose-600 text-white rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 shadow-md"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Email</span>
            </button>
          </div>

          {copiedSuccess && (
            <div className="p-2 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-[11px] text-center flex items-center justify-center gap-1.5 font-semibold">
              <Check className="w-4 h-4" /> Message prepared & copied for safe app opening!
            </div>
          )}
        </div>
      </div>

      {/* Active Scheduled Reminders */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Scheduled Automated Reminders</h3>
        {scheduledSpecialMessages.map((sch) => (
          <div
            key={sch.id}
            className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between"
          >
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-white">{sch.eventTitle}</h4>
              <p className="text-[10px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" /> Date: {sch.scheduledDate} • App: {sch.targetApp}
              </p>
            </div>
            <button
              onClick={() => toggleScheduledSpecialMessage(sch.id)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                sch.isEnabled ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-slate-800 text-slate-500 border-slate-700"
              }`}
            >
              {sch.isEnabled ? "Active" : "Paused"}
            </button>
          </div>
        ))}
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 w-full max-w-sm space-y-4">
            <h2 className="text-base font-bold text-white">Schedule Special Day Message</h2>
            <form onSubmit={handleScheduleSubmit} className="space-y-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Event Name</label>
                <input
                  type="text"
                  required
                  defaultValue={selectedTemplate.title}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1 font-semibold">Scheduled Date</label>
                <input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl text-xs shadow-md"
                >
                  Confirm Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
