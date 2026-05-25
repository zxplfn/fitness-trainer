"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

function useReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(32px)"
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
      { threshold: 0.07 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

function useRevealDiv(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(40px)"
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)"
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }, delay)
        ob.unobserve(el)
      }
    }, { threshold: 0.1 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [delay])
  return ref
}

export function AboutSection() {
  const headRef = useReveal(0)
  const text1Ref = useReveal(100)
  const text2Ref = useReveal(100)
  const img1Ref = useRevealDiv(0)
  const img2Ref = useRevealDiv(150)

  return (
    <section
      id="o-mne"
      className="overflow-hidden"
      style={{ background: "#fff" }}
      aria-label="O mně"
    >
      {/* ── PART 1 ── */}
      <div className="py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">

          {/* Heading */}
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.5em] uppercase font-sans mb-4" style={{ color: "oklch(0.50 0 0)" }}>
              02 — O mně
            </p>
            <h2
              ref={headRef as React.RefObject<HTMLHeadingElement>}
              className="font-extrabold leading-[0.92] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#0a0a0a",
              }}
            >
              O mně
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Big photo — part 1 */}
            <div
              ref={img1Ref}
              className="relative w-full overflow-hidden img-zoom"
              style={{
                aspectRatio: "4/5",
                border: "1px solid oklch(0.08 0 0 / 0.12)",
              }}
            >
              <Image
                src="/images/vojtech-1.jpg"
                alt="Vojtěch Prokeš — osobní trenér"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text — part 1 */}
            <div className="flex flex-col gap-8 lg:pt-4">
              <h3
                className="text-xl sm:text-2xl font-semibold"
                style={{ color: "#0a0a0a" }}
              >
                Vojtěch Prokeš | Osobní & Online trenér
              </h3>

              <div
                ref={text1Ref as React.RefObject<HTMLDivElement>}
                className="flex flex-col gap-5 text-base sm:text-[17px] font-light leading-[1.75] font-sans"
                style={{ color: "oklch(0.35 0 0)" }}
              >
                <p>
                  Ahoj, jmenuji se Vojta a fitness se věnuji více než <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>5 let</strong>. Moje cesta začala jako u většiny lidí – byl jsem velmi hubený, vysoký kluk s nízkým sebevědomím, který nebyl spokojený s tím, jak vypadá ani jak se cítí.
                </p>
                <p>
                  Hledal jsem způsob, jak se z toho dostat, a tehdy ke mně přišlo cvičení. Poprvé jsem se se cvičením setkal během období karantény. Začínal jsem doma, bez zkušeností, bez vedení a hlavně bez pochopení toho, jak tělo funguje.
                </p>
                <p>
                  Koupil jsem si 5ti kilové činky, podložku a začal cvičit podle aplikace v telefonu, kde bylo pár cviků, které jsem každý den opakoval. Trénoval jsem každý den, ale dělal jsem spoustu chyb — podceňoval jsem <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>spánek a regeneraci</strong>, neřešil dostatečný příjem kalorií ani bílkovin a myslel jsem si, že samotné cvičení stačí. Bohužel se špatným spánkem a mylnou představou o zdravém stravování to moc nefungovalo.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="py-12 flex flex-col items-center justify-center gap-4">
        <div className="w-px h-16" style={{ background: "oklch(0.08 0 0 / 0.15)" }} />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "oklch(0.35 0 0)" }}
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="w-px h-16" style={{ background: "oklch(0.08 0 0 / 0.15)" }} />
      </div>

      {/* ── PART 2 ── */}
      <div className="py-24 sm:py-32" style={{ background: "oklch(0.97 0 0)" }}>
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Text — part 2 (left on desktop) */}
            <div className="flex flex-col gap-8 lg:pt-4 order-2 lg:order-1">
              <h3
                className="text-xl sm:text-2xl font-semibold"
                style={{ color: "#0a0a0a" }}
              >
                Vojtěch Prokeš | Osobní & Online trenér
              </h3>

              <div
                ref={text2Ref as React.RefObject<HTMLDivElement>}
                className="flex flex-col gap-5 text-base sm:text-[17px] font-light leading-[1.75] font-sans"
                style={{ color: "oklch(0.35 0 0)" }}
              >
                <p>
                  Postupem času jsem zjistil, že výsledky přichází hlavně tehdy, když vyladíte všechny <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>základní pilíře</strong>. Když jsem poprvé s mým nejlepším kamarádem vstoupil do posilovny, začal jsem fitness vnímat úplně jinak.
                </p>
                <p>
                  Ze začátku to bylo těžké rozhodnutí — člověk se bojí, že ho ostatní budou soudit, řešit, jak cvičí apod. Realita je ale úplně jiná. Právě tohle mě přivedlo ke studiu tréninku, výživy, spánku a všeho, co ovlivňuje progres.
                </p>
                <p>
                  Prošel jsem si také obdobím, kdy jsem chtěl co nejrychleji nabrat za každou cenu. Ani tohle nebyla správná cesta. Díky těmto zkušenostem jsem pochopil, že výsledky nepřichází hned a že je důležité mít jasné cíle a dobře nastavený plán.
                </p>
                <p>
                  Právě vlastní zkušenosti mi dnes pomáhají lépe chápat lidi, kteří se rozhodnou něco změnit. Vím, jaké to je začínat od nuly, tápat a hledat cestu.
                </p>
                <p>
                  Své zkušenosti jsem následně doplnil odborným vzděláním pod záštitou <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>Fitness Institutu</strong>, kde jsem absolvoval kurz osobního trenéra.
                </p>
                <p>
                  Dnes pomáhám lidem budovat nejen lepší postavu, ale i <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>zdravější vztah k tréninku, jídlu a vlastnímu tělu</strong>.
                </p>
                <p>
                  Protože fitness by nemělo být jen krátkodobou změnou. Mělo by se stát životním stylem, který dává smysl.
                </p>
              </div>

            </div>

            {/* Big photo — part 2 */}
            <div
              ref={img2Ref}
              className="relative w-full overflow-hidden img-zoom order-1 lg:order-2"
              style={{
                aspectRatio: "4/5",
                border: "1px solid oklch(0.08 0 0 / 0.12)",
              }}
            >
              <Image
                src="/images/vojtech-2.jpg"
                alt="Vojtěch Prokeš — trénink a výživa"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
