"use client"

import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function TransformationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span
            className="text-[10px] tracking-[0.5em] uppercase font-sans block mb-4"
            style={{ color: "oklch(0.60 0 0)" }}
          >
            Moje cesta
          </span>
          <h2
            className="font-bold tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#fff",
            }}
          >
            Transformace
          </h2>
          <p
            className="mt-5 text-base sm:text-lg font-light leading-relaxed font-sans max-w-2xl mx-auto"
            style={{ color: "oklch(0.65 0 0)" }}
          >
            Roky tvrdé práce, disciplíny a neustálého učení se.
          </p>
        </div>

        {/* BEFORE Section */}
        <div
          className="mb-16 sm:mb-24"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "oklch(0.40 0 0)" }} />
            <span
              className="text-sm tracking-[0.4em] uppercase font-sans"
              style={{ color: "oklch(0.50 0 0)" }}
            >
              Kde to začalo
            </span>
          </div>
          
          {/* Mobile: vertical stack, Desktop: 3 columns */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4", border: "1px solid oklch(0.25 0 0)" }}
            >
              <Image
                src="/images/before-1.jpg"
                alt="Vojtěch - začátky"
                fill
                className="object-cover object-top grayscale opacity-80"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4", border: "1px solid oklch(0.25 0 0)" }}
            >
              <Image
                src="/images/before-3.jpg"
                alt="Vojtěch - začátky"
                fill
                className="object-cover object-top grayscale opacity-80"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4", border: "1px solid oklch(0.25 0 0)" }}
            >
              <Image
                src="/images/before-2.jpg"
                alt="Vojtěch - začátky"
                fill
                className="object-cover object-top grayscale opacity-80"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Arrow divider */}
        <div 
          className="flex justify-center mb-16 sm:mb-24"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12" style={{ background: "oklch(0.30 0 0)" }} />
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#fff" }}
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-px h-12" style={{ background: "oklch(0.30 0 0)" }} />
          </div>
        </div>

        {/* AFTER Section */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "#fff" }} />
            <span
              className="text-sm tracking-[0.4em] uppercase font-sans font-semibold"
              style={{ color: "#fff" }}
            >
              Dnes
            </span>
          </div>
          
          {/* Mobile: vertical stack with bigger photos, Desktop: 2 columns */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8 max-w-4xl mx-auto">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4", border: "2px solid oklch(0.40 0 0)" }}
            >
              <Image
                src="/images/vojtech-1.jpg"
                alt="Vojtěch - záda v zrcadle"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4", border: "2px solid oklch(0.40 0 0)" }}
            >
              <Image
                src="/images/vojtech-2.jpg"
                alt="Vojtěch - zepředu v zrcadle"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className="mt-16 sm:mt-24 text-center max-w-2xl mx-auto"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
          }}
        >
          <p
            className="text-xl sm:text-2xl font-light leading-relaxed font-sans"
            style={{ color: "#fff" }}
          >
            {'"'}Výsledky nepřichází přes noc.<br />
            <span className="font-semibold">Ale pokud vydržíš, přijdou.</span>{'"'}
          </p>
        </div>
      </div>
    </section>
  )
}
