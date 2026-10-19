import { LOCATION } from "../config.js";
import { useWeather } from "../hooks/useWeather.js";
import { weatherKind } from "../lib/weather.js";
import WeatherIcon from "./WeatherIcon.jsx";

export default function WeatherBadge() {
  const { weather, status } = useWeather();
  if (status === "loading") return <div className="h-6 w-32" aria-hidden="true" />;

  if (status === "empty")
    return (
      <p className="text-sm text-mute">
        {LOCATION.name} · Chưa có dữ liệu thời tiết
      </p>
    );

  return (
    <div
      className="flex items-center gap-3 text-sm font-medium text-ink"
      aria-label={`Thời tiết ${LOCATION.name}: ${Math.round(weather.temp)} độ C`}
    >
      <span className="text-mute">
        <WeatherIcon kind={weatherKind(weather.code)} isDay={weather.isDay} />
      </span>
      <span className="text-mute">{LOCATION.name}</span>
      <span className="h-4 w-px bg-line" aria-hidden="true" />
      <span>{Math.round(weather.temp)}°C</span>
    </div>
  );
}
