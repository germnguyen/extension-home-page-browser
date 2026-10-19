import LeafLogo from "./LeafLogo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2.5 text-accent">
        <LeafLogo />
        <span className="text-xl font-medium tracking-tight text-ink">myspace.</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Chỗ dành cho thời tiết (làm ở bước sau) */}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
