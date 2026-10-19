import Header from "./components/Header.jsx";
import GlassCard from "./components/GlassCard.jsx";
import ClockGreeting from "./components/ClockGreeting.jsx";
import ShortcutGrid from "./components/ShortcutGrid.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-8 px-6 py-5">
      <Header theme={theme} onToggleTheme={toggle} />

      <main className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-[minmax(0,2fr)_1px_minmax(0,3fr)] md:gap-14">
        <section aria-label="Thời gian và lối tắt" className="flex flex-col gap-9">
          <ClockGreeting />
          <ShortcutGrid />
        </section>

        <div className="hidden bg-line md:block" aria-hidden="true" />

        <section aria-label="Không gian cá nhân" className="flex flex-col gap-6">
          <GlassCard title="Câu nói của tôi">
            <p className="text-sm text-mute">Thêm câu nói truyền cảm hứng của bạn...</p>
          </GlassCard>
          <GlassCard title="Ghi chú" className="flex-1">
            <p className="text-sm text-mute">Nhập ghi chú của bạn tại đây...</p>
          </GlassCard>
        </section>
      </main>
    </div>
  );
}
