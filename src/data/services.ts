export type ServiceItem = {
  id: string;
  title: string;
  icon: string;
  animated?: boolean;
  tags: string[];
  bestFor: string;
  body: string;
  /** value passed to /get-quote/?modality= */
  quote: "opi" | "vri" | "rsi" | "onsite" | "unsure";
};

export const SERVICE_GROUPS: { title: string; items: ServiceItem[] }[] = [
  {
    title: "REMOTE INTERPRETATIONS",
    items: [
      {
        id: "opi",
        title: "OPI-Over The Phone Interpretation",
        icon: "/images/telephone-receiver.gif",
        animated: true,
        tags: ["Healthcare intake", "Insurance claims", "Emergency services", "Helpdesk & CX"],
        bestFor: "Best for fast, voice-only conversations",
        body: "Connects you to a live interpreter in seconds — no video, no app, no scheduling. Built for healthcare intake lines, insurance calls, emergency dispatch, and customer support desks that can't afford to wait.",
        quote: "opi",
      },
      {
        id: "vri",
        title: "VRI-Video Interpretation",
        icon: "/images/desktop-computer.png",
        tags: ["Legal Depositions", "Medical Consultations", "ASL / Sign Language", "Courtrooms"],
        bestFor: "Best when reading the room matters",
        body: "Video Remote brings a certified interpreter face-to-face on screen for medical consultations, legal depositions, and ASL/sign language needs. For the highest-stakes moments, On-Site Elite places a vetted interpreter physically in the room.",
        quote: "vri",
      },
      {
        id: "rsi",
        title: "RSI-Simultaneous Interpretation",
        icon: "/images/microphone.png",
        tags: ["Summits & conferences", "Hybrid Events", "Webinars", "NGO & Multilateral Sessions"],
        bestFor: "Best for many languages, one live audience",
        body: "Cloud-based simultaneous interpretation streamed to attendees in real time — no physical interpreter booths required. Built for summits, hybrid conferences, webinars, and international NGO sessions with multiple language channels.",
        quote: "rsi",
      },
    ],
  },
  {
    title: "On-Site & Events",
    items: [
      {
        id: "on-site",
        title: "On-site Elite",
        icon: "/images/icons/round-pushpin.png",
        tags: ["Executive business meetings", "Factory inspections", "Government and diplomatic meetings"],
        bestFor: "Best for when being there makes all the difference.",
        body: "Professional interpreters are present at your location to facilitate seamless communication during meetings, appointments, negotiations, and specialized assignments where face-to-face interaction is essential.",
        quote: "onsite",
      },
      {
        id: "conference",
        title: "Conference & Hybrid",
        icon: "/images/microphone.png",
        tags: ["International conferences", "Product launches", "Hybrid webinars and summits", "Trade shows & exhibitions"],
        bestFor: "Best for bringing every audience into the conversation.",
        body: "Comprehensive interpretation solutions for conferences, seminars, exhibitions, and hybrid events, combining experienced interpreters with the technology needed to deliver multilingual communication for both in-person and remote audiences.",
        quote: "rsi",
      },
      {
        id: "asl",
        title: "ASL & Sign Language VRI",
        icon: "/images/icons/raised-hand.png",
        tags: ["Medical appointments", "Government services", "Educational institutions", "Workplace meetings"],
        bestFor: "Best for communication that's accessible to everyone.",
        body: "Accessible sign language interpretation delivered either on-site or through secure video, helping organizations communicate effectively with Deaf and hard-of-hearing participants while ensuring inclusion and compliance.",
        quote: "vri",
      },
    ],
  },
  {
    title: "Language & AI",
    items: [
      {
        id: "document-translation",
        title: "Document Translation",
        icon: "/images/page-facing-up.png",
        tags: ["Legal contracts", "Medical records", "Technical manuals", "Certificates and official documents"],
        bestFor: "Best for accuracy that stands the test of time.",
        body: "Accurate, culturally appropriate translation of written content by professional linguists, preserving meaning, tone, and industry-specific terminology across multiple languages.",
        quote: "unsure",
      },
      {
        id: "ai-speech",
        title: "AI Speech Translation",
        icon: "/images/icons/robot.png",
        tags: ["Live presentations", "International team meetings", "Training sessions", "Customer support"],
        bestFor: "Best for breaking language barriers instantly.",
        body: "Real-time AI-powered speech translation that instantly converts spoken language into another language, enabling fast multilingual communication for meetings, presentations, and live conversations.",
        quote: "unsure",
      },
      {
        id: "ims",
        title: "Interpreter Management System (IMS)",
        icon: "/images/icons/bar-chart.png",
        tags: ["Hospital interpreter scheduling", "Court interpreter coordination", "Enterprise multilingual support", "Government language service management"],
        bestFor: "Best for keeping every interpreter, every request, and every schedule in sync.",
        body: "A centralized platform that streamlines interpreter scheduling, assignment, monitoring, and reporting, helping organizations efficiently manage language services at scale.",
        quote: "unsure",
      },
    ],
  },
];
