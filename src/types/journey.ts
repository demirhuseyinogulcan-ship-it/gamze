// ─────────────────────────────────────────────────────────────────────────────
// First Lesson Journey Types
// Interactive walkthrough showing what to expect in a first tango lesson
// ─────────────────────────────────────────────────────────────────────────────

export type JourneyStepId = 
  | 'welcome'
  | 'posture'
  | 'connection'
  | 'walking'
  | 'music'
  | 'embrace';

export interface JourneyStep {
  id: JourneyStepId;
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string; // e.g., "5 dakika" or "5 minutes"
  tip: string;
  icon: string; // Lucide icon name
}

export interface JourneyContent {
  sectionTitle: string;
  sectionSubtitle: string;
  totalDuration: string;
  ctaText: string;
  ctaSecondary: string;
  steps: JourneyStep[];
}

export interface JourneyLocaleContent {
  tr: JourneyContent;
  en: JourneyContent;
}
