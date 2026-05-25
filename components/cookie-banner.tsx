"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted/rejected
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) {
      // Show banner after 1 second
      setTimeout(() => setVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookies-accepted", "false")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border p-5 sm:p-8 animate-fade-in-up">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm text-foreground mb-2">
            <strong>Cookies a analyza</strong>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tento web pouziva cookies za ucelem zlepseni uzivatelskeho zazitku a analyzy navstevnosti. Pouzivanim webu souhlasite s jejich pouzitim.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground border border-border hover:border-foreground transition-all cursor-pointer font-sans"
          >
            Odmitnout
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase font-semibold cursor-pointer font-sans hover:opacity-80 transition-opacity"
          >
            Souhlasim
          </button>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 sm:hidden text-muted-foreground hover:text-foreground p-1"
          aria-label="Zavrit cookie oznameni"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
