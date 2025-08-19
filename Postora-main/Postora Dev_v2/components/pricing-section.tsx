"use client"

import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$29/mo",
      description: "Ideal for solo creators and clippers.",
      features: ["5 social accounts", "1 user", "Core scheduling", "AI captions", "Basic analytics"],
      cta: "Start Free Trial",
      accentColor: "turquoise",
    },
    {
      name: "Pro",
      price: "$79/mo",
      description: "Perfect for small teams.",
      features: [
        "15 social accounts",
        "3 users",
        "Competitor analytics",
        "Content research",
        "Content assistant",
        "Auto-posting",
      ],
      cta: "Upgrade to Pro",
      accentColor: "soft-yellow",
    },
    {
      name: "Agency",
      price: "$199/mo",
      description: "Designed for agencies (up to 10 clients).",
      features: [
        "40 social accounts",
        "10 users",
        "Full analytics suite",
        "Team/client approval workflows",
        "Custom branding",
      ],
      cta: "Get Agency Plan",
      accentColor: "light-red",
    },
    {
      name: "Power Agency",
      price: "$399/mo",
      description: "For large agencies with extensive needs.",
      features: [
        "100+ social accounts",
        "25 users",
        "Everything unlocked",
        "White-label portal",
        "Automation builder",
        "Sub-client brands",
      ],
      cta: "Contact Sales",
      accentColor: "turquoise", // Reusing turquoise for consistency or could add another color
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible Pricing for Every Scale</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that best fits your needs, from solo creators to large agencies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="flex flex-col bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <p className="text-4xl font-bold mt-2">{tier.price}</p>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-base font-medium text-black hover:no-underline">
                      What&apos;s included?
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid gap-2 text-sm text-gray-700">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className={`w-full bg-${tier.accentColor} text-${tier.accentColor}-foreground hover:bg-${tier.accentColor}/90`}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
