"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
      { threshold: 0.07 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

const galleryImages = [
  { src: "/images/trainer-1.jpg", alt: "Physique progress",       caption: "Definice & síla",   num: "01" },
  { src: "/images/trainer-2.jpg", alt: "Trainer portrait in gym", caption: "Osobní přístup",    num: "02" },
  { src: "/images/trainer-3.jpg", alt: "Back muscles definition", caption: "Komplexní rozvoj",  num: "03" },
]

export function GallerySection() {
  const tagRef   = useReveal(0)
  const headRef  = useReveal(80)
  const gridRef  = useReveal(160)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex,  setActiveIndex]  = useState(0)

  const openLightbox  = (i: number) => { setActiveIndex(i); setLightboxOpen(true);  document.body.style.overflow = "hidden" }
  const closeLightbox = ()          => { setLightboxOpen(false); document.body.style.overflow = "" }
  const nextImage     = ()          => setActiveIndex((i) => (i + 1) % galleryImages.length)
  const prevImage     = ()          => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape")      closeLightbox()
      if (e.key === "ArrowRight")  nextImage()
      if (e.key === "ArrowLeft")   prevImage()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxOpen])

  return (
    <>
      <section
        id="galerie"
        className="section-dark relative py-24 sm:py-36 overflow-hidden"
        aria-label="Galerie"
      >
        <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-16 lg:px-24">
          {/* Header */}
          <div className="mb-14 sm:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span
                ref={tagRef as React.RefObject<HTMLSpanElement>}
                className="text-[10px] tracking-[0.5em] uppercase font-sans font-medium text-muted-foreground"
              >
                03 — Galerie
              </span>
              <h2
                ref={headRef as React.RefObject<HTMLHeadingElement>}
                className="mt-6 font-extrabold leading-[0.9] tracking-[-0.02em] text-foreground"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,7vw,6rem)" }}
              >
                Výsledky mluví samy.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground font-light font-sans max-w-xs lg:text-right">
              Klikni pro zvětšení.
            </p>
          </div>

          {/* Bento Grid */}
          <div
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4"
          >
            {/* Large image */}
            <button
              className="md:col-span-7 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group cursor-pointer img-zoom text-left"
              onClick={() => openLightbox(0)}
              aria-label={`Zobrazit ${galleryImages[0].caption}`}
            >
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 58vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[11px] tracking-[0.3em] font-bold text-white/70" style={{ fontFamily: "var(--font-display)" }}>
                  / {galleryImages[0].num}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white font-extrabold text-2xl md:text-4xl leading-[0.95] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {galleryImages[0].caption}
                </p>
                <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-sans">Zvětšit →</p>
              </div>
            </button>

            {/* Right column */}
            <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
              {[1, 2].map((i) => (
                <button
                  key={i}
                  className={`relative overflow-hidden group cursor-pointer img-zoom text-left ${i === 1 ? "aspect-square" : "aspect-[4/3]"}`}
                  onClick={() => openLightbox(i)}
                  aria-label={`Zobrazit ${galleryImages[i].caption}`}
                >
                  <Image
                    src={galleryImages[i].src}
                    alt={galleryImages[i].alt}
                    fill
                    className={`object-cover ${i === 1 ? "object-top" : "object-center"}`}
                    sizes="(max-width:768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="text-[11px] tracking-[0.3em] font-bold text-white/70" style={{ fontFamily: "var(--font-display)" }}>
                      / {galleryImages[i].num}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-white font-extrabold text-lg md:text-2xl leading-[0.95] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {galleryImages[i].caption}
                    </p>
                    <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-sans">Zvětšit →</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          style={{ background: "oklch(0.06 0 0 / 0.97)" }}
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-6 right-6 z-50 w-11 h-11 flex items-center justify-center border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors" aria-label="Zavřít">
            <X size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage() }} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors" aria-label="Předchozí">
            <ChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage() }} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors" aria-label="Další">
            <ChevronRight size={20} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[activeIndex].src} alt={galleryImages[activeIndex].alt} fill className="object-contain" sizes="100vw" priority />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i) }}
                className="h-1 transition-all duration-500"
                style={{ width: i === activeIndex ? 40 : 20, background: i === activeIndex ? "oklch(0.97 0 0)" : "oklch(0.97 0 0 / 0.25)" }}
                aria-label={`Fotka ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
