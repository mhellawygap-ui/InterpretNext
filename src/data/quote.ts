export const MODALITY_OPTIONS = [
  { id: "opi", emoji: "📞", title: "Over-the-Phone (OPI)", tagline: "Fast, voice-only conversations", body: "On-demand access in seconds. Ideal for clinical calls, legal intake, customer support, and emergency situations." },
  { id: "vri", emoji: "📹", title: "Video Remote (VRI)", tagline: "Visual context and non-verbal cues", body: "Face-to-face via video. Best for medical consultations, depositions, ASL, and any setting where visual clarity matters." },
  { id: "rsi", emoji: "🎤", title: "Simultaneous / Events (RSI)", tagline: "Live multilingual audiences", body: "Real-time interpretation for conferences, webinars, summits, and hybrid events—one or many language channels." },
  { id: "onsite", emoji: "🤝", title: "On-Site / In-Person", tagline: "When presence makes the difference", body: "An interpreter travels to your location. VIP delegations, trade missions, court hearings, clinical settings, and site visits." },
  { id: "unsure", emoji: "💬", title: "Not Sure / Multiple", tagline: "Help me choose the right model", body: "Describe your situation and our team will recommend the right modality mix for your volume, budget, and workflow." },
] as const;
export type ModalityId = (typeof MODALITY_OPTIONS)[number]["id"];

export const SESSION_TYPES = [
  "Hospital & Clinic On-Demand",
  "Telehealth / Virtual Care",
  "Emergency & ER Rapid-Response",
  "Mental Health Interpreting",
  "Court & Legal Intake",
  "Social Services / Case Management",
  "Emergency / 911 Language Support",
  "Multilingual Customer Support",
  "HR & Employee Relations",
  "Other",
];

export const QUOTE_LANGUAGES = [
  "Arabic (MSA)", "Arabic (Gulf)", "Arabic (Levantine)", "Arabic (Egyptian)",
  "Amharic", "Tigrinya", "Somali", "Oromo", "Swahili", "Hausa", "Yoruba",
  "Igbo", "Farsi / Persian", "Dari", "Pashto", "Kurdish (Kurmanji)",
  "Kurdish (Sorani)", "Urdu", "Turkish", "Mandarin Chinese", "Cantonese",
  "Japanese", "Korean", "Hindi", "Vietnamese", "Tagalog / Filipino", "Burmese",
  "Khmer", "Thai", "Indonesian", "Bengali", "Hmong", "Spanish", "French",
  "Portuguese (Brazilian)", "Portuguese (European)", "Russian", "German", "Italian",
  "Polish", "Ukrainian", "Romanian", "Dutch", "Greek", "Haitian Creole",
  "ASL (American Sign Language)", "Other / Not listed",
];

export const ACCESSIBILITY_NEEDS = [
  "ASL / Sign Language",
  "CART / Live Captioning",
  "Wheelchair-accessible venue",
  "Hearing loop / assistive listening",
  "None",
];

export const URGENCY = [
  { id: "now", emoji: "⚡", title: "Right now", sub: "Emergency / ASAP" },
  { id: "week", emoji: "📅", title: "This week", sub: "Within 7 days" },
  { id: "month", emoji: "🗓️", title: "This month", sub: "Within 30 days" },
  { id: "planning", emoji: "🔭", title: "Planning ahead", sub: "No immediate deadline" },
];

export const SCHEDULING = [
  { id: "on-demand", emoji: "⚡", title: "On-demand", body: "Connect an interpreter immediately when needed, without pre-booking." },
  { id: "scheduled", emoji: "📋", title: "Scheduled", body: "Book interpreters in advance for planned sessions, hearings, or events." },
  { id: "both", emoji: "🔄", title: "Both", body: "A mix—mostly scheduled with occasional on-demand coverage for urgencies." },
];

export const INTEGRATIONS = [
  "EHR / Epic",
  "Telephony / PBX",
  "Contact center (Genesys / Five9)",
  "API / webhook",
  "SSO / SAML",
  "Custom LMS",
  "None required",
];

export const DECISION_TIMELINE = [
  "Immediately",
  "Within 1 week",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months / planning stage",
];

// Dropdown options are not specified in Figma (only "Select …" placeholders).
// TODO(content): confirm these option lists with sales.
export const COUNTRIES = ["United States", "Canada", "United Kingdom", "Ireland", "European Union (other)", "United Arab Emirates", "Saudi Arabia", "Egypt", "Australia", "Other"];
export const INDUSTRIES = ["Healthcare", "Legal", "Government & NGO", "Global Business", "Conferences & Events", "Education", "Insurance", "Other"];
export const DURATIONS = ["Under 15 minutes", "15–60 minutes", "1–4 hours", "Half day", "Full day", "Multi-day"];
export const VOLUMES = ["Under 100 minutes / month", "100–1,000 minutes / month", "1,000–10,000 minutes / month", "10,000+ minutes / month", "One-off session / event", "Not sure yet"];
export const FREQUENCIES = ["One-time", "Weekly", "Several times a week", "Daily", "Ongoing / 24/7 coverage"];
export const PLATFORMS = ["Zoom", "Microsoft Teams", "Webex", "Google Meet", "Our own telehealth platform", "Phone system / PBX", "Other", "None"];
export const ROLES = ["Language access / interpreter services lead", "Operations", "Procurement", "Clinical / medical staff", "Legal / compliance", "Event organizer", "Executive", "Other"];
export const HEAR_ABOUT = ["Search engine", "Referral / word of mouth", "LinkedIn", "Conference or event", "Bayantech", "Other"];
