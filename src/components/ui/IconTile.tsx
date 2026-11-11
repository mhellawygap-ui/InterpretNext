import Image from "next/image";

/** 32px emoji-style icon centered on a blush (or lilac) rounded tile. */
export function IconTile({
  src,
  size = 50,
  radius = 8,
  tone = "blush",
  unoptimized = false,
}: {
  src: string;
  size?: number;
  radius?: number;
  tone?: "blush" | "lilac";
  unoptimized?: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center ${tone === "blush" ? "bg-blush" : "bg-lilac"}`}
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <Image src={src} alt="" width={32} height={32} unoptimized={unoptimized} />
    </span>
  );
}
