import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Podmínky spolupráce | Vojtěch Prokeš",
  description: "Podmínky spolupráce, objednávání a storno podmínky.",
}

export default function Terms() {
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
            Podmínky spolupráce
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Poskytovatel služeb</h2>
            <div className="bg-card p-6 rounded-sm border border-border mb-6">
              <p className="text-foreground mb-2"><strong>Jméno:</strong> Vojtěch Prokeš</p>
              <p className="text-foreground"><strong>IČO:</strong> 24483192</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Objednání služeb</h2>
            <p className="text-muted-foreground leading-relaxed">
              Služby jsou sjednávány individuálně na základě domluvy prostřednictvím e-mailu nebo telefonu. Po prvotním kontaktu provádíme bezplatnou úvodní konzultaci, během které si vyjasníme vaše cíle, aktuální stav a vhodný typ spolupráce.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Typy služeb</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Online coaching:</strong> Vzdálené vedení tréninkového plánu a nutričních pokynů</li>
              <li><strong>1:1 tréninky v Brně:</strong> Osobní tréninky v přímém kontaktu</li>
              <li><strong>Kombinovaná spolupráce:</strong> Mix online a osobních setkání</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Platba</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Platba probíhá na základě dohody mezi trenérem a klientem. Detaily platby (výše, frekvence, metoda) jsou sjednoceny individuálně.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fakturu vydám na základě uzavřené dohody.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Storno podmínky</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Domluvený termín je možné zrušit minimálně <strong>24 hodin předem</strong>. Při pozdějším zrušení může být požadována úhrada služby.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              V případě nemoci či mimořádné situace se snažme situaci řešit individuálně.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Odpovědnost klienta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Klient je plně zodpovědný za svůj zdravotní stav a výkonnost. Před zahájením cvičebního programu důrazně doporučuji konzultaci s lékařem.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Cvičení provádějte na vlastní odpovědnost</li>
              <li>Informujte mě o jakýchkoli zdravotních problémech</li>
              <li>Dodržujte bezpečnostní pravidla během tréninků</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Odpovědnost trenéra</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mám odpovědnost poskytnout kvalitní a bezpečné tréninky. V případě online coachingu předávám všechny pokyny písemně s videi a osvětlením. Nejsem lékař ani fyzioterapeut — v případě bolestí či zranění vždy doporučuji konzultaci s odborníkem.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Důvěrnost a data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vaše osobní údaje a průběh tréninku jsou důvěrné. Nebudu je sdílet bez vašeho souhlasu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bližší informace naleznete v <Link href="/privacy-policy" className="text-blue-500 hover:underline">Ochraně osobních údajů</Link>.
            </p>
          </section>

          <section className="pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Změny podmínek</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vyhrazuji si právo změnit tyto podmínky. Budete informován o všech důležitých změnách emailem.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
