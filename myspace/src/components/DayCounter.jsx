import { SPECIAL_DATE } from "../config.js";
import { useClock } from "../hooks/useClock.js";
import { daysSince } from "../lib/days.js";

export default function DayCounter() {
  const now = useClock();
  const n = daysSince(SPECIAL_DATE, now);
  const [y, m, d] = SPECIAL_DATE.split("-");
  const text =
    n >= 0 ? `${n.toLocaleString("vi-VN")} ngày` : `Còn ${(-n).toLocaleString("vi-VN")} ngày`;

  return (
    <span
      className="text-sm font-medium text-ink"
      aria-label={n >= 0 ? `Đã ${n} ngày kể từ ${d}/${m}/${y}` : `Còn ${-n} ngày đến ${d}/${m}/${y}`}
    >
      {text}
    </span>
  );
}
