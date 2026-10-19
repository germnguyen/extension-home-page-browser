import LeafLogo from "./LeafLogo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import WeatherBadge from "./WeatherBadge.jsx";
import DayCounter from "./DayCounter.jsx";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2.5 text-accent">
        <LeafLogo />
        <span className="text-xl font-medium tracking-tight text-ink">myspace.</span>
      </div>
      <div className="flex items-center gap-6">
        <DayCounter />
        <WeatherBadge />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
