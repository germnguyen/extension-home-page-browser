import { useClock } from "../hooks/useClock.js";
import { getGreeting } from "../lib/greeting.js";

export default function ClockGreeting() {
  const now = useClock();
  const date = now.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const { hello, wish } = getGreeting(now.getHours());

  return (
    <div>
      <p className="text-base font-medium text-mute">{date}</p>
      <p className="text-7xl font-semibold leading-tight tracking-tight tabular-nums text-ink">
        {time}
      </p>
      <p className="mt-2 text-base text-mute">{hello}</p>
      <p className="text-xl font-medium text-ink">{wish}</p>
    </div>
  );
}
