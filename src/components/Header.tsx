import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="w-full py-4 px-4 bg-background border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-start">
          <Logo />
        </div>
      </div>
    </header>
  );
};