"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react"

function useReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add("reveal")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

const gymInfo = [
  { icon: MapPin, label: "Adresa",         value: "Fuchsova 28, 612 00 Brno",     href: "https://maps.google.com/?q=Fuchsova+28+Brno" },
  { icon: Clock,  label: "Otevírací doba", value: "Po-Pá 6-22 · So-Ne 8-20",     href: null },
  { icon: Phone,  label: "Kontakt",        value: "+420 603 575 592",              href: "tel:+420603575592" },
]

export function LocationSection() {
  const tagRef     = useReveal(0)
  const headRef    = useReveal(80)
  const contentRef = useReveal(160)
  const mapRef     = useReveal(220)

  const borderColor = "oklch(0.08 0 0 / 0.14)"
  const iconStyle   = {
    width: 44, height: 44,
    display: "flex", alignItems: "center", justifyContent: "center",
    border: `1px solid oklch(0.08 0 0 / 0.25)`,
    color: "oklch(0.15 0 0)", flexShrink: 0,
  } as React.CSSProperties

  return (
    <section
      id="lokace"
      className="section-light relative py-24 sm:py-36 overflow-hidden"
      aria-label="Kde trénuji"
    >
      <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-14 sm:mb-20 max-w-4xl">
          <span
            ref={tagRef as React.RefObject<HTMLSpanElement>}
            className="text-[10px] tracking-[0.5em] uppercase font-sans font-medium"
            style={{ color: "oklch(0.45 0 0)" }}
          >
            06 — Lokace
          </span>
          <h2
            ref={headRef as React.RefObject<HTMLHeadingElement>}
            className="mt-6 font-extrabold leading-[0.9] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem,7vw,6rem)",
              color: "oklch(0.08 0 0)",
            }}
          >
            Winning Fitness Brno.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Info */}
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-base sm:text-lg leading-relaxed font-light font-sans max-w-md" style={{ color: "oklch(0.35 0 0)" }}>
              Moderní gym s prvotřídním vybavením v srdci Brna.
            </p>

            <div className="flex flex-col" style={{ borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}` }}>
              {gymInfo.map((info) => {
                const IconComponent = info.icon
                const content = (
                  <div className="group flex items-center gap-5 py-5" style={{ borderColor }}>
                    <div style={iconStyle}>
                      <IconComponent size={16} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[9px] tracking-[0.35em] uppercase font-sans mb-1" style={{ color: "oklch(0.55 0 0)" }}>
                        {info.label}
                      </span>
                      <span className="text-base font-sans block truncate" style={{ color: "oklch(0.10 0 0)" }}>
                        {info.value}
                      </span>
                    </div>
                    {info.href && (
                      <ArrowUpRight size={16} style={{ color: "oklch(0.65 0 0)", flexShrink: 0 }} aria-hidden="true" />
                    )}
                  </div>
                )

                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ borderBottom: `1px solid ${borderColor}` }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label} style={{ borderBottom: `1px solid ${borderColor}` }}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Map */}
          <div
            ref={mapRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-7 relative aspect-square lg:aspect-auto lg:min-h-[500px] overflow-hidden"
            style={{ border: `1px solid ${borderColor}` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.6789!2d16.6066!3d49.2033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712943d8c9b0e5d%3A0x0!2sFuchsova%2028%2C%20612%2000%20Brno!5e0!3m2!1scs!2scz!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Winning Fitness Brno"
              className="absolute inset-0"
            />
            {/* Floating label */}
            <div
              className="absolute top-6 left-6 z-10 px-4 py-3"
              style={{ background: "oklch(0.97 0 0 / 0.93)", backdropFilter: "blur(8px)", border: `1px solid ${borderColor}` }}
            >
              <p className="text-[9px] tracking-[0.3em] uppercase font-sans mb-1" style={{ color: "oklch(0.55 0 0)" }}>
                Lokace
              </p>
              <p className="text-sm font-extrabold leading-none" style={{ fontFamily: "var(--font-display)", color: "oklch(0.08 0 0)" }}>
                Winning Fitness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
