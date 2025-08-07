import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const GuideSection = () => {
  const benefits = [
    "How much you're losing monthly on petrol",
    "Why thousands are switching to CNG in Nigeria", 
    "How to protect your engine while saving",
    "FAQ answers to all your CNG fears",
    "The exact steps to convert your car today",
    "Directory of verified CNG installers",
    "Financing options and payment plans",
    "Maintenance tips for CNG systems"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Guide Mockup */}
            <div className="text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-strong">
                <div className="bg-white rounded-lg p-6 mb-6 shadow-soft">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Complete CNG Conversion Guide</h3>
                    <p className="text-muted-foreground text-sm">Your Step-by-Step Manual to Fuel Savings</p>
                    <div className="mt-4 h-32 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <span className="text-6xl">📚</span>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                      32 Pages • PDF Download • Instant Access
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-center">
                  Valued at ₦15,000 - Yours FREE today
                </p>
              </div>
            </div>

            {/* Right - Benefits & CTA */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What You Get With The 
                <span className="text-accent block">Free Guide</span>
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                Inside, you'll learn everything you need to make the switch to CNG confidently:
              </p>

              <div className="grid gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button variant="cta" size="xl" className="w-full" asChild>
                  <a href="https://drive.google.com/uc?export=download&id=1r1VAzbanwY-MS3Y6iAdj8_w9X8keHxeh" target="_blank" rel="noopener noreferrer">
                    Download The Free Guide Now
                  </a>
                </Button>
                <p className="text-center text-white/70 text-sm">
                  Join 1,000+ Nigerians who downloaded this guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};