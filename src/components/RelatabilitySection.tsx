import { YouTubeVideo } from './YouTubeVideo';

export const RelatabilitySection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            You're Not Alone
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            We've all been there. Spending over <span className="font-bold text-foreground">₦60k monthly</span> just on fuel. 
            Watching our dashboard mock us even after buying <span className="font-bold text-foreground">₦28k petrol</span>.
          </p>
          
          <div className="bg-card rounded-lg shadow-soft p-8 mb-8">
            <YouTubeVideo 
              videoId="b9HqHRRbo-U" 
              title="Customer Fuel Frustration Story"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h3 className="font-bold text-lg mb-3 text-foreground">Before CNG Conversion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ₦60,000+ monthly fuel costs</li>
                <li>• Constant worry about fuel prices</li>
                <li>• Long queues at fuel stations</li>
                <li>• Engine damage from poor fuel quality</li>
                <li>• Unpredictable transportation budget</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft border-l-4 border-success">
              <h3 className="font-bold text-lg mb-3 text-foreground">After CNG Conversion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ₦25,000 monthly fuel costs (60% savings!)</li>
                <li>• Peace of mind with stable prices</li>
                <li>• Quick refills at CNG stations</li>
                <li>• Cleaner engine, longer lifespan</li>
                <li>• Predictable, manageable expenses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};