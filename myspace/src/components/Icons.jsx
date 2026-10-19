const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const PencilIcon = ({ className = "h-5 w-5" }) => (
  <svg {...base} className={className}>
    <path d="M4 20l4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4z" />
    <path d="M14 7l3 3" />
  </svg>
);

export const QuoteIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M6 7h5v5c0 2.8-1.6 4.6-4.5 5v-2c1.4-.3 2-1.1 2-2.5H6V7zm8 0h5v5c0 2.8-1.6 4.6-4.5 5v-2c1.4-.3 2-1.1 2-2.5H14V7z" />
  </svg>
);

export const DocIcon = ({ className = "h-6 w-6" }) => (
  <svg {...base} className={className}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5M10 13h6M10 17h6" />
  </svg>
);

export const PersonIcon = ({ className = "h-8 w-8" }) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>
);
