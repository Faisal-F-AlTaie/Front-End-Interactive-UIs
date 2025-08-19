import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time directly from your account settings. There are no long-term contracts or hidden fees.",
    },
    {
      question: "Is this tool beginner-friendly?",
      answer:
        "Postora is designed with an intuitive interface, making it easy for beginners to get started. We also offer comprehensive tutorials and support.",
    },
    {
      question: "What platforms do you support?",
      answer:
        "We currently support Instagram, TikTok, Facebook, YouTube, and LinkedIn. We are continuously working to add more platforms.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 7-day free trial for our Starter plan, allowing you to explore core features before committing.",
    },
    {
      question: "How does the AI content scripting work?",
      answer:
        "Our AI analyzes your input and generates realistic, personality-matched scripts, captions, and hashtags, helping you create engaging content faster.",
    },
  ]

  return (
    <section id="support" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about Postora.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-black hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
