import { useCallback, useState } from "react";

const KEY = "myspace:theme";

// Theme lưu bằng localStorage (đồng bộ) để theme-init.js đọc được ngay khi mở tab.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* bỏ qua nếu không ghi được */
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
