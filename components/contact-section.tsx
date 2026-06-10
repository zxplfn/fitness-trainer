"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, Instagram, MapPin, ArrowUpRight } from "lucide-react"

function useReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(28px)"
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

const contactLinks = [
  { icon: Mail,      label: "E-mail",    value: "prokesvojtech.coach@gmail.com", href: "mailto:prokesvojtech.coach@gmail.com" },
  { icon: Phone,     label: "Telefon",   value: "+420 603 575 592",              href: "tel:+420603575592"                   },
  { icon: Instagram, label: "Instagram", value: "@vojtechprokes_",               href: "https://instagram.com/vojtechprokes_" },
  { icon: MapPin,    label: "Adresa",    value: "Fuchsova 28, Brno",             href: "https://maps.google.com/?q=Fuchsova+28+Brno" },
]

const border = "oklch(0.08 0 0 / 0.10)"

export function ContactSection() {
  const headRef    = useReveal(0)
  const linksRef   = useReveal(100)
  const mapRef     = useReveal(180)

  return (
    <section
      id="kontakt"
      className="py-24 sm:py-32"
      style={{ background: "#fff" }}
      aria-label="Kontakt"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">
        <p className="text-[10px] tracking-[0.5em] uppercase font-sans mb-5" style={{ color: "oklch(0.50 0 0)" }}>
          05 — Kontakt &amp; Spolupráce
        </p>
        <h2
          ref={headRef as React.RefObject<HTMLHeadingElement>}
          className="font-extrabold leading-[0.9] tracking-tight mb-14"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 6vw, 5rem)",
            color: "#0a0a0a",
          }}
        >
          Pojďme spolupracovat.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Contacts */}
          <div ref={linksRef as React.RefObject<HTMLDivElement>}>
            <p className="text-base sm:text-lg font-light font-sans leading-relaxed mb-8" style={{ color: "oklch(0.38 0 0)", maxWidth: "28rem" }}>
              Napiš mi nebo zavolej — ozvu se do <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>24 hodin</strong>. Rád odpovím na všechny otázky ohledně tréninku i spolupráce.
            </p>

            <div style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
              {contactLinks.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-5 py-5 transition-opacity hover:opacity-60"
                    style={{ borderBottom: `1px solid ${border}` }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ border: `1px solid oklch(0.08 0 0 / 0.18)`, color: "#0a0a0a" }}
                    >
                      <Icon size={15} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[9px] tracking-[0.35em] uppercase font-sans mb-1" style={{ color: "oklch(0.55 0 0)" }}>
                        {c.label}
                      </span>
                      <span className="text-[15px] font-sans block truncate" style={{ color: "#0a0a0a" }}>
                        {c.value}
                      </span>
                    </div>
                    <ArrowUpRight size={15} style={{ color: "oklch(0.60 0 0)", flexShrink: 0 }} aria-hidden="true" />
                  </a>
                )
              })}
            </div>


          </div>

          {/* Map */}
          <div
            id="lokace"
            ref={mapRef as React.RefObject<HTMLDivElement>}
            className="relative overflow-hidden"
            style={{ border: `1px solid ${border}`, minHeight: 380 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.6789!2d16.6066!3d49.2033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712943d8c9b0e5d%3A0x0!2sFuchsova%2028%2C%20612%2000%20Brno!5e0!3m2!1scs!2scz!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Winning Fitness Brno"
            />
            {/* Label overlay */}
            <div
              className="absolute top-5 left-5 z-10 px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${border}`,
              }}
            >
              <p className="text-[9px] tracking-[0.3em] uppercase font-sans mb-0.5" style={{ color: "oklch(0.55 0 0)" }}>
                Kde trénuji
              </p>
              <p className="text-sm font-extrabold leading-none" style={{ fontFamily: "var(--font-display)", color: "#0a0a0a" }}>
                Winning Fitness Brno
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer
      className="py-10"
      style={{ background: "#0a0a0a", borderTop: "1px solid oklch(0.18 0 0)" }}
      role="contentinfo"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span
            className="text-sm font-extrabold tracking-widest"
            style={{ fontFamily: "var(--font-display)", color: "#f5f5f5", letterSpacing: "0.15em" }}
          >
            VP
          </span>
          <span className="ml-3 text-[10px] tracking-[0.3em] uppercase font-sans" style={{ color: "oklch(0.40 0 0)" }}>
            Fitness trenér — Brno
          </span>
        </div>

        <nav aria-label="Footer navigace">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center" role="list">
            {[
              { label: "Služby",       href: "#sluzby"  },
              { label: "O mně",        href: "#o-mne"   },
              { label: "Recenze",      href: "#recenze" },
              { label: "Kontakt",      href: "#kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="text-[10px] tracking-[0.25em] uppercase font-sans cursor-pointer transition-opacity hover:opacity-50"
                  style={{ color: "oklch(0.42 0 0)" }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[10px] tracking-wide font-sans" style={{ color: "oklch(0.35 0 0)" }}>
          &copy; {new Date().getFullYear()} Vojtěch Prokeš
        </p>
      </div>

      <div
        className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 mt-8 pt-6 flex items-center justify-center"
        style={{ borderTop: "1px solid oklch(0.18 0 0)" }}
      >
        <a
          href="https://socialy.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="text-[10px] tracking-[0.15em] font-sans" style={{ color: "oklch(0.45 0 0)" }}>
            Web vytvořilo
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="w-[18px] h-[18px] transition-transform group-hover:scale-110">
              <defs>
                <linearGradient id="socialyMark" x1="22" y1="12" x2="34" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="hsl(330 90% 62%)" />
                  <stop offset="0.55" stopColor="hsl(358 86% 58%)" />
                  <stop offset="1" stopColor="hsl(22 95% 58%)" />
                </linearGradient>
              </defs>
              <path d="M19 20 L23 27" stroke="url(#socialyMark)" strokeWidth="11" strokeLinecap="round" />
              <path d="M41 14 L27 50" stroke="url(#socialyMark)" strokeWidth="11" strokeLinecap="round" />
            </svg>
            <span
              className="text-sm"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                background: "linear-gradient(95deg, hsl(330 90% 62%), hsl(358 86% 58%), hsl(22 95% 58%))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Socialy.cz
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}
