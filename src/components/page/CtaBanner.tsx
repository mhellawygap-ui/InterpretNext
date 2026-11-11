import type { ReactNode } from "react";

export function CtaBanner({
  title,
  body,
  actions,
  className = "",
}: {
  title: ReactNode;
  body?: ReactNode;
  actions: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-banner rounded-[20px] px-6 py-12 text-center text-white sm:px-12 ${className}`}>
      <h2 className="font-display-wonk text-[26px] leading-[1.2] font-bold sm:text-[31px]">{title}</h2>
      {body && <p className="mx-auto mt-4 max-w-[560px] text-base leading-[1.35] text-white/80">{body}</p>}
      <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>
    </div>
  );
}
