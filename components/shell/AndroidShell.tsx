"use client";

import React, { useState, useEffect } from "react";
import { Wifi, Battery, Signal, Maximize2, Minimize2 } from "lucide-react";

export function AndroidShell({ children }: { children: React.ReactNode }) {
  const [currentTime, setCurrentTime] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-0 sm:p-4 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Desktop Helper Control */}
      <div className="hidden sm:flex items-center gap-3 mb-3 text-xs text-slate-400">
        <span className="font-semibold text-rose-400">Love Journey Android Application</span>
        <span>•</span>
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 transition text-slate-300"
        >
          {isFullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span>{isFullScreen ? "Mobile Device View" : "Expand Container"}</span>
        </button>
      </div>

      {/* Android Device Shell Container */}
      <div
        className={`w-full transition-all duration-300 bg-midnight-900 border border-slate-800/80 shadow-2xl overflow-hidden flex flex-col relative ${
          isFullScreen
            ? "max-w-4xl h-[92vh] rounded-2xl"
            : "max-w-[420px] h-[860px] rounded-[48px] border-[10px] border-slate-900 shadow-rose-900/10"
        }`}
      >
        {/* Android Status Bar */}
        <div className="w-full bg-slate-950/80 backdrop-blur-md px-6 py-2.5 flex items-center justify-between text-xs text-slate-300 z-50 select-none border-b border-slate-800/40">
          <span className="font-mono font-medium text-[11px] tracking-tight">{currentTime || "12:00"}</span>

          {/* Camera Notch */}
          <div className="w-16 h-4 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800/60 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono">98%</span>
              <Battery className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Main Content Viewport */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col bg-slate-950/90">
          {children}
        </div>

        {/* Android Bottom Pill Nav Indicator */}
        <div className="w-full bg-slate-950 py-1.5 flex justify-center items-center select-none border-t border-slate-900">
          <div className="w-32 h-1 bg-slate-700 rounded-full hover:bg-rose-500 transition-colors" />
        </div>
      </div>
    </div>
  );
}
