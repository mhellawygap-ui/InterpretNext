import type { FaqItem } from "@/components/page/Faq";

export type Sector = {
  id: string;
  emoji: string;
  /** Tab label */
  label: string;
  /** Lower-case form used in "Ready to talk about your … program?" */
  programName: string;
  title: string;
  intro: string;
  image: string;
  cover: string[];
  challenges: { title: string; body: string }[];
  modalities: { badge: string; title: string; body: string }[];
  qualifications: string;
  compliance: string;
  faqs: FaqItem[];
  /** "All industries at a glance" card */
  glance: { title: string; tagline: string };
};

// FAQ answers are not in the Figma file (all questions are shown collapsed).
// TODO(content): replace the drafted answers below with approved copy.
export const SECTORS: Sector[] = [
  {
    id: "healthcare",
    emoji: "🏥",
    label: "Healthcare",
    programName: "healthcare",
    title: "Make every patient interaction clear, timely, and compliant.",
    intro:
      "Language barriers in clinical settings create real risk: delayed diagnoses, medication errors, and non-compliant consent. InterpretNext connects hospitals, clinics, and telehealth providers with specialist medical interpreters—on demand, in the language and dialect your patient actually speaks.",
    image: "/images/sectors/healthcare.jpg",
    cover: [
      "Hospital & Clinic On-Demand Interpreting",
      "Telehealth / Virtual Care Interpretation",
      "Emergency & ER Rapid-Response Interpreting",
      "Mental & Behavioral Health Interpreting",
    ],
    challenges: [
      { title: "Delayed access", body: "On-call interpreter pools run dry. Rare-language patients wait hours for a qualified voice." },
      { title: "Accuracy & safety", body: "A single mistranslation of dosage, allergy, or procedure consent creates serious liability." },
      { title: "Compliance pressure", body: "Title VI, CLAS standards, HIPAA, and Joint Commission requirements demand documented language access programs." },
    ],
    modalities: [
      { badge: "OPI", title: "Over-the-Phone", body: "Urgent consultations, triage, prescription calls, after-hours access" },
      { badge: "VRI", title: "Video Remote", body: "Informed consent, mental-health consultations, ASL and visual-context needs" },
      { badge: "On-site", title: "In-Person", body: "Complex surgical briefings, end-of-life conversations, high-acuity bedside care" },
      { badge: "Telehealth", title: "Virtual Care", body: "Embedded interpretation in your existing telehealth platform workflow" },
    ],
    qualifications:
      "Every medical interpreter is assessed for healthcare terminology, HIPAA confidentiality protocols, and specific clinical domain knowledge—from oncology to obstetrics. Background checks and ongoing QA are standard.",
    compliance: "HIPAA-aligned workflows. BAA readiness on request. PHI handling reviewed by compliance team.",
    faqs: [
      { q: "How quickly can you connect an interpreter in an emergency?", a: "Over-the-phone and video interpreters connect in under 10 seconds on average, 24 hours a day, for on-demand languages. Availability for each language is listed on our Languages page." },
      { q: "Can interpreters work inside our EHR or telehealth platform?", a: "Yes. Interpretation can be embedded in your existing telehealth workflow, and our team can scope EHR and telephony integrations as part of your proposal." },
      { q: "Do your interpreters have clinical training?", a: "Every medical interpreter is assessed for healthcare terminology, HIPAA confidentiality protocols, and clinical domain knowledge before joining the network, with ongoing QA after." },
    ],
    glance: { title: "Healthcare & Medical Interpretation", tagline: "Make every patient interaction clear, timely, and compliant." },
  },
  {
    id: "legal",
    emoji: "⚖️",
    label: "Legal",
    programName: "legal",
    title: "Precision language where rights, liberty, and due process depend on it.",
    intro:
      "Legal proceedings demand interpreter accuracy at a level most generalist services cannot provide. InterpretNext works with law firms, public defenders, courts, immigration officers, and law enforcement—matching interpreters by jurisdiction, specialty, and court-certification requirements.",
    image: "/images/sectors/legal.jpg",
    cover: [
      "Court-Certified Interpreting",
      "Depositions & Legal Proceedings",
      "Immigration & Asylum Interviews",
      "Law Enforcement / Police Interpreting",
    ],
    challenges: [
      { title: "Certification gaps", body: "Many providers send bilingual staff, not court-certified interpreters—exposing proceedings to challenge or mistrial risk." },
      { title: "Dialect specificity", body: "Spanish, Arabic, Somali, Tigrinya—the dialect matters as much as the language. Generic matches create miscommunication under oath." },
      { title: "Confidentiality requirements", body: "Attorney-client privilege demands interpreter discretion, confidentiality agreements, and strict protocol adherence." },
    ],
    modalities: [
      { badge: "OPI", title: "Over-the-Phone", body: "Intake interviews, client consultations, police line-of-duty calls" },
      { badge: "VRI", title: "Video Remote", body: "Depositions, remote hearings, asylum interviews over video" },
      { badge: "RSI", title: "Simultaneous", body: "Complex multi-party hearings, international arbitration" },
      { badge: "On-site", title: "In-Person", body: "Court appearances, depositions, cross-examination proceedings" },
    ],
    qualifications:
      "Legal interpreters hold relevant court certifications, have experience in the specific jurisdiction's terminology, and operate under strict confidentiality agreements. Interpreter assignments are matched by specialty—immigration, criminal, civil, and corporate.",
    compliance: "Confidentiality agreements standard. Court-certified roster available on request. NDA signing supported.",
    faqs: [
      { q: "Can you provide court-certified interpreters on short notice?", a: "Yes, for most common legal languages. Tell us the jurisdiction, language, and date and we'll confirm a court-certified match; rare languages may need more lead time." },
      { q: "Do your interpreters sign NDAs for sensitive legal matters?", a: "Every interpreter signs a confidentiality agreement as standard, and we support signing your matter-specific NDA before assignment." },
      { q: "Can you support immigration hearings and USCIS interviews?", a: "Yes. Immigration and asylum interviews are a core specialty, including rare African and Middle Eastern dialects, in person or over video." },
    ],
    glance: { title: "Legal & Court Interpretation", tagline: "Precision language where rights, liberty, and due process depend on it." },
  },
  {
    id: "government",
    emoji: "🏛️",
    label: "Government & NGO",
    programName: "government & ngo",
    title: "Serve every resident. Reach every community.",
    intro:
      "Government agencies have a legal and ethical obligation to communicate across language barriers. InterpretNext supports public health departments, social service offices, emergency response lines, and NGO case managers with reliable, trained interpreters for high-stakes community interactions.",
    image: "/images/sectors/government.jpg",
    cover: [
      "Social Services & Case Management Interpreting",
      "Emergency Line / 911 Language Support",
      "Public Health Department Interpreting",
    ],
    challenges: [
      { title: "Underserved communities", body: "Residents speaking Tigrinya, Haitian Creole, Burmese, or Somali are routinely left without quality interpretation access." },
      { title: "Emergency response gaps", body: "911 dispatchers and emergency services need immediate, reliable language access that doesn't fail under pressure." },
      { title: "Regulatory obligation", body: "Federal and state LEP (Limited English Proficiency) requirements create real liability for unprepared agencies." },
    ],
    modalities: [
      { badge: "OPI", title: "Over-the-Phone", body: "Emergency lines, social services calls, constituent helplines" },
      { badge: "VRI", title: "Video Remote", body: "Case management sessions, benefit interviews, community outreach" },
      { badge: "On-site", title: "In-Person", body: "Community hearings, town halls, field visits, sensitive case support" },
    ],
    qualifications:
      "Interpreters working in government contexts receive training in public-service protocols, mandatory reporting frameworks, and culturally sensitive communication for vulnerable populations.",
    compliance: "LEP compliance documentation available. Government contract vehicle experience. Data handling reviewed.",
    faqs: [
      { q: "Can you support emergency 911 dispatch interpretation?", a: "Yes. Over-the-phone interpreters are available on demand around the clock for dispatch and emergency lines, with an average connection time under 10 seconds." },
      { q: "Do you cover rare African and Middle Eastern languages for refugee services?", a: "Rare-language depth is our differentiator—including Tigrinya, Amharic, Somali, Oromo, Dinka, Nuer, Dari, Pashto, and Arabic dialects." },
    ],
    glance: { title: "Government & Public Sector", tagline: "Serve every resident. Reach every community." },
  },
  {
    id: "global-business",
    emoji: "🌐",
    label: "Global Business",
    programName: "global business",
    title: "Negotiate, align, and grow—without language as a barrier.",
    intro:
      "International deals, multilingual customer relationships, and cross-border HR decisions all require interpretation that matches the stakes. InterpretNext provides business-grade interpretation for corporate teams operating across languages and time zones.",
    image: "/images/sectors/global-business.jpg",
    cover: [
      "Remote Business Negotiations",
      "Multilingual Customer Support Interpreting",
      "HR & Employee Relations Interpreting",
    ],
    challenges: [
      { title: "Negotiation precision", body: "A misread nuance in a contract negotiation or M&A discussion can cost millions or collapse a deal." },
      { title: "Customer experience quality", body: "Routing multilingual customers to undertrained bilingual agents erodes trust and brand quality." },
      { title: "HR complexity", body: "Employee relations, performance reviews, and termination conversations require neutral, trained interpretation—not ad hoc bilingual staff." },
    ],
    modalities: [
      { badge: "OPI", title: "Over-the-Phone", body: "Customer support lines, HR calls, quick cross-border consultations" },
      { badge: "VRI", title: "Video Remote", body: "Executive meetings, contract discussions, remote team alignment" },
      { badge: "RSI", title: "Simultaneous", body: "International all-hands meetings, multilingual board presentations" },
      { badge: "On-site", title: "In-Person", body: "High-stakes negotiations, VIP meetings, investor relations" },
    ],
    qualifications:
      "Business interpreters are screened for domain familiarity in finance, legal agreements, HR, and corporate communication. Subject-matter matching is available for technical or specialized sectors.",
    compliance: "Confidentiality agreements standard. NDA support available. Data-processing agreements on request.",
    faqs: [
      { q: "Can you provide interpreters for M&A and due diligence meetings?", a: "Yes. We match interpreters with finance and legal-agreement experience, under NDA, for in-person or video sessions." },
      { q: "Can your interpreters handle multilingual contact center support?", a: "Yes. On-demand over-the-phone interpretation can be connected to your contact center for multilingual customer support." },
    ],
    glance: { title: "Business & Corporate", tagline: "Negotiate, align, and grow—without language as a barrier." },
  },
  {
    id: "conferences",
    emoji: "🎤",
    label: "Conferences & Events",
    programName: "conferences & events",
    title: "Every voice heard. Every language included.",
    intro:
      "Multilingual events demand interpretation that runs flawlessly under live conditions—for hybrid summits, international trade fairs, NGO assemblies, and diplomatic gatherings. InterpretNext provides professional simultaneous interpretation, RSI platform support, and full event language management.",
    image: "/images/sectors/conferences.jpg",
    cover: [
      "Simultaneous Interpretation for Webinars & Summits (RSI)",
      "Hybrid Event Interpretation",
      "International NGO & Diplomatic Events",
      "Conference & Multilingual Summit Interpreting",
      "Corporate Meetings & General Assemblies",
      "Trade Fairs & Exhibitions Interpreting",
      "Press Conferences & Media Events",
      "Cultural & Community Events Interpreting",
    ],
    challenges: [
      { title: "Live-event pressure", body: "A tech failure or unprepared interpreter during a keynote creates an unrecoverable audience experience." },
      { title: "Hybrid complexity", body: "In-room and remote audiences require coordinated interpretation infrastructure across channels simultaneously." },
      { title: "Multi-language logistics", body: "Managing 4, 8, or 12 language channels with qualified interpreters and reliable audio infrastructure is operationally complex." },
    ],
    modalities: [
      { badge: "RSI", title: "Simultaneous (Remote)", body: "Webinars, hybrid summits, online conferences via RSI platform" },
      { badge: "On-site", title: "Booth & Consecutive", body: "In-room simultaneous booths, escort interpretation, exhibition floor" },
      { badge: "VRI", title: "Video Remote", body: "Panel discussions, breakout sessions, remote-speaker interpretation" },
    ],
    qualifications:
      "Conference interpreters have formal simultaneous interpretation training (AIIC standards), platform-specific RSI certification, and event-type experience matched to your domain (diplomatic, scientific, commercial, NGO).",
    compliance: "Platform security reviewed. Recording and data-handling policies on request.",
    faqs: [
      { q: "Which RSI platforms do you support?", a: "Our interpreters work on the major RSI and video-conferencing platforms. Tell us your platform and we'll confirm interpreter certification for it." },
      { q: "Can you handle events with 8+ language channels?", a: "Yes. We staff and coordinate multi-channel events—4, 8, or 12 languages—with qualified interpreter teams for each channel." },
      { q: "Do you provide equipment for on-site booths?", a: "Booth and audio equipment can be scoped as part of an on-site event proposal. Tell us your venue and audience size." },
    ],
    glance: { title: "Conferences & Events", tagline: "Every voice heard. Every language included." },
  },
  {
    id: "on-site",
    emoji: "🤝",
    label: "On-Site Elite",
    programName: "on-site elite",
    title: "Present, prepared, and trusted—when it has to be in the room.",
    intro:
      "Some situations require an interpreter who travels, adapts, and advocates in real time alongside the people they serve. InterpretNext's on-site elite interpreters support VIP delegations, high-stakes trade missions, and specialized site visits—with the discretion and domain knowledge the assignment demands.",
    image: "/images/sectors/on-site.jpg",
    cover: ["VIP Delegation Interpreting", "Trade Shows & Exhibitions", "Business Missions & Site Visits"],
    challenges: [
      { title: "Protocol and discretion", body: "Diplomatic and executive-level engagements require interpreters who understand protocol, confidentiality, and professional conduct without briefing." },
      { title: "Travel and flexibility", body: "On-site interpreters must be mobile, adaptable, and available for multi-day assignments across locations." },
      { title: "Domain depth", body: "Technical site visits, government inspections, and trade missions require subject-matter matching, not generalist bilingualism." },
    ],
    modalities: [
      { badge: "On-site", title: "Escort / Liaison", body: "Full-day or multi-day accompaniment for delegation or executive travel" },
      { badge: "On-site", title: "Consecutive", body: "Bilateral meetings, factory visits, government-to-government sessions" },
      { badge: "On-site", title: "Whispering", body: "Private advisory settings where simultaneous delivery to one principal is needed" },
    ],
    qualifications:
      "On-site elite interpreters are screened for professional conduct, travel availability, relevant domain experience, and discretion. Advance briefing materials, glossary preparation, and security clearance coordination are available.",
    compliance: "Confidentiality and NDA standard. Security clearance support on request.",
    faqs: [
      { q: "Can you provide an interpreter for a week-long trade mission?", a: "Yes. Multi-day and multi-location assignments are standard for On-Site Elite, including travel and advance briefing." },
      { q: "Do you cover rare language pairs for diplomatic delegations?", a: "Yes. Tell us the language pair and itinerary; our operations team sources qualified interpreters for rare pairs." },
    ],
    glance: { title: "On-Site Elite / Escort & Liaison", tagline: "Present, prepared, and trusted—when it has to be in the room." },
  },
  {
    id: "accessibility",
    emoji: "♿",
    label: "Accessibility",
    programName: "accessibility",
    title: "Inclusive communication isn't optional. It's infrastructure.",
    intro:
      "Deaf and hard-of-hearing participants deserve equal access to information in every setting. InterpretNext provides ASL interpretation and real-time captioning (CART) for healthcare appointments, legal proceedings, events, and workplace interactions—meeting ADA requirements and going beyond them.",
    image: "/images/sectors/accessibility.jpg",
    cover: ["Sign Language (ASL) Interpretation", "Live Captioning / CART Services"],
    challenges: [
      { title: "ADA compliance risk", body: "Failing to provide qualified ASL interpreters or captions in covered settings creates legal exposure and excludes community members." },
      { title: "Last-minute demand", body: "Accessibility needs are often identified late. On-demand ASL and CART services reduce last-minute scrambling." },
      { title: "Event and remote gaps", body: "Hybrid events, telehealth visits, and online meetings often lack accessible captioning and interpretation by default." },
    ],
    modalities: [
      { badge: "VRI", title: "Video Remote ASL", body: "Healthcare appointments, legal consultations, remote workplace meetings" },
      { badge: "On-site", title: "ASL In-Person", body: "Court hearings, conferences, community events, workplace sessions" },
      { badge: "CART", title: "Live Captioning", body: "Events, webinars, broadcasts, hybrid meetings, transcription delivery" },
    ],
    qualifications:
      "ASL interpreters hold RID (Registry of Interpreters for the Deaf) credentials or equivalent national certification. CART providers are Certified CART Providers (CCP) with real-time transcription accuracy standards.",
    compliance: "ADA Title II and III alignment. WCAG-accessible caption delivery. Documentation on request.",
    faqs: [
      { q: "Can you provide VRI ASL interpretation for telehealth appointments?", a: "Yes. RID-credentialed ASL interpreters can join telehealth appointments over secure video." },
      { q: "Do you provide CART for live events?", a: "Yes. Certified CART providers deliver real-time captioning for live, hybrid, and online events." },
    ],
    glance: { title: "Accessibility Services", tagline: "Inclusive communication isn't optional. It's infrastructure." },
  },
  {
    id: "ai-powered",
    emoji: "🤖",
    label: "AI-Powered",
    programName: "ai-powered",
    title: "Speed and scale—with human accuracy where it counts.",
    intro:
      "AI augments—but does not replace—human interpretation. InterpretNext offers AI-assisted live interpretation, real-time transcription, and machine interpretation with human quality review for use cases where speed and volume matter, while preserving specialist human accuracy for high-stakes settings.",
    image: "/images/sectors/ai-powered.jpg",
    cover: [
      "AI-Assisted Live Interpretation (human-in-the-loop)",
      "AI Transcription & Real-Time Captioning",
      "Machine Interpretation with Human Quality Review",
      "AI-Powered Terminology & Glossary Management",
    ],
    challenges: [
      { title: "Volume and speed", body: "High-volume environments—contact centers, healthcare triage, large conferences—need interpretation faster than traditional staffing allows." },
      { title: "Terminology accuracy", body: "AI models without domain-specific glossaries produce terminology errors in medical, legal, and technical contexts." },
      { title: "Quality assurance", body: "Pure AI output without human review creates unchecked accuracy risk in sensitive or regulated settings." },
    ],
    modalities: [
      { badge: "AI+Human", title: "Human-in-the-Loop", body: "High-volume OPI/VRI with AI support for speed and human review for accuracy" },
      { badge: "AI", title: "AI Transcription", body: "Real-time transcription and captioning for meetings, events, and recordings" },
      { badge: "AI", title: "Machine + Review", body: "Post-processing of AI interpretation with human quality verification" },
    ],
    qualifications:
      "AI systems are configured with domain-specific glossaries developed by specialist interpreters. Human reviewers are domain-matched and apply the same qualification standards as live interpreters.",
    compliance: "Data processing reviewed. Model use and retention policies documented on request.",
    faqs: [
      { q: "Is AI interpretation accurate enough for medical or legal use?", a: "For high-stakes medical and legal settings we recommend specialist human interpreters. AI-assisted options keep a human in the loop and apply human quality review." },
      { q: "Can you build a custom glossary for our technical domain?", a: "Yes. Specialist interpreters build and maintain domain-specific glossaries that configure the AI and guide human reviewers." },
    ],
    glance: { title: "AI-Powered Interpretation", tagline: "Speed and scale—with human accuracy where it counts." },
  },
];
