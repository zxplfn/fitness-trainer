"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "O mně",        href: "#o-mne"   },
  { label: "Služby",       href: "#sluzby"  },
  { label: "Recenze",      href: "#recenze" },
  { label: "Kde trénuji",  href: "#lokace"  },
  { label: "Kontakt",      href: "#kontakt" },
  { label: "Spolupráce",   href: "#kontakt" },
]

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  const go = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 120)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "#fff",
          borderBottom: "1px solid oklch(0.08 0 0 / 0.08)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        role="banner"
      >
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-none cursor-pointer"
            aria-label="Vojtěch Prokeš – domů"
          >
            <span
              className="text-base font-extrabold tracking-widest leading-none"
              style={{ fontFamily: "var(--font-display)", color: "#0a0a0a", letterSpacing: "0.12em" }}
            >
              VP
            </span>
            <span
              className="text-[9px] tracking-[0.3em] uppercase mt-0.5 leading-none"
              style={{ color: "oklch(0.50 0 0)", fontFamily: "var(--font-sans)" }}
            >
              Fitness trenér
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Hlavní navigace">
            {navLinks.slice(0, 5).map((l) => (
              <button
                key={l.href + l.label}
                onClick={() => go(l.href)}
                className="text-[11px] tracking-[0.22em] uppercase font-sans cursor-pointer link-underline transition-opacity hover:opacity-60"
                style={{ color: "oklch(0.25 0 0)" }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <button
            onClick={() => go("#kontakt")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-semibold font-sans cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: "#0a0a0a", color: "#fff", letterSpacing: "0.22em" }}
          >
            Spolupráce
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer"
            style={{ color: "#0a0a0a" }}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col pt-20 pb-8 px-6 transition-all duration-400"
        style={{
          background: "#fff",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 flex-1 justify-center" aria-label="Mobilní navigace">
          {navLinks.map((l, i) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="text-left py-4 font-extrabold leading-none cursor-pointer transition-opacity hover:opacity-50"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 9vw, 3.5rem)",
                color: "#0a0a0a",
                borderBottom: "1px solid oklch(0.08 0 0 / 0.08)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ${i * 60}ms, transform 0.4s ${i * 60}ms`,
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
