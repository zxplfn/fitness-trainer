"use client"

const marqueeItems = [
  "Osobní trénink",
  "Online coaching",
  "Tréninkový plán",
  "Winning Fitness Brno",
  "Vojtěch Prokeš",
  "Individuální přístup",
  "Výsledky",
]

export function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <section
      className="section-dark relative py-8 sm:py-10 overflow-hidden"
      style={{ borderTop: "1px solid oklch(0.18 0 0)", borderBottom: "1px solid oklch(0.18 0 0)" }}
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 px-6 sm:px-10">
            <span
              className="font-extrabold uppercase tracking-tight text-foreground/90"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,6vw,5rem)",
                lineHeight: 1,
              }}
            >
              {item}
            </span>
            <span
              className="ml-6 sm:ml-10 text-foreground/25 text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
