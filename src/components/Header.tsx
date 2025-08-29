import { Phone, Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            StayCall
          </h1>
          <p className="text-xs text-muted-foreground">Find Your Perfect Stay</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="call" size="sm" className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Us</span>
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;