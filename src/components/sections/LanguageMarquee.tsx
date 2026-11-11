// Figma uses "Somali" as placeholder text in every chip; these are representative rare languages.
// TODO(content): replace with the live language roster (the label says "Updated Live").
const ROW_A = [
  { name: "Somali" }, { name: "Tigrinya", rare: true }, { name: "Amharic", rare: true },
  { name: "Oromo" }, { name: "Dari" }, { name: "Pashto", rare: true }, { name: "Wolof" },
  { name: "Hausa" }, { name: "Yoruba" }, { name: "Nuer", rare: true }, { name: "Dinka" },
  { name: "Fula" }, { name: "Kurdish", rare: true }, { name: "Uyghur" }, { name: "Hmong" },
  { name: "Karen" },
];
const ROW_B = [
  { name: "Swahili" }, { name: "Sudanese", rare: true }, { name: "Mam", rare: true },
  { name: "Tagalog" }, { name: "Burmese" }, { name: "Rohingya", rare: true }, { name: "Lingala" },
  { name: "Kinyarwanda" }, { name: "Chaldean" }, { name: "Zaghawa", rare: true }, { name: "Mixtec" },
  { name: "Q'anjob'al" }, { name: "Mandinka", rare: true }, { name: "Khmer" }, { name: "Lao" },
  { name: "Tamil", rare: true },
];

type Lang = { name: string; rare?: boolean };

function Row({ items, reverse = false }: { items: Lang[]; reverse?: boolean }) {
  // The list is rendered twice so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <ul className={`flex w-max gap-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((l, i) => (
          <li
            key={`${l.name}-${i}`}
            aria-hidden={i >= items.length}
            className={`flex h-[29px] items-center rounded-2xl border px-4 text-base whitespace-nowrap ${
              l.rare ? "border-accent-2 text-accent-2" : "border-background text-white"
            }`}
          >
            {l.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LanguageMarquee() {
  return (
    <section id="languages" aria-labelledby="languages-title" className="scroll-mt-28 overflow-hidden bg-brand py-6">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-4 sm:px-8 lg:px-[96px] lg:pr-[104px]">
        <h2 id="languages-title" className="font-display-wonk text-xl font-bold leading-[1.2] text-border sm:text-[25px]">
          Rare Language Coverage, On stand by Right Now
        </h2>
        <p className="text-[13px] text-border">200+ Languages . Updated Live</p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </section>
  );
}
