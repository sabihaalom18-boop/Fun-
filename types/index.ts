export type Language = 'en' | 'bn' | 'hi' | 'es' | 'ar' | 'id';
export type ThemeMode = 'light' | 'dark' | 'system';
export type RelationshipType = 'Dating' | 'Engaged' | 'Married' | 'Long-distance' | 'Custom';
export type EventType = 'anniversary' | 'birthday' | 'first_date' | 'engagement' | 'wedding' | 'date_night' | 'milestone' | 'custom';
export type ActiveTab = 'home' | 'journey' | 'calendar' | 'memories' | 'more';
export type MoreSubTab =
  | 'notes'
  | 'special_messages'
  | 'games'
  | 'date_ideas'
  | 'goals'
  | 'widgets'
  | 'share_cards'
  | 'premium'
  | 'settings'
  | 'privacy'
  | 'admin'
  | 'store_listing'
  | 'referrals';

export interface PartnerProfile {
  name: string;
  partnerName: string;
  partner1Name?: string;
  partner2Name?: string;
  nickname: string;
  partnerNickname: string;
  partner1Nickname?: string;
  partner2Nickname?: string;
  photoUrl: string;
  partnerPhotoUrl: string;
  partner1Photo?: string;
  partner2Photo?: string;
  partner1Birthday?: string;
  partner2Birthday?: string;
  partner1Zodiac?: string;
  partner2Zodiac?: string;
  partner1LoveLanguage?: string;
  partner2LoveLanguage?: string;
  relationshipType: RelationshipType;
  customRelationshipType?: string;
  startDate: string; // ISO String or YYYY-MM-DDTHH:mm
  startTime?: string;
  timeZone: string;
  timezone?: string;
  location?: string;
  pinLock?: string;
  biometricEnabled?: boolean;
  includeFirstDay: boolean;
  countFirstDay?: boolean;
  birthday?: string;
  partnerBirthday?: string;
  loveLanguage?: string;
  favoriteFood?: string;
}

export interface LoveCounterItem {
  id: string;
  title: string;
  date: string;
  category: 'meeting' | 'conversation' | 'first_date' | 'relationship' | 'engagement' | 'wedding' | 'reunion' | 'trip' | 'custom';
  icon: string;
  isFutureCountdown?: boolean;
}

export type CounterItem = LoveCounterItem;

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  description: string;
  category: string;
  location?: string;
  photos: string[];
  videos?: string[];
  voiceNotes?: string[];
  mood?: string;
  tags: string[];
  isPrivate: boolean;
}

export interface Memory {
  id: string;
  title: string;
  date: string;
  content: string;
  photos: string[];
  voiceNotes?: string[];
  location?: string;
  mood?: string;
  emoji?: string;
  tags: string[];
  isFavorite: boolean;
  isArchived?: boolean;
  archived?: boolean;
  isVaultPrivate?: boolean;
  isPrivateVault?: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: EventType;
  reminderOptions: 'on_day' | 'day_before' | 'week_before' | 'custom';
  isRecurring: boolean;
}

export interface LoveNote {
  id: string;
  type: 'daily' | 'letter' | 'thank_you' | 'apology' | 'open_when' | 'promise';
  category?: string;
  title: string;
  content: string;
  date: string;
  createdAt?: string;
  isFavorite: boolean;
  isArchived: boolean;
  scheduledDate?: string;
  openWhenCondition?: string;
}

export interface QuestionItem {
  id: string;
  textEn: string;
  textBn: string;
  questionEn: string;
  questionBn: string;
  category: string;
  myAnswer?: string;
  partnerAnswer?: string;
  partner1Answer?: string;
  partner2Answer?: string;
  isCompleted?: boolean;
}

export type CoupleGameQuestion = QuestionItem;

export interface SpecialDayMessageTemplate {
  id: string;
  eventKey: 'anniversary' | 'monthly_anniversary' | 'birthday' | 'first_met' | 'first_date' | 'engagement' | 'wedding' | 'milestone_100' | 'milestone_500' | 'milestone_1000' | 'reunion' | 'valentines';
  title: string;
  titleEn: string;
  titleBn: string;
  text: string;
  messageEn: string;
  messageBn: string;
  lang?: string;
  tone: 'romantic' | 'cute' | 'emotional' | 'funny' | 'apology' | 'long_distance';
}

export type SpecialMessageTemplate = SpecialDayMessageTemplate;

export interface ScheduledSpecialMessage {
  id: string;
  title?: string;
  eventTitle?: string;
  eventKey?: string;
  date?: string;
  scheduledDate?: string;
  tone: string;
  message?: string;
  messageText?: string;
  appName?: string;
  targetApp?: string;
  lang?: "en" | "bn";
  status?: 'scheduled' | 'sent' | 'cancelled';
  isActive?: boolean;
  isEnabled?: boolean;
}

export interface DateIdea {
  id: string;
  title: string;
  titleEn?: string;
  titleBn?: string;
  category: 'at_home' | 'low_budget' | 'outdoor' | 'food' | 'long_distance' | 'bd_friendly' | 'adventure' | 'luxury';
  description: string;
  descriptionEn?: string;
  descriptionBn?: string;
  budget: '$' | '$$' | '$$$';
  isCompleted: boolean;
  completedDate?: string;
  isFavorite: boolean;
}

export interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
}

export interface CoupleGoal {
  id: string;
  title: string;
  category: 'travel' | 'savings' | 'date_nights' | 'movies' | 'skills' | 'fitness';
  targetDate?: string;
  isCompleted: boolean;
  progressPercent?: number;
  checklist?: ChecklistItem[];
}

export type SharedGoal = CoupleGoal;

export interface PricingTier {
  id: string;
  title: string;
  nameEn?: string;
  nameBn?: string;
  priceUsd: number;
  priceBdt: number;
  billingFrequency: 'monthly' | 'yearly' | 'lifetime';
  features: string[];
  isPopular?: boolean;
}

export interface UserSubscription {
  isPremium: boolean;
  plan: string;
  planId: string;
}

export interface AdminAnalytics {
  totalUsers: number;
  dailyActiveUsers: number;
  monthlyActiveUsers: number;
  mau: number;
  paidSubscribers: number;
  mrr: number;
  mrrUsd: number;
  mrrBdt: number;
  grossRevenueUsd: number;
  googlePlayFeesUsd: number;
  playStoreFee: number;
  playFee: number;
  netRevenue: number;
  netRevenueUsd: number;
  churnRatePercent: number;
  topCountries: { country: string; count: number }[];
}
