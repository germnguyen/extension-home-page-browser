import EditableCard from "./EditableCard.jsx";
import PhotoField from "./PhotoField.jsx";
import { QuoteIcon } from "./Icons.jsx";
import { fieldClass } from "./fieldStyles.js";
import { useStoredState } from "../hooks/useStoredState.js";

const EMPTY = { text: "", author: "", photo: "", updatedAt: null };

export default function QuoteCard({ className }) {
  const { value, loaded, save } = useStoredState("myspace:quote", EMPTY);

  return (
    <EditableCard
      className={className}
      icon={<QuoteIcon />}
      title="Câu nói của tôi"
      value={value}
      loaded={loaded}
      onSave={(d) =>
        save({
          text: d.text.trim(),
          author: d.author.trim(),
          photo: d.photo || "",
          updatedAt: Date.now(),
        })
      }
      renderView={(v) =>
        v.text ? (
          <div className="flex items-center gap-6">
            {v.photo && (
              <img
                src={v.photo}
                alt={v.author ? "Ảnh " + v.author : "Ảnh người nói"}
                className="h-28 w-28 shrink-0 rounded-2xl object-cover"
              />
            )}
            <figure className="min-w-0 flex-1">
              <blockquote className="whitespace-pre-line break-words font-serif text-2xl italic leading-snug text-ink">
                “{v.text}”
              </blockquote>
              {v.author && (
                <figcaption className="mt-4 text-sm text-mute">— {v.author}</figcaption>
              )}
            </figure>
          </div>
        ) : (
          <p className="text-base text-mute">Thêm câu nói truyền cảm hứng của bạn...</p>
        )
      }
      renderEditor={(d, set) => (
        <>
          <PhotoField
            photo={d.photo}
            onChange={(photo) => set((prev) => ({ ...prev, photo }))}
          />
          <textarea
            autoFocus
            rows={3}
            maxLength={500}
            value={d.text}
            onChange={(e) => set({ ...d, text: e.target.value })}
            placeholder="Thêm câu nói truyền cảm hứng của bạn..."
            aria-label="Nội dung câu nói"
            className={fieldClass}
          />
          <input
            value={d.author}
            maxLength={80}
            onChange={(e) => set({ ...d, author: e.target.value })}
            placeholder="Tác giả (không bắt buộc)"
            aria-label="Tên tác giả"
            className={fieldClass}
          />
        </>
      )}
    />
  );
}
