import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TransformationSection } from "@/components/transformation-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection, Footer } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TransformationSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
