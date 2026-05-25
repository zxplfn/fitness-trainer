"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const reviews = [
  {
    name: "Tomáš Jedlička",
    role: "Osobní trénink",
    text: "Dlouho jsem chtěl začít cvičit pravidelně, ale nevěděl jak na to a pak jsme začal chodit k Vojtovi, který mi ukázal plno nových cviků seznámil mě s technikou a ukázal mi, že se dá cvičit pravidelně a může to člověka i bavit…",
  },
  {
    name: "Martina Vaculíková",
    role: "Osobní trénink",
    text: "Ráda bych poděkovala trenérovi Vojtovi za jeho maximálně profesionální přístup a péči. Díky jeho vedení se cítím nejen fyzicky silnější, ale hlavně jistější ve vlastním těle. Velmi oceňuji, že tréninky vždy přizpůsobuje mému zdravotnímu stavu a aktuálním možnostem, což je pro mě naprosto zásadní. I když je Vojta mladý, má neuvěřitelný cit a porozumění pro ženy 50+, a to i v případě větších zdravotních omezení. Ví přesně, jak cvičení nastavit tak, aby bylo bezpečné, smysluplné a zároveň přinášelo výsledky. Vojta má skvělý cit pro to, kdy podpořit a kdy naopak ubrat, aby byl trénink efektivní, ale zároveň bezpečný. Díky němu jsem se posunula dál, než jsem sama čekala – a to jak po fyzické, tak i psychické stránce. Jeho profesionalita, lidský přístup a opravdový zájem o klienta z něj dělají trenéra, kterého můžu s klidným svědomím doporučit každému.",
  },
  {
    name: "Jan Galík",
    role: "Osobní trénink",
    text: "S Vojtou trénuji přes půl roku a jsem velmi spokojený. Díky jeho přístupu vím na co a jak se zaměřit i když jdu cvičit samostatně, bez dohledu.",
  },
]

const MAX_LENGTH = 180

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const isLong = review.text.length > MAX_LENGTH
  const truncatedText = isLong ? review.text.slice(0, MAX_LENGTH) + "…" : review.text

  return (
    <div
      className="flex flex-col gap-5 p-7 sm:p-8 w-full"
      style={{
        background: "oklch(0.13 0 0)",
        border: "1px solid oklch(0.22 0 0)",
      }}
    >
      {/* Quote */}
      <div className="flex-1">
        <p
          className="text-base leading-[1.6] font-sans"
          style={{ color: "oklch(0.80 0 0)", fontWeight: 300 }}
        >
          &ldquo;{truncatedText}&rdquo;
        </p>
        {isLong && (
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="mt-3 text-sm font-medium underline underline-offset-4 hover:no-underline transition-all"
                style={{ color: "oklch(0.65 0 0)" }}
              >
                Zobrazit celou recenzi
              </button>
            </DialogTrigger>
            <DialogContent
              className="max-w-lg"
              style={{
                background: "oklch(0.13 0 0)",
                border: "1px solid oklch(0.22 0 0)",
              }}
            >
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold" style={{ color: "#f5f5f5" }}>
                  {review.name}
                </DialogTitle>
              </DialogHeader>
              <p
                className="text-base leading-[1.7] font-sans mt-4"
                style={{ color: "oklch(0.80 0 0)", fontWeight: 300 }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <p
                className="text-[10px] tracking-[0.2em] uppercase font-sans mt-4"
                style={{ color: "oklch(0.45 0 0)" }}
              >
                {review.role}
              </p>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid oklch(0.22 0 0)" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "oklch(0.22 0 0)" }}
        >
          <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)", color: "#f5f5f5" }}>
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold font-sans leading-none" style={{ color: "#f5f5f5" }}>
            {review.name}
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase font-sans mt-1" style={{ color: "oklch(0.45 0 0)" }}>
            {review.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section
      id="recenze"
      className="py-24 sm:py-32"
      style={{ background: "#0a0a0a" }}
      aria-label="Recenze"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16">
        <p className="text-[10px] tracking-[0.5em] uppercase font-sans mb-5" style={{ color: "oklch(0.45 0 0)" }}>
          04 — Recenze
        </p>
        <h2
          className="font-extrabold leading-[0.9] tracking-tight mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 6vw, 5rem)",
            color: "#f5f5f5",
          }}
        >
          Co říkají klienti.
        </h2>

        {/* Static reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
