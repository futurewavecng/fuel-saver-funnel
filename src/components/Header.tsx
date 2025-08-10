import futurewave from "@/assets/futurewave-logo.png";

export const Header = () => {
  return (
    <header className="w-full py-4 px-4 bg-background border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center">
          <img 
            src={futurewave} 
            alt="Futurewave Energy Solutions" 
            className="h-8 md:h-12 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};