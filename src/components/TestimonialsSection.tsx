import { Card, CardContent } from "@/components/ui/card";
import { GoogleDriveVideo } from './GoogleDriveVideo';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Adebayo O.",
      location: "Lagos",
      vehicle: "Toyota Camry 2018",
      savings: "₦35,000/month",
      quote: "I was spending ₦80,000 monthly on fuel. Now I spend ₦32,000 with CNG. Futurewave made the conversion so easy!",
      rating: 5
    },
    {
      name: "Sarah M.",
      location: "Abuja", 
      vehicle: "Honda Accord 2020",
      savings: "₦28,000/month",
      quote: "Best decision I ever made. My car runs smoother and I save enough to pay my rent!",
      rating: 5
    },
    {
      name: "Chinedu E.",
      location: "Port Harcourt",
      vehicle: "Lexus RX350",
      savings: "₁42,000/month",
      quote: "As a taxi driver, fuel was killing my business. CNG saved my livelihood. Thank you Futurewave!",
      rating: 5
    },
    {
      name: "Mrs. Johnson",
      location: "Ibadan",
      vehicle: "Honda Pilot 2019", 
      savings: "₦38,000/month",
      quote: "I was skeptical at first, but the conversion was professional and my savings are real. Highly recommended!",
      rating: 5
    },
    {
      name: "Ahmed K.",
      location: "Kano",
      vehicle: "Toyota Hiace Bus",
      savings: "₦120,000/month",
      quote: "My transport business is now profitable again. CNG conversion was the game-changer I needed.",
      rating: 5
    },
    {
      name: "Grace A.",
      location: "Lagos",
      vehicle: "Nissan Altima 2017",
      savings: "₦31,000/month", 
      quote: "The financing option made it affordable. Now I save more than my monthly payment. Smart investment!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real People, Real Savings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over <span className="font-bold text-primary">200 successful conversions</span> and counting. 
            Here's what our customers say about their CNG experience:
          </p>
          
          <div className="mt-8 bg-card rounded-lg shadow-soft p-8 max-w-2xl mx-auto">
            <GoogleDriveVideo 
              fileId="1HPqH51ktO6bVHL07q6TXnVBslrYwxswB" 
              title="Real Customer Stories - CNG Conversion Success"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft border-0 hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.vehicle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-success">{testimonial.savings}</div>
                    <div className="text-xs text-muted-foreground">Monthly Savings</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-savings text-white rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">Over 200 Conversions</h3>
            <p className="text-white/90 mb-4">Join the growing community of smart Nigerians saving on fuel</p>
            <div className="text-3xl font-bold">₦15.2M+</div>
            <div className="text-white/80 text-sm">Total Customer Savings This Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};