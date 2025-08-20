import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is CNG safe for my car?",
      answer: "Yes, CNG is completely safe when installed by certified professionals. Modern CNG systems are built to international safety standards with multiple safety features including pressure relief valves, leak detection systems, and automatic shut-off mechanisms. CNG is actually safer than petrol in many ways - it's lighter than air and disperses quickly if there's a leak, unlike petrol which pools and creates fire hazards."
    },
    {
      question: "How long does the conversion take?",
      answer: "A typical CNG conversion takes 1-3 days depending on your vehicle type and the complexity of the installation. Our certified installers work efficiently while ensuring quality. Most customers can drop off their vehicle in the morning and pick it up the same evening for standard conversions."
    },
    {
      question: "Where do I refill CNG?",
      answer: "Nigeria has a growing network of CNG stations. Major cities like Lagos, Abuja, Kano, and Port Harcourt have multiple stations. We provide our customers with a comprehensive map of CNG stations and help you plan routes. New stations are opening monthly as the government pushes CNG adoption."
    },
    {
      question: "What's the cost difference vs petrol?",
      answer: "CNG typically costs 50-60% less than petrol. While petrol is over ₦900/liter, CNG equivalent costs around ₦300-400. Most of our customers save ₦25,000-50,000 monthly on fuel costs. The conversion investment pays for itself within 4-8 months through savings."
    },
    {
      question: "Can I convert back to petrol if I want?",
      answer: "Yes, absolutely! Our bi-fuel systems allow you to switch between CNG and petrol with the flip of a switch. This gives you flexibility - use CNG for daily commuting and petrol for long trips where CNG stations might be scarce. Your original petrol system remains fully functional."
    },
    {
      question: "Will CNG affect my car's performance?",
      answer: "CNG actually improves engine performance in many ways. It burns cleaner, reducing carbon buildup and extending engine life. You'll notice smoother acceleration and reduced engine noise. The only minor difference is that CNG has about 10% less energy density than petrol, but the cost savings more than compensate."
    },
    {
      question: "How much does conversion cost?",
      answer: "Conversion costs vary by vehicle type, typically ranging from ₦800,000 to ₦1.5 million. We offer flexible financing options with monthly payments as low as ₦50,000. Most customers save more in fuel costs than their monthly payment, making it cash-flow positive from day one."
    },
    {
      question: "Do I need special maintenance?",
      answer: "CNG systems require minimal maintenance. We recommend annual safety inspections and filter changes every 6 months. The good news is that CNG burns so cleanly that you'll need fewer oil changes and engine maintenance on your regular engine. We provide full maintenance support and training."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about CNG conversion
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card rounded-lg shadow-soft border-0 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2349040409000" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                📞 Call Us: +234 904 040 9000
              </a>
              <a 
                href="tel:+234904040800" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                📞 Alt: +234 904 040 800
              </a>
              <a 
                href="https://wa.me/2349040409000" 
                className="inline-flex items-center justify-center px-6 py-3 bg-success text-success-foreground rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                💬 WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};