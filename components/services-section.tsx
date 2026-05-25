"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

function useReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(36px)"
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)"
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

const services = [
  {
    num: "01",
    title: "Osobní trénink 1:1",
    price: "700 Kč / hod",
    note: "Vstupní trénink s diagnostikou 500 Kč",
    desc: "Trénink přímo se mnou v posilovně. Opravím techniku, nastavím zátěž a budu tě tlačit dopředu. Každý trénink je přizpůsobený přesně tobě.",
    featured: false,
  },
  {
    num: "02",
    title: "Tréninkový plán na míru",
    price: "1 500 Kč",
    note: "Jednorázově, bez pravidelného coachingu",
    desc: "Dostaneš plán postavený na tvém vybavení, zkušenostech a časových možnostech. Cvičíš sám, ale podle promyšleného systému.",
    featured: false,
  },
  {
    num: "03",
    title: "Online coaching",
    price: "2 000 Kč / měsíc",
    note: "Měsíční spolupráce",
    desc: "Kompletní spolupráce na dálku. Každý týden hodinová online konzultace, aktualizovaný tréninkový plán a hodnocení tvého progresu. Jsem pořád k dispozici.",
    featured: false,
  },
]

type Service = typeof services[0]

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const ref = useReveal(delay)

  const go = () => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="flex flex-col gap-6 p-8 sm:p-10 group"
      style={{
        background: "#f5f5f5",
        color: "#0a0a0a",
      }}
    >
      {/* Num */}
      <div>
        <span
          className="text-[11px] tracking-[0.3em] font-bold"
          style={{ fontFamily: "var(--font-display)", color: "oklch(0.50 0 0)" }}
        >
          / {service.num}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {service.title}
      </h3>

      {/* Price */}
      <div>
        <p className="text-xl font-bold font-sans leading-none">{service.price}</p>
        <p className="text-[11px] font-sans mt-1.5 opacity-50">{service.note}</p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "oklch(0.08 0 0 / 0.12)" }} />

      {/* Description */}
      <p className="text-sm leading-[1.75] font-light font-sans flex-1 opacity-75">
        {service.desc}
      </p>

      {/* CTA */}
      <button
        onClick={go}
        className="self-start flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase font-semibold font-sans cursor-pointer transition-opacity hover:opacity-60"
      >
        Mám zájem
        <ArrowUpRight size={13} className="transition-transform group-hover:rotate-45 duration-300" aria-hidden="true" />
      </button>
    </article>
  )
}

export function ServicesSection() {
  const headRef = useReveal(0)
  const subRef  = useReveal(100)

  return (
    <section
      id="sluzby"
      className="py-24 sm:py-32"
      style={{ background: "#0a0a0a" }}
      aria-label="Služby"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">

        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <p
            className="text-[10px] tracking-[0.5em] uppercase font-sans mb-5"
            style={{ color: "oklch(0.45 0 0)" }}
          >
            01 — Služby
          </p>
          <h2
            ref={headRef as React.RefObject<HTMLHeadingElement>}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 6vw, 5rem)",
              color: "#f5f5f5",
            }}
          >
            Co ti nabídnu.
          </h2>
          <p
            ref={subRef as React.RefObject<HTMLParagraphElement>}
            className="mt-4 text-base sm:text-lg font-light font-sans leading-relaxed"
            style={{ color: "oklch(0.50 0 0)", maxWidth: "28rem" }}
          >
            Tři cesty k jednomu cíli.
          </p>
        </div>

        {/* Cards — grid with gap-px on dark bg to create thin separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "oklch(0.22 0 0)" }}>
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
