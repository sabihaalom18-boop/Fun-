"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Language,
  ThemeMode,
  PartnerProfile,
  LoveCounterItem,
  CounterItem,
  TimelineEvent,
  Memory,
  LoveNote,
  CoupleGameQuestion,
  DateIdea,
  SharedGoal,
  PricingTier,
  UserSubscription,
  SpecialMessageTemplate,
  ScheduledSpecialMessage,
  AdminAnalytics,
  ActiveTab,
  MoreSubTab,
  CalendarEvent,
} from "@/types";

interface LoveJourneyContextType {
  language: Language;
  lang: Language;
  setLanguage: (lang: Language) => void;
  setLang: (lang: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  pinLock: string | null;
  setPinLock: (pin: string | null) => void;
  isUnlocked: boolean;
  setIsUnlocked: (unlocked: boolean) => void;
  isBiometricsEnabled: boolean;
  setIsBiometricsEnabled: (enabled: boolean) => void;
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (completed: boolean) => void;
  isOnboarded: boolean;
  setIsOnboarded: (completed: boolean) => void;

  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  moreSubTab: MoreSubTab;
  setMoreSubTab: (tab: MoreSubTab) => void;

  profile: PartnerProfile;
  updateProfile: (updated: Partial<PartnerProfile>) => void;

  isPremium: boolean;
  subscriptionPlan: string;
  subscription: UserSubscription;
  pricingTiers: PricingTier[];
  updatePricingTier: (id: string, newUsd: number, newBdt: number) => void;
  purchasePlan: (planId: string) => void;
  subscribeToPlan: (planId: string) => void;
  restorePurchases: () => boolean;

  counters: CounterItem[];
  addCounter: (counter: Omit<CounterItem, "id">) => void;

  timelineEvents: TimelineEvent[];
  timeline: TimelineEvent[];
  addTimelineEvent: (event: Omit<TimelineEvent, "id">) => void;

  memories: Memory[];
  addMemory: (memory: Omit<Memory, "id">) => void;
  toggleMemoryFavorite: (id: string) => void;
  toggleFavoriteMemory: (id: string) => void;
  deleteMemory: (id: string) => void;
  unlockAppWithPin: (pin: string) => boolean;

  calendarEvents: CalendarEvent[];
  addCalendarEvent: (event: Omit<CalendarEvent, "id">) => void;

  loveNotes: LoveNote[];
  notes: LoveNote[];
  addLoveNote: (note: Omit<LoveNote, "id">) => void;
  addNote: (note: Omit<LoveNote, "id">) => void;

  specialDayTemplates: SpecialMessageTemplate[];
  specialTemplates: SpecialMessageTemplate[];
  scheduledSpecialMessages: ScheduledSpecialMessage[];
  addScheduledSpecialMessage: (msg: Omit<ScheduledSpecialMessage, "id">) => void;
  toggleScheduledSpecialMessage: (id: string) => void;

  questions: CoupleGameQuestion[];
  answerQuestion: (id: string, myAnswer: string, partnerAnswer: string) => void;

  dateIdeas: DateIdea[];
  toggleDateCompleted: (id: string) => void;
  toggleDateFavorite: (id: string) => void;
  toggleDateIdeaCompleted: (id: string) => void;
  toggleDateIdeaFavorite: (id: string) => void;

  goals: SharedGoal[];
  addGoal: (goal: Omit<SharedGoal, "id"> & { progressPercent?: number }) => void;
  toggleGoalChecklist: (goalId: string, itemIdOrIndex?: string | number) => void;
  toggleGoalCompleted: (id: string) => void;
  updateGoalProgress: (id: string, progress: number) => void;

  adminAnalytics: AdminAnalytics;
  adminStats: AdminAnalytics;

  t: (key: string) => string;
}

const initialProfile: PartnerProfile = {
  name: "Aaryan",
  partnerName: "Nusrat",
  partner1Name: "Aaryan",
  partner1Nickname: "Aar",
  partner1Photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  partner1Birthday: "1998-05-14",
  partner1Zodiac: "Taurus",
  partner1LoveLanguage: "Words of Affirmation",

  partner2Name: "Nusrat",
  partner2Nickname: "Jaan",
  partner2Photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
  partner2Birthday: "2000-11-20",
  partner2Zodiac: "Scorpio",
  partner2LoveLanguage: "Quality Time",

  nickname: "Aar",
  partnerNickname: "Jaan",
  photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  partnerPhotoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",

  relationshipType: "Dating",
  startDate: "2022-02-14T00:00:00.000Z",
  startTime: "18:30",
  timezone: "Asia/Dhaka",
  timeZone: "Asia/Dhaka",
  location: "Dhaka, Bangladesh",
  includeFirstDay: true,
  countFirstDay: true,
  pinLock: "1234",
  biometricEnabled: true,
  birthday: "1998-05-14",
  partnerBirthday: "2000-11-20",
  loveLanguage: "Words of Affirmation",
  favoriteFood: "Kacchi Biryani & Chocolate Lava Cake",
};

const defaultCounters: CounterItem[] = [
  { id: "c1", title: "First Meeting", date: "2021-08-10T14:30:00.000Z", category: "meeting", icon: "Sparkles" },
  { id: "c2", title: "Relationship Start", date: "2022-02-14T18:30:00.000Z", category: "relationship", icon: "Heart" },
  { id: "c3", title: "Future Wedding", date: "2027-11-20T10:00:00.000Z", category: "wedding", icon: "Crown", isFutureCountdown: true },
];

const defaultTimeline: TimelineEvent[] = [
  {
    id: "t1",
    title: "First Rainy Coffee Date",
    date: "2021-08-10",
    time: "14:30",
    description: "Met at Dhanmondi Lake cafe during a heavy monsoon rain. Talked for 3 hours straight.",
    category: "First Met",
    location: "Dhanmondi, Dhaka",
    photos: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80"],
    tags: ["Rain", "Coffee", "Dhaka"],
    isPrivate: false,
  },
  {
    id: "t2",
    title: "Our Relationship Started",
    date: "2022-02-14",
    time: "18:30",
    description: "Exchanged promises under the stars on Valentine's Day.",
    category: "Anniversary",
    location: "Sreemangal Tea Gardens",
    photos: ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80"],
    tags: ["Love", "Roses", "Monolova"],
    isPrivate: false,
  },
];

const defaultMemories: Memory[] = [
  {
    id: "m1",
    title: "Sunset Walk at Cox's Bazar",
    date: "2023-05-12",
    content: "Barefoot on the sandy beach watching the waves sparkle under golden light.",
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"],
    tags: ["Travel", "Beach", "Sunset"],
    isFavorite: true,
    isArchived: false,
    archived: false,
    isVaultPrivate: false,
    isPrivateVault: false,
  },
  {
    id: "m2",
    title: "Secret Love Note in Encrypted Vault",
    date: "2023-12-25",
    content: "Personal, private memories encrypted securely inside the local device vault.",
    photos: ["https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80"],
    tags: ["Vault", "Private"],
    isFavorite: true,
    isArchived: false,
    archived: false,
    isVaultPrivate: true,
    isPrivateVault: true,
  },
];

const defaultNotes: LoveNote[] = [
  {
    id: "n1",
    type: "daily",
    category: "daily",
    title: "Morning Sun Note",
    content: "Thinking of your smile makes my entire day feel bright and easy.",
    date: "2026-02-01",
    createdAt: "2026-02-01",
    isFavorite: true,
    isArchived: false,
  },
];

const defaultTemplates: SpecialMessageTemplate[] = [
  {
    id: "sm1",
    eventKey: "anniversary",
    title: "Happy Relationship Anniversary",
    titleEn: "Happy Relationship Anniversary",
    titleBn: "শুভ বার্ষিকী বার্তা",
    text: "Happy Anniversary my love {partner}! Every single day of our {days} days together feels like a dream come true.",
    messageEn: "Happy Anniversary my love {partner}! Every single day of our {days} days together feels like a dream come true.",
    messageBn: "শুভ বিবাহ বার্ষিকী আমার ভালোবাসা {partner}! তোমার সাথে কাটানো প্রতিটি দিন যেন এক সুন্দর স্বপ্নের মতো।",
    lang: "en",
    tone: "romantic",
  },
  {
    id: "sm2",
    eventKey: "milestone_100",
    title: "100 Days Together Celebration",
    titleEn: "100 Days Together Celebration",
    titleBn: "১০০ দিনের ভালোবাসার স্মারক",
    text: "Happy 100 Days together {partner}! Time flies when I am in love with you.",
    messageEn: "Happy 100 Days together {partner}! Time flies when I am in love with you.",
    messageBn: "একসাথে ১০০ দিন পূর্ণ করার শুভেচ্ছা {partner}! তোমার পাশে থাকলে সময় কীভাবে কেটে যায় টের পাই না।",
    lang: "en",
    tone: "cute",
  },
];

const defaultScheduled: ScheduledSpecialMessage[] = [
  {
    id: "sch1",
    eventTitle: "Anniversary Message",
    scheduledDate: "2026-02-14",
    messageText: "Happy Anniversary Jaan! Sending you all my heart today.",
    tone: "romantic",
    lang: "en",
    targetApp: "WhatsApp",
    isEnabled: true,
    isActive: true,
    status: "scheduled",
  },
];

const defaultQuestions: CoupleGameQuestion[] = [
  {
    id: "q1",
    textEn: "What was your very first impression of me?",
    textBn: "আমাকে প্রথম দেখার পর তোমার প্রথম অনুভূতি কেমন ছিল?",
    questionEn: "What was your very first impression of me?",
    questionBn: "আমাকে প্রথম দেখার পর তোমার প্রথম অনুভূতি কেমন ছিল?",
    category: "Memories",
    myAnswer: "Super cute and stylish!",
    partnerAnswer: "Quiet but very thoughtful.",
    partner1Answer: "Super cute and stylish!",
    partner2Answer: "Quiet but very thoughtful.",
    isCompleted: true,
  },
];

const defaultDateIdeas: DateIdea[] = [
  {
    id: "d1",
    title: "Home Rooftop Stargazing & Barbecue",
    titleEn: "Home Rooftop Stargazing & Barbecue",
    titleBn: "ছাদে তারার নিচে বার্বিকিউ সন্ধ্যা",
    category: "at_home",
    description: "Set up cozy fairy lights, grill chicken tikka, and listen to old acoustic songs.",
    descriptionEn: "Set up cozy fairy lights, grill chicken tikka, and listen to old acoustic songs.",
    descriptionBn: "বাতি জ্বালিয়ে গান শুনতে শুনতে চিকেন টিক্কা গ্রিল করার মুহূর্ত",
    budget: "$",
    isCompleted: true,
    isFavorite: true,
  },
];

const defaultGoals: SharedGoal[] = [
  {
    id: "g1",
    title: "Visit Sajek Valley Cloud Resorts",
    category: "travel",
    isCompleted: true,
    progressPercent: 100,
    checklist: [
      { id: "c1", text: "Book cottage", done: true },
      { id: "c2", text: "Pack warm clothes", done: true },
    ],
  },
];

const defaultPricingTiers: PricingTier[] = [
  { id: "love_basic_monthly", title: "Basic Monthly", nameEn: "Basic Monthly", nameBn: "বেসিক মান্থলি", priceUsd: 1.49, priceBdt: 59, billingFrequency: "monthly", features: ["1 Couple Profile", "Live Love Counter", "50 Timeline Entries"] },
  { id: "love_premium_monthly", title: "Premium Monthly", nameEn: "Premium Monthly", nameBn: "প্রিমিয়াম মান্থলি", priceUsd: 4.49, priceBdt: 199, billingFrequency: "monthly", isPopular: true, features: ["Unlimited Memories & Vault", "Encrypted Cloud Backup", "AI Writing Assistant", "No Ads"] },
  { id: "love_couple_plus_monthly", title: "Couple Plus", nameEn: "Couple Plus", nameBn: "কপল প্লাস", priceUsd: 7.49, priceBdt: 349, billingFrequency: "monthly", features: ["2 Synced Partner Accounts", "LDR Time-Zone Sync", "Real-Time Sync"] },
  { id: "love_premium_yearly", title: "Yearly Premium", nameEn: "Yearly Premium", nameBn: "ইয়ারলি প্রিমিয়াম", priceUsd: 39.99, priceBdt: 1499, billingFrequency: "yearly", features: ["Everything in Premium", "Save over 25%"] },
  { id: "love_lifetime", title: "Lifetime VIP Pass", nameEn: "Lifetime VIP Pass", nameBn: "লাইফটাইম ভিআইপি পাস", priceUsd: 99.99, priceBdt: 3499, billingFrequency: "lifetime", features: ["Pay Once, Love Forever", "VIP Priority Support"] },
];

const LoveJourneyContext = createContext<LoveJourneyContextType | undefined>(undefined);

export function LoveJourneyProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [pinLock, setPinLock] = useState<string | null>("1234");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isBiometricsEnabled, setIsBiometricsEnabled] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [moreSubTab, setMoreSubTab] = useState<MoreSubTab>("notes");

  const [profile, setProfile] = useState<PartnerProfile>(initialProfile);
  const [isPremium, setIsPremium] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState("free");
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>(defaultPricingTiers);

  const [counters, setCounters] = useState<CounterItem[]>(defaultCounters);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(defaultTimeline);
  const [memories, setMemories] = useState<Memory[]>(defaultMemories);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [loveNotes, setLoveNotes] = useState<LoveNote[]>(defaultNotes);
  const [specialTemplates] = useState<SpecialMessageTemplate[]>(defaultTemplates);
  const [scheduledSpecialMessages, setScheduledSpecialMessages] = useState<ScheduledSpecialMessage[]>(defaultScheduled);
  const [questions, setQuestions] = useState<CoupleGameQuestion[]>(defaultQuestions);
  const [dateIdeas, setDateIdeas] = useState<DateIdea[]>(defaultDateIdeas);
  const [goals, setGoals] = useState<SharedGoal[]>(defaultGoals);

  const updateProfile = (updated: Partial<PartnerProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const updatePricingTier = (id: string, newUsd: number, newBdt: number) => {
    setPricingTiers((prev) =>
      prev.map((tier) => (tier.id === id ? { ...tier, priceUsd: newUsd, priceBdt: newBdt } : tier))
    );
  };

  const purchasePlan = (planId: string) => {
    setIsPremium(true);
    setSubscriptionPlan(planId);
  };

  const restorePurchases = () => {
    setIsPremium(true);
    setSubscriptionPlan("love_premium_monthly");
    return true;
  };

  const addCounter = (counter: Omit<CounterItem, "id">) => {
    setCounters((prev) => [...prev, { ...counter, id: Date.now().toString() }]);
  };

  const addTimelineEvent = (event: Omit<TimelineEvent, "id">) => {
    setTimelineEvents((prev) => [{ ...event, id: Date.now().toString() }, ...prev]);
  };

  const addMemory = (memory: Omit<Memory, "id">) => {
    setMemories((prev) => [{ ...memory, id: Date.now().toString() }, ...prev]);
  };

  const toggleFavoriteMemory = (id: string) => {
    setMemories((prev) => prev.map((m) => (m.id === id ? { ...m, isFavorite: !m.isFavorite } : m)));
  };

  const deleteMemory = (id: string) => {
    setMemories((prev) => prev.filter((m) => m.id !== id));
  };

  const unlockAppWithPin = (pin: string) => {
    if (pin === pinLock) {
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  const addCalendarEvent = (event: Omit<CalendarEvent, "id">) => {
    setCalendarEvents((prev) => [...prev, { ...event, id: Date.now().toString() }]);
  };

  const addLoveNote = (note: Omit<LoveNote, "id">) => {
    setLoveNotes((prev) => [{ ...note, id: Date.now().toString() }, ...prev]);
  };

  const addScheduledSpecialMessage = (msg: Omit<ScheduledSpecialMessage, "id">) => {
    setScheduledSpecialMessages((prev) => [{ ...msg, id: Date.now().toString(), isActive: true, isEnabled: true }, ...prev]);
  };

  const toggleScheduledSpecialMessage = (id: string) => {
    setScheduledSpecialMessages((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isEnabled: !s.isEnabled, isActive: !s.isActive } : s))
    );
  };

  const answerQuestion = (id: string, myAnswer: string, partnerAnswer: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              myAnswer,
              partnerAnswer,
              partner1Answer: myAnswer,
              partner2Answer: partnerAnswer,
              isCompleted: true,
            }
          : q
      )
    );
  };

  const toggleDateIdeaCompleted = (id: string) => {
    setDateIdeas((prev) => prev.map((d) => (d.id === id ? { ...d, isCompleted: !d.isCompleted } : d)));
  };

  const toggleDateIdeaFavorite = (id: string) => {
    setDateIdeas((prev) => prev.map((d) => (d.id === id ? { ...d, isFavorite: !d.isFavorite } : d)));
  };

  const addGoal = (goal: Omit<SharedGoal, "id"> & { progressPercent?: number }) => {
    setGoals((prev) => [
      ...prev,
      { ...goal, id: Date.now().toString(), progressPercent: goal.progressPercent ?? 0 },
    ]);
  };

  const toggleGoalChecklist = (goalId: string, itemIdOrIndex?: string | number) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goalId) return g;
        if (!g.checklist) return { ...g, isCompleted: !g.isCompleted, progressPercent: g.isCompleted ? 50 : 100 };
        const updatedChecklist = g.checklist.map((item, idx) =>
          item.id === itemIdOrIndex || idx === itemIdOrIndex ? { ...item, done: !item.done } : item
        );
        const doneCount = updatedChecklist.filter((c) => c.done).length;
        const progressPercent = Math.round((doneCount / updatedChecklist.length) * 100);
        return { ...g, checklist: updatedChecklist, progressPercent, isCompleted: progressPercent >= 100 };
      })
    );
  };

  const toggleGoalCompleted = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, isCompleted: !g.isCompleted, progressPercent: g.isCompleted ? 50 : 100 } : g))
    );
  };

  const updateGoalProgress = (id: string, progress: number) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, progressPercent: progress, isCompleted: progress >= 100 } : g))
    );
  };

  const t = (key: string) => key;

  const adminAnalytics: AdminAnalytics = {
    totalUsers: 248500,
    dailyActiveUsers: 64200,
    monthlyActiveUsers: 198000,
    mau: 198000,
    paidSubscribers: 12450,
    mrr: 55900,
    mrrUsd: 55900,
    mrrBdt: 6708000,
    grossRevenueUsd: 68500,
    googlePlayFeesUsd: 10275,
    playStoreFee: 10275,
    playFee: 10275,
    netRevenue: 58225,
    netRevenueUsd: 58225,
    churnRatePercent: 2.1,
    topCountries: [
      { country: "United States", count: 85000 },
      { country: "Bangladesh", count: 62000 },
      { country: "India", count: 41000 },
      { country: "United Kingdom", count: 28000 },
    ],
  };

  return (
    <LoveJourneyContext.Provider
      value={{
        language,
        lang: language,
        setLanguage,
        setLang: setLanguage,
        theme,
        setTheme,
        pinLock,
        setPinLock,
        isUnlocked,
        setIsUnlocked,
        isBiometricsEnabled,
        setIsBiometricsEnabled,
        hasCompletedOnboarding,
        setHasCompletedOnboarding,
        isOnboarded: hasCompletedOnboarding,
        setIsOnboarded: setHasCompletedOnboarding,
        activeTab,
        setActiveTab,
        moreSubTab,
        setMoreSubTab,
        profile,
        updateProfile,
        isPremium,
        subscriptionPlan,
        subscription: { isPremium, plan: subscriptionPlan, planId: subscriptionPlan },
        pricingTiers,
        updatePricingTier,
        purchasePlan,
        subscribeToPlan: purchasePlan,
        restorePurchases,
        counters,
        addCounter,
        timelineEvents,
        timeline: timelineEvents,
        addTimelineEvent,
        memories,
        addMemory,
        toggleMemoryFavorite: toggleFavoriteMemory,
        toggleFavoriteMemory,
        deleteMemory,
        unlockAppWithPin,
        calendarEvents,
        addCalendarEvent,
        loveNotes,
        notes: loveNotes,
        addLoveNote,
        addNote: addLoveNote,
        specialDayTemplates: defaultTemplates,
        specialTemplates: defaultTemplates,
        scheduledSpecialMessages,
        addScheduledSpecialMessage,
        toggleScheduledSpecialMessage,
        questions,
        answerQuestion,
        dateIdeas,
        toggleDateCompleted: toggleDateIdeaCompleted,
        toggleDateFavorite: toggleDateIdeaFavorite,
        toggleDateIdeaCompleted,
        toggleDateIdeaFavorite,
        goals,
        addGoal,
        toggleGoalChecklist,
        toggleGoalCompleted,
        updateGoalProgress,
        adminAnalytics,
        adminStats: adminAnalytics,
        t,
      }}
    >
      {children}
    </LoveJourneyContext.Provider>
  );
}

export function useLoveJourney() {
  const context = useContext(LoveJourneyContext);
  if (!context) {
    throw new Error("useLoveJourney must be used within a LoveJourneyProvider");
  }
  return context;
}
