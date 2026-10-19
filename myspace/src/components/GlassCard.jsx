export default function GlassCard({ title, children, className = "" }) {
  return (
    <section
      className={"rounded-[2rem] border border-line bg-card p-7 " + className}
    >
      {title && <h2 className="mb-3 text-base font-medium text-ink">{title}</h2>}
      {children}
    </section>
  );
}
