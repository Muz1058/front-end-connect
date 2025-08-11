import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "@/components/ui/mobile-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <MobileMenu />
          <Link to="/" className="flex items-center gap-2">
            <div className="brand-gradient w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
              M
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MyTube
            </span>
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-2 md:mx-8">
          <div className="relative">
            <Input
              placeholder="Search videos..."
              className="pl-12 h-10 md:h-12 bg-card border-border focus:ring-2 focus:ring-primary/20 rounded-full text-sm md:text-base"
            />
            <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <Link to="/upload">
            <Button variant="brand" size="sm" className="gap-2 h-8 md:h-9 px-2 md:px-4">
              <Upload className="h-4 w-4" />
              <span className="hidden sm:inline">Upload</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
            <Bell className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
            <User className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;