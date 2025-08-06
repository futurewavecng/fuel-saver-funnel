import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import heroFuelImage from "@/assets/hero-fuel-frustration.jpg";
import heroHappyImage from "@/assets/hero-cng-happy.jpg";

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    plugType: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll integrate with Google Sheets later
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 relative">
          <img 
            src={heroFuelImage} 
            alt="Frustrated at fuel station" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        <div className="w-1/2 relative">
          <img 
            src={heroHappyImage} 
            alt="Happy with CNG conversion" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Fuel Is Draining Your{" "}
              <span className="text-accent">Wallet</span>.{" "}
              <span className="block mt-2">Here's The Smarter Alternative.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover how over <span className="font-bold text-accent">200 Nigerians</span> are saving{" "}
              <span className="font-bold text-success">50%+</span> on fuel with Futurewave CNG.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="cta" size="xl" className="flex-1 sm:flex-none">
                Download Free CNG Guide
              </Button>
              <Button variant="outline" size="xl" className="flex-1 sm:flex-none text-white border-white hover:bg-white hover:text-primary">
                Watch Success Stories
              </Button>
            </div>
          </div>
          
          {/* Right Column - Lead Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <Card className="shadow-strong border-0">
              <CardContent className="p-6 space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary">Get Your Free CNG Guide</h3>
                  <p className="text-muted-foreground">Start saving on fuel today</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  
                  <Input
                    placeholder="Your phone number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  
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
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Download Free Guide Now
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Your information is 100% secure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};