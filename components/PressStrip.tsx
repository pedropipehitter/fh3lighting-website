const publications = [
  "LA Times",
  "LiveDesign Magazine",
  "Thornton Wilder Journal",
];

export default function PressStrip() {
  return (
    <section className="border-t border-b border-neutral-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        <p className="font-ui-label text-[0.58rem] uppercase tracking-[0.18em] text-neutral-600 shrink-0">
          As Seen In
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {publications.map((name) => (
            <span
              key={name}
              className="font-heading text-[0.82rem] font-medium text-neutral-500 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
