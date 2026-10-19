// Ưu tiên chrome.storage.local (khi chạy như extension),
// tự quay về localStorage khi chạy `npm run dev`.
const ext = typeof chrome !== "undefined" && chrome.storage && chrome.storage.local;

export async function loadValue(key) {
  if (ext) {
    const r = await chrome.storage.local.get(key);
    return r[key] ?? null;
  }
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function saveValue(key, value) {
  if (ext) {
    await chrome.storage.local.set({ [key]: value });
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
}
