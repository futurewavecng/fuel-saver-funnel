import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendLeadEmail, type LeadFormData } from "@/lib/emailjs";

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    plugType: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.vehicleType || !formData.plugType || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to download the guide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailSent = await sendLeadEmail(formData as LeadFormData);
      
      if (emailSent) {
        toast({
          title: "Success!",
          description: "Your guide is downloading now. Check your email for additional resources.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          vehicleType: "",
          plugType: "",
          location: ""
        });
        
        // Trigger download
        const link = document.createElement('a');
        link.href = "https://drive.google.com/uc?export=download&id=1r1VAzbanwY-MS3Y6iAdj8_w9X8keHxeh";
        link.download = "CNG_Conversion_Guide.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        toast({
          title: "Error",
          description: "Failed to process your request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Don't Let Fuel Prices 
              <span className="text-white block">Control Your Wallet</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join the growing number of smart Nigerians switching to CNG. 
              <span className="block mt-2 font-semibold">
                Start saving <span className="text-accent">50%+ on fuel costs</span> today.
              </span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-2">🚗</div>
                <div className="text-lg font-bold mb-1">200+</div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-lg font-bold mb-1">₦15.2M+</div>
                <div className="text-white/80 text-sm">Total Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-lg font-bold mb-1">4.9/5</div>
                <div className="text-white/80 text-sm">Customer Rating</div>
              </div>
            </div>

            <Button 
              variant="cta" 
              size="xl" 
              className="mb-4"
              onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download Free CNG Guide Now
            </Button>
            <p className="text-white/70 text-sm">
              Join 1,000+ Nigerians who already downloaded this guide
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Footer Form */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-strong z-50 lg:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-foreground text-sm">Start Saving Today</div>
              <div className="text-xs text-muted-foreground">Get your free CNG guide</div>
            </div>
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download Now
            </Button>
          </div>
        </div>
      </div>

      {/* Final Form Section for Desktop */}
      <section id="final-form" className="py-16 bg-muted hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-strong border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Ready to Start Saving?
                  </h3>
                  <p className="text-muted-foreground">
                    Get your personalized CNG conversion quote and free guide
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    
                    <Input
                      placeholder="Your email address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Input
                    placeholder="Your phone number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                        <SelectItem value="pickup">Pickup Truck</SelectItem>
                        <SelectItem value="bus">Bus/Commercial</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={formData.plugType} onValueChange={(value) => setFormData({...formData, plugType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Engine type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4-cylinder">4 Cylinder</SelectItem>
                        <SelectItem value="6-cylinder">6 Cylinder</SelectItem>
                        <SelectItem value="8-cylinder">8 Cylinder</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="unsure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                        <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                        <SelectItem value="ibadan">Ibadan</SelectItem>
                        <SelectItem value="benin">Benin City</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Get My Free CNG Guide & Quote"}
                </Button>
                </form>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  🔒 Your information is 100% secure and will never be shared
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};