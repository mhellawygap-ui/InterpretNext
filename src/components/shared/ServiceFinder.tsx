"use client";

import { useState } from "react";
import { FINDER, FINDER_COPY } from "@/data/content";
import { serviceById } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { openAssistant } from "@/components/assistant/Assistant";

/** Clearer service finder: pick the situation, get one recommendation with next steps. */
export function ServiceFinder() {
  const [choice, setChoice] = useState(FINDER[0].id);
  const picked = FINDER.find((f) => f.id === choice)!;
  const service = serviceById(picked.service)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
      <fieldset>
        <legend className="text-[17px] font-semibold text-brand">What do you need interpreted?</legend>
        <div className="mt-4 grid gap-2">
          {FINDER.map((f) => {
            const on = f.id === choice;
            return (
              <label
                key={f.id}
                className={`flex min-h-14 cursor-pointer items-center gap-4 rounded-xl border px-4 py-3 ${on ? "border-accent-1 bg-lilac/60" : "border-border bg-white hover:border-border-strong"}`}
              >
                <input type="radio" name="finder" value={f.id} checked={on} onChange={() => setChoice(f.id)} className="size-4 accent-[#5b2bd1]" />
                <span>
                  <span className="block text-[15px] font-semibold text-brand">{f.label}</span>
                  <span className="block text-[13px] text-muted">{f.hint}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite" className="flex flex-col rounded-2xl border border-border bg-white p-6 md:p-8">
        <p className="text-sm font-semibold text-accent-1">Suggested service</p>
        <div className="mt-4 flex items-center gap-4">
          <Icon name={service.icon} size={52} />
          <h3 className="text-2xl font-semibold text-brand">{service.title}</h3>
        </div>
        <p className="mt-5 text-base leading-[1.6] text-muted">{picked.body}</p>
        <p className="mt-4 text-[15px] text-muted">A team member confirms every booking.</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Button href={`/get-quote/?modality=${service.quote}`}>Request a quote</Button>
          <Button href={`/services/#${service.id}`} variant="secondary">About this service</Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-5 text-sm">
          <span className="text-muted">{FINDER_COPY.assistantPrompt}</span>
          <button type="button" onClick={() => openAssistant("recommend")} className="tap font-semibold text-accent-1 hover:underline">
            {FINDER_COPY.assistantButton} →
          </button>
        </div>
      </div>
    </div>
  );
}
