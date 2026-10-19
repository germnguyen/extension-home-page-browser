import { useRef, useState } from "react";
import { fileToAvatar } from "../lib/image.js";
import { PersonIcon } from "./Icons.jsx";

const MESSAGES = {
  "not-image": "Chọn một tệp ảnh (JPG, PNG hoặc WebP).",
  "too-large": "Ảnh quá lớn. Chọn ảnh dưới 10 MB.",
};

export default function PhotoField({ photo, onChange }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const pick = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      onChange(await fileToAvatar(file));
      setError("");
    } catch (err) {
      setError(MESSAGES[err.message] || "Không đọc được ảnh này. Thử ảnh khác.");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line text-mute">
        {photo ? (
          <img src={photo} alt="Ảnh người nói" className="h-full w-full object-cover" />
        ) : (
          <PersonIcon />
        )}
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-full border border-line px-4 py-1.5 text-sm text-ink transition hover:border-mute"
          >
            {photo ? "Đổi ảnh" : "Chọn ảnh"}
          </button>
          {photo && (
            <button
              type="button"
              onClick={() => {
                onChange("");
                setError("");
              }}
              className="rounded-full px-3 py-1.5 text-sm text-mute transition hover:text-ink"
            >
              Xóa ảnh
            </button>
          )}
        </div>
        {error && (
          <p role="alert" className="text-sm text-mute">
            {error}
          </p>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={pick}
        aria-label="Chọn ảnh người nói"
        className="hidden"
      />
    </div>
  );
}
