import { useCallback, useEffect, useState } from "react";
import { loadValue, saveValue } from "../lib/storage.js";

export function useStoredState(key, initial) {
  const [value, setValue] = useState(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    loadValue(key)
      .then((v) => alive && v && setValue(v))
      .catch(() => {})
      .finally(() => alive && setLoaded(true));
    return () => {
      alive = false;
    };
  }, [key]);

  // Chỉ cập nhật giao diện sau khi lưu thành công; lỗi sẽ được ném lên cho thẻ xử lý.
  const save = useCallback(
    async (next) => {
      await saveValue(key, next);
      setValue(next);
    },
    [key]
  );

  return { value, loaded, save };
}
