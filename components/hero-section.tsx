"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    children.forEach((child, i) => {
      child.style.opacity = "0"
      child.style.transform = "translateY(32px)"
      setTimeout(() => {
        child.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)"
        child.style.opacity = "1"
        child.style.transform = "translateY(0)"
      }, 120 + i * 110)
    })
  }, [])

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      className="relative flex flex-col lg:flex-row lg:min-h-screen overflow-hidden"
      style={{ background: "#fff" }}
      aria-label="Hero sekce"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 md:px-16 pt-28 pb-10 lg:pt-28 lg:pb-16">
        <div ref={contentRef} className="flex flex-col gap-5 max-w-lg">

          {/* Label */}
          <span
            className="text-[10px] tracking-[0.5em] uppercase font-sans"
            style={{ color: "oklch(0.50 0 0)" }}
          >
            Fitness trenér — Winning Fitness Brno
          </span>

          {/* Name */}
          <h1
            className="font-extrabold leading-[0.88] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 7.5rem)",
              color: "#0a0a0a",
            }}
          >
            Vojtěch<br />Prokeš
          </h1>

          {/* Tagline */}
          <p
            className="text-base sm:text-lg font-light leading-relaxed font-sans"
            style={{ color: "oklch(0.35 0 0)", maxWidth: "26rem" }}
          >
            Osobní trénink 1:1, plán na míru nebo online coaching. Individuální přístup a výsledky.
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: "oklch(0.08 0 0 / 0.10)", margin: "4px 0" }} />

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => go("#kontakt")}
              className="inline-flex items-center px-6 py-3.5 text-[11px] tracking-[0.28em] uppercase font-semibold font-sans cursor-pointer transition-opacity hover:opacity-80"
              style={{ background: "#0a0a0a", color: "#fff" }}
            >
              Začít spolupráci
            </button>
            <button
              onClick={() => go("#sluzby")}
              className="inline-flex items-center px-6 py-3.5 text-[11px] tracking-[0.28em] uppercase font-semibold font-sans cursor-pointer transition-opacity hover:opacity-70"
              style={{ border: "1px solid oklch(0.08 0 0 / 0.22)", color: "#0a0a0a" }}
            >
              Moje služby
            </button>
          </div>

        </div>
      </div>

      {/* Mobile photo — shown below content on mobile */}
      <div className="relative w-full lg:hidden" style={{ height: "70vh" }}>
        <Image
          src="/images/trainer-2.jpg"
          alt="Vojtěch Prokeš - fitness trenér"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{ background: "linear-gradient(to bottom, #fff, transparent)" }}
        />
      </div>

      {/* Right — photo (desktop only) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2">
        <Image
          src="/images/trainer-2.jpg"
          alt="Vojtěch Prokeš - fitness trenér"
          fill
          className="object-cover object-top"
          priority
          sizes="50vw"
        />
        {/* Fade left edge into white */}
        <div
          className="absolute inset-y-0 left-0 w-32"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />
      </div>

    </section>
  )
}
