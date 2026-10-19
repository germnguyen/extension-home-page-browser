import { SHORTCUTS } from "../data/shortcuts.js";
import ShortcutItem from "./ShortcutItem.jsx";

export default function ShortcutGrid() {
  const items = [...SHORTCUTS].sort((a, b) => a.order - b.order);
  return (
    <nav
      aria-label="Lối tắt"
      className="grid grid-cols-3 justify-items-center gap-y-7 sm:grid-cols-4 md:grid-cols-2"
    >
      {items.map((item) => (
        <ShortcutItem key={item.id} item={item} />
      ))}
    </nav>
  );
}
