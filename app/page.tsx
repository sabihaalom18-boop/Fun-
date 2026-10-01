"use client";

import { LoveJourneyProvider } from "@/context/LoveJourneyContext";
import { MainAppContent } from "@/components/shell/MainAppContent";

export default function Home() {
  return (
    <LoveJourneyProvider>
      <MainAppContent />
    </LoveJourneyProvider>
  );
}
