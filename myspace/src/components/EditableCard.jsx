import { useState } from "react";
import { PencilIcon } from "./Icons.jsx";

// Khung dùng chung cho thẻ có chế độ xem và chỉnh sửa (Lưu / Hủy).
export default function EditableCard({
  icon,
  title,
  value,
  loaded,
  onSave,
  renderView,
  renderEditor,
  divider = false,
  className = "",
  bodyClassName = "",
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const open = () => {
    setDraft(value);
    setError("");
    setEditing(true);
  };
  const cancel = () => {
    setEditing(false);
    setError("");
  };
  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(draft);
      setEditing(false);
      setError("");
    } catch {
      setError("Không lưu được. Hãy thử lại.");
    } finally {
      setSaving(false);
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Escape") cancel();
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) submit(e);
  };

  return (
    <section className={"flex flex-col rounded-[2rem] border border-line bg-card " + className}>
      <header
        className={
          "flex items-center gap-3 px-8 py-6 " + (divider ? "border-b border-line" : "")
        }
      >
        <span className="text-mute">{icon}</span>
        <h2 className="text-base font-medium text-ink">{title}</h2>
        {!editing && (
          <button
            type="button"
            onClick={open}
            aria-label={"Chỉnh sửa " + title.toLowerCase()}
            className="ml-auto rounded-full p-1.5 text-mute transition hover:text-ink"
          >
            <PencilIcon />
          </button>
        )}
      </header>

      <div
        className={
          "flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pb-7 " +
          (divider ? "pt-5 " : "") +
          bodyClassName
        }
      >
        {!loaded ? null : editing ? (
          <form onSubmit={submit} onKeyDown={onKeyDown} className="flex flex-col gap-4">
            {renderEditor(draft, setDraft)}
            {error && (
              <p role="alert" className="text-sm text-mute">
                {error}
              </p>
            )}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={cancel}
                className="rounded-full border border-line px-5 py-2 text-sm text-mute transition hover:text-ink"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-on-ink transition hover:opacity-90"
              >
                Lưu
              </button>
            </div>
          </form>
        ) : (
          renderView(value)
        )}
      </div>
    </section>
  );
}
