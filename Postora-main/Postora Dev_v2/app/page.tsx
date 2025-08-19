import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DashboardShowcaseSection } from "@/components/dashboard-showcase-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DashboardShowcaseSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
