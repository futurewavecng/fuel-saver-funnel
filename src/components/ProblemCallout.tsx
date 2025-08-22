export const ProblemCallout = () => {
  return (
    <section className="py-16 bg-destructive">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-destructive-foreground mb-6">
            The Fuel Crisis Is Real
          </h2>
          <p className="text-lg md:text-xl text-destructive-foreground/90 leading-relaxed">
            Petrol is now over <span className="font-bold text-accent">₦900/L</span> and still rising. 
            A 200km trip can cost you over <span className="font-bold text-accent">₦30,000</span>. 
            Your car suffers too — carbon buildup, reduced engine life. 
            And worst of all? <span className="font-bold">You keep paying more every week.</span>
          </p>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-destructive-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">₦900+</div>
              <div className="text-destructive-foreground/80">Per Litre</div>
            </div>
            <div className="bg-destructive-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">₦60,000+</div>
              <div className="text-destructive-foreground/80">Monthly Fuel Cost</div>
            </div>
            <div className="bg-destructive-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">50%</div>
              <div className="text-destructive-foreground/80">Engine Life Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};