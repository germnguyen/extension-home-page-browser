export async function fetchWeather({ lat, lon }, signal) {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${lat}&longitude=${lon}` +
    "&current=temperature_2m,weather_code,is_day&timezone=auto";
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const c = (await res.json()).current;
  if (typeof c?.temperature_2m !== "number") throw new Error("Dữ liệu không hợp lệ");
  return {
    temp: c.temperature_2m,
    code: c.weather_code,
    isDay: c.is_day === 1,
    lat,
    lon,
    fetchedAt: Date.now(),
  };
}

// Gom mã thời tiết WMO của Open-meteo thành vài nhóm để chọn biểu tượng
export function weatherKind(code) {
  if (code === 0) return "clear";
  if (code <= 2) return "partly";
  if (code === 3) return "cloudy";
  if (code === 45 || code === 48) return "fog";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rain";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
  if (code >= 95) return "storm";
  return "cloudy";
}
