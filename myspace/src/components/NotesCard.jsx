import EditableCard from "./EditableCard.jsx";
import { DocIcon } from "./Icons.jsx";
import { fieldClass } from "./fieldStyles.js";
import { useStoredState } from "../hooks/useStoredState.js";

const EMPTY = { content: "", updatedAt: null };
const MAX = 10000;

export default function NotesCard({ className }) {
  const { value, loaded, save } = useStoredState("myspace:notes", EMPTY);

  return (
    <EditableCard
      className={className}
      icon={<DocIcon />}
      title="Ghi chú"
      divider
      value={value}
      loaded={loaded}
      onSave={(d) => save({ content: d.content.trimEnd(), updatedAt: Date.now() })}
      renderView={(v) =>
        v.content ? (
          <p className="max-h-[55vh] overflow-y-auto whitespace-pre-wrap break-words text-base leading-relaxed text-ink">
            {v.content}
          </p>
        ) : (
          <p className="text-base text-mute">Nhập ghi chú của bạn tại đây...</p>
        )
      }
      renderEditor={(d, set) => (
        <>
          <textarea
            autoFocus
            rows={12}
            maxLength={MAX}
            value={d.content}
            onChange={(e) => set({ ...d, content: e.target.value })}
            placeholder="Nhập ghi chú của bạn tại đây..."
            aria-label="Nội dung ghi chú"
            className={fieldClass + " max-h-[55vh]"}
          />
          <p className="text-right text-xs text-mute">
            {d.content.length}/{MAX}
          </p>
        </>
      )}
    />
  );
}
