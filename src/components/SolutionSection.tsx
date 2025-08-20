import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  const steps = [
    {
      step: "1",
      title: "Free Consultation",
      description: "Get expert advice on your vehicle's CNG conversion potential"
    },
    {
      step: "2", 
      title: "Verified Installers",
      description: "Connect with our network of certified CNG conversion specialists"
    },
    {
      step: "3",
      title: "Financing Solution",
      description: "Flexible payment plans to make conversion affordable for everyone"
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "24/7 support and maintenance guidance for your CNG system"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">CNG Made Easy™</span> by Futurewave
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've created a seamless path for vehicle and fleet owners to switch to CNG without stress. 
            We provide access to verified installers, guidance, finance options, and the data you need to make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-soft border-0 hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Individual Vehicle Owners */}
          <Card className="shadow-soft border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-savings rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">For Vehicle Owners</h3>
                <h4 className="text-xl text-primary font-semibold">Save 50%+ on Fuel. Drive Further for Less.</h4>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Spend less per trip</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Preserve engine life</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Financing options available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Professional installation guarantee</span>
                </div>
              </div>
              
              <Button variant="savings" size="lg" className="w-full">
                Get Your Conversion Quote
              </Button>
            </CardContent>
          </Card>

          {/* Fleet Operators */}
          <Card className="shadow-soft border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">For Fleet Operators</h3>
                <h4 className="text-xl text-primary font-semibold">Slash Fleet Fuel Costs by Half</h4>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you operate 3 or 300 vehicles, switching to CNG can save you millions annually. 
                We partner with the best conversion centers and offer trusted bulk pricing.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Bulk conversion discounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">Fleet management support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">ROI analysis & reporting</span>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="w-full">
                Book Fleet Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};