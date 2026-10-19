import { isValidUrl } from "../lib/url.js";

export default function ShortcutItem({ item }) {
  if (!isValidUrl(item.url)) return null;
  return (
    <a
      href={item.url}
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2 rounded-3xl outline-offset-4"
    >
      <span
        className="tile flex h-28 w-28 items-center justify-center rounded-3xl border border-line transition group-hover:-translate-y-0.5 group-hover:border-mute [&>svg]:h-11 [&>svg]:w-11"
        style={{ "--tint": item.tint, color: item.color || "var(--ink)" }}
        dangerouslySetInnerHTML={{ __html: item.icon }}
      />
      <span className="text-sm font-medium text-mute group-hover:text-ink">{item.name}</span>
    </a>
  );
}
