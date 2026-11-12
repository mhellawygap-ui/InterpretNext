"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { asset } from "@/lib/asset";
import { Icon } from "@/components/ui/Icon";
import { AvailabilityBadge } from "@/components/page/Chip";
import { GREETING, MAIN_CHIPS, respond, type BotMessage, type Chip, type Intent, type Message } from "./engine";

const OPEN_EVENT = "interpretnext:open-assistant";
const STORE_KEY = "interpretnext:assistant";

/** Open the assistant from any CTA, optionally starting a flow ("recommend", "specialist"…). */
export function openAssistant(intent?: Intent["type"]) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: intent }));
}

function Avatar({ size = 36, status = false }: { size?: number; status?: boolean }) {
  return (
    <span className="relative inline-flex shrink-0 self-start">
      <Image
        src={asset("/images/brand/assistant-avatar.webp")}
        alt=""
        width={size}
        height={size}
        className="rounded-full border border-border bg-white"
        style={{ width: size, height: size }}
      />
      {status && <span aria-hidden className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-white bg-[#22a45a]" />}
    </span>
  );
}

function CardView({ m }: { m: BotMessage }) {
  const c = m.card;
  if (!c) return null;
  if (c.kind === "service") {
    return (
      <div className="mt-3 flex gap-3 rounded-xl border border-border bg-white p-3">
        <Icon name={c.service.icon} size={40} />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-brand">{c.service.title}</p>
          <p className="mt-1 text-xs leading-[1.45] text-muted">{c.service.bestFor}</p>
        </div>
      </div>
    );
  }
  if (c.kind === "language") {
    const l = c.language;
    return (
      <div className="mt-3 rounded-xl border border-border bg-white p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-brand">{l.name}</p>
            {l.native && <p className="text-xs text-muted">{l.native}</p>}
          </div>
          <AvailabilityBadge value={l.availability} />
        </div>
        <p className="mt-2 text-xs text-muted">
          {l.region} · {l.modalities.join(" · ")}
          {l.speakers ? ` · ${l.speakers} speakers` : ""}
        </p>
      </div>
    );
  }
  return (
    <ul className="mt-3 grid grid-cols-2 gap-2">
      {c.items.map((i) => (
        <li key={i.title}>
          <Link href={i.href} className="flex min-h-11 items-center gap-2 rounded-lg border border-border bg-white p-2 text-xs font-medium text-brand hover:border-accent-1">
            <Icon name={i.icon} size={28} />
            {i.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [restored, setRestored] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  // Keep the conversation for the browsing session (across pages and refreshes).
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORE_KEY) ?? "null");
      if (saved?.messages?.length) setMessages(saved.messages);
    } catch {
      /* ignore */
    }
    setRestored(true);
  }, []);
  useEffect(() => {
    if (!restored) return;
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify({ messages: messages.slice(-40) }));
    } catch {
      /* ignore */
    }
  }, [messages, restored]);

  const last = messages[messages.length - 1];
  const expect = last?.from === "bot" ? last.expect : undefined;

  const send = useCallback((intent: Intent, label: string) => {
    setMessages((m) => [...m, { from: "user", text: label }]);
    setTyping(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(
      () => {
        setMessages((m) => [...m, respond(intent)]);
        setTyping(false);
      },
      reduce ? 0 : 350,
    );
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  // Open from any "Ask the assistant" CTA on the site.
  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const type = (e as CustomEvent<Intent["type"] | undefined>).detail;
      const chip = MAIN_CHIPS.find((c) => c.intent.type === type);
      if (chip) send(chip.intent, chip.label);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, [send]);

  // Focus the composer on open; keep the latest message in view.
  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, typing, open]);

  // Following a link inside the panel navigates; close the panel on route change on phones.
  useEffect(() => {
    if (window.matchMedia("(max-width: 639px)").matches) setOpen(false);
  }, [pathname]);

  // Esc closes; Tab stays inside the panel while it is open.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      close();
      return;
    }
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const lastEl = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      lastEl.focus();
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault();
      first.focus();
    }
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) {
      inputRef.current?.focus();
      return;
    }
    setDraft("");
    send({ type: "text", text, expect }, text);
  };

  const restart = () => {
    setMessages([GREETING]);
    setTyping(false);
    inputRef.current?.focus();
  };

  const onChip = (c: Chip) => send(c.intent, c.label);
  const lastBot = [...messages].reverse().find((m): m is BotMessage => m.from === "bot");

  return (
    <>
      {/* Launcher */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="assistant-panel"
        className={`fixed right-4 bottom-4 z-[60] flex h-14 items-center gap-3 rounded-full border border-border bg-white py-2 pr-5 pl-2 text-left shadow-[0_8px_32px_rgba(8,12,65,0.07)] hover:border-accent-1 sm:right-6 sm:bottom-6 print:hidden ${
          open ? "invisible" : ""
        }`}
      >
        <Avatar size={40} status />
        <span className="leading-[1.2]">
          <span className="block text-sm font-semibold text-brand">Ask InterpretNext</span>
          <span className="hidden text-xs text-muted sm:block">Automated · find the right service</span>
        </span>
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        id="assistant-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
        aria-describedby="assistant-desc"
        hidden={!open}
        onKeyDown={onKeyDown}
        className="assistant-panel fixed inset-0 z-[70] flex flex-col bg-background sm:inset-auto sm:top-4 sm:right-4 sm:bottom-4 sm:w-[400px] sm:rounded-2xl sm:border sm:border-border sm:shadow-[0_16px_48px_rgba(8,12,65,0.07)] print:hidden"
      >
        <div className="bg-banner flex items-center gap-3 px-4 py-3 text-white sm:rounded-t-2xl">
          <Avatar size={44} status />
          <div className="min-w-0 flex-1">
            <h2 id="assistant-title" className="text-base font-semibold leading-tight">InterpretNext Assistant</h2>
            <p id="assistant-desc" className="text-xs text-white/85">
              Automated · specialists on call 24/7
            </p>
          </div>
          <button type="button" onClick={restart} className="tap rounded-lg px-2 py-1 text-xs font-medium text-white/90 underline-offset-2 hover:underline">
            Restart
          </button>
          <button
            type="button"
            onClick={close}
            className="tap flex h-9 items-center gap-1 rounded-lg border border-white/40 px-2.5 text-xs font-medium hover:bg-white/10"
          >
            <span aria-hidden>✕</span> Close
          </button>
        </div>

        <div ref={logRef} role="log" aria-live="polite" aria-label="Conversation" className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-3">
            {messages.map((m, i) =>
              m.from === "user" ? (
                <li key={i} className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2 text-sm text-white">
                  <span className="sr-only">You: </span>
                  {m.text}
                </li>
              ) : (
                <li key={i} className="flex max-w-[92%] gap-2">
                  <Avatar size={28} />
                  <div className="min-w-0 rounded-2xl rounded-tl-md border border-border bg-card px-3.5 py-2.5 text-sm leading-[1.5] text-foreground">
                    <span className="sr-only">Assistant: </span>
                    {m.text}
                    <CardView m={m} />
                    {m.actions && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.actions.map((a) => (
                          <Link
                            key={a.label}
                            href={a.href}
                            className={`inline-flex min-h-10 items-center rounded-lg px-3 text-xs font-semibold ${
                              a.primary ? "bg-brand text-white hover:bg-accent-1" : "border border-border bg-white text-brand hover:border-accent-1"
                            }`}
                          >
                            {a.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ),
            )}
            {typing && (
              <li className="flex gap-2" aria-label="Assistant is typing">
                <Avatar size={28} />
                <span className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-border bg-card px-3.5 py-3">
                  <span className="size-1.5 rounded-full bg-muted/60 motion-safe:animate-pulse" />
                  <span className="size-1.5 rounded-full bg-muted/60 motion-safe:animate-pulse [animation-delay:150ms]" />
                  <span className="size-1.5 rounded-full bg-muted/60 motion-safe:animate-pulse [animation-delay:300ms]" />
                </span>
              </li>
            )}
          </ul>
        </div>

        {!typing && lastBot?.chips && lastBot === last && (
          <div role="group" aria-label="Suggested replies" className="flex flex-wrap gap-2 border-t border-border px-4 pt-3">
            {lastBot.chips.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={() => onChip(c)}
                className="min-h-9 rounded-full border border-accent-1/40 bg-white px-3 text-xs font-medium text-violet-ink hover:bg-lilac/50"
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={submit} className="flex items-end gap-2 px-4 pt-3 pb-4">
          <label htmlFor="assistant-input" className="sr-only">
            {expect === "language" ? "Type a language or dialect" : "Ask a question"}
          </label>
          <input
            ref={inputRef}
            id="assistant-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            autoComplete="off"
            placeholder={expect === "language" ? "e.g. Tigrinya" : "Ask about a service, language or compliance…"}
            className="h-11 min-w-0 flex-1 rounded-xl border border-border bg-white px-3.5 text-sm outline-none focus:border-accent-1 focus:ring-2 focus:ring-accent-1/20"
          />
          <button type="submit" className="h-11 shrink-0 rounded-xl bg-brand px-4 text-sm font-semibold text-white hover:bg-accent-1">
            Send
          </button>
        </form>
        <p className="px-4 pb-3 text-center text-xs text-muted">
          Automated answers from our published service info.{" "}
          <Link href="/trust-center/#privacy" className="underline">
            Privacy
          </Link>
        </p>
      </div>
    </>
  );
}

/** Button that opens the assistant (for "Ask the assistant" CTAs). */
export function AskAssistantButton({ className = "", children, intent }: { className?: string; children: React.ReactNode; intent?: Intent["type"] }) {
  return (
    <button type="button" onClick={() => openAssistant(intent)} className={className}>
      {children}
    </button>
  );
}
