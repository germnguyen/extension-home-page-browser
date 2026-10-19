import { useEffect, useState } from "react";
import { LOCATION } from "../config.js";
import { fetchWeather } from "../lib/weather.js";
import { useStoredState } from "./useStoredState.js";

const TTL = 30 * 60 * 1000; // làm mới sau 30 phút

export function useWeather() {
  const { value, loaded, save } = useStoredState("myspace:weather", null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const fresh =
      value &&
      value.lat === LOCATION.lat &&
      value.lon === LOCATION.lon &&
      Date.now() - value.fetchedAt < TTL;
    if (fresh) return;

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    fetchWeather(LOCATION, ctrl.signal)
      .then((data) => {
        setFailed(false);
        return save(data);
      })
      .catch(() => setFailed(true))
      .finally(() => clearTimeout(timer));
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
    // chỉ chạy một lần sau khi đọc xong dữ liệu đã lưu
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const status = value ? "ready" : failed ? "empty" : "loading";
  return { weather: value, status };
}
