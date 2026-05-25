import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ochrana osobních údajů | Vojtěch Prokeš",
  description: "Politika ochrany osobních údajů a GDPR informace.",
}

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Zpět
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 md:px-16 py-24 sm:py-32">
        <article className="prose prose-invert max-w-none">
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ochrana osobních údajů
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Správce osobních údajů</h2>
            <div className="bg-card p-6 rounded-sm border border-border mb-6">
              <p className="text-foreground mb-2"><strong>Jméno:</strong> Vojtěch Prokeš</p>
              <p className="text-foreground mb-2"><strong>IČO:</strong> 24483192</p>
              <p className="text-foreground mb-2"><strong>E-mail:</strong> prokesvojtech.coach@gmail.com</p>
              <p className="text-foreground"><strong>Telefon:</strong> 603 575 592</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Jaké údaje zpracovávám</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Zpracovávám osobní údaje, které mi sami poskytnete prostřednictvím kontaktního formuláře, zejména:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Jméno a příjmení</li>
              <li>E-mail</li>
              <li>Telefonní číslo (pokud vyplníte)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Za jakým účelem údaje zpracovávám</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vaše údaje zpracovávám za účelem:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Odpovědi na vaši zprávu</li>
              <li>Domluvy spolupráce</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Jak dlouho údaje uchovávám</h2>
            <p className="text-muted-foreground leading-relaxed">
              Osobní údaje uchovávám po dobu nezbytně nutnou k vyřízení komunikace, maximálně po dobu 12 měsíců, pokud nevznikne další spolupráce.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kdo má k údajům přístup</h2>
            <p className="text-muted-foreground leading-relaxed">
              K vašim údajům mám přístup pouze já jako správce. Údaje nepředávám třetím stranám.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Vaše práva</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Máte právo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Požadovat přístup ke svým údajům</li>
              <li>Požadovat opravu nebo výmaz</li>
              <li>Vznést námitku proti zpracování</li>
              <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
            </ul>
          </section>

          <section className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              V případě dotazů nebo požadavků týkajících se vašich údajů mě kontaktujte na:
            </p>
            <div className="bg-card p-4 border border-border">
              <p className="text-foreground font-semibold">prokesvojtech.coach@gmail.com</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
