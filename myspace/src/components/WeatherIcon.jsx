const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "h-6 w-6",
};
const CLOUD = "M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 9.5 4.25 4.25 0 0 0 7 18z";

export default function WeatherIcon({ kind, isDay }) {
  if (kind === "clear" && isDay)
    return (
      <svg {...base}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
      </svg>
    );
  if (kind === "clear")
    return (
      <svg {...base}>
        <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
      </svg>
    );
  if (kind === "partly")
    return (
      <svg {...base}>
        <path d="M8 4v1.5M3.5 8.5H5M5 5l1 1M13 5l-1 1" />
        <circle cx="8.5" cy="9" r="2.5" />
        <path d="M9 19h8a3.5 3.5 0 0 0 .4-7A4.5 4.5 0 0 0 9 12.5 3.25 3.25 0 0 0 9 19z" />
      </svg>
    );
  if (kind === "fog")
    return (
      <svg {...base}>
        <path d="M4 9h16M6 13h12M4 17h16" />
      </svg>
    );
  if (kind === "rain")
    return (
      <svg {...base}>
        <path d={CLOUD} transform="translate(0 -3)" />
        <path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3" />
      </svg>
    );
  if (kind === "snow")
    return (
      <svg {...base}>
        <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
      </svg>
    );
  if (kind === "storm")
    return (
      <svg {...base}>
        <path d={CLOUD} transform="translate(0 -3)" />
        <path d="M12 14l-2 4h3l-1 3" />
      </svg>
    );
  return (
    <svg {...base}>
      <path d={CLOUD} />
    </svg>
  );
}
