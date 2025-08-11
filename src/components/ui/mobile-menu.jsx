import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  TrendingUp, 
  Music, 
  Film, 
  Gamepad2, 
  Newspaper, 
  Trophy, 
  Lightbulb,
  History,
  Clock,
  ThumbsUp,
  PlaySquare,
  Settings,
  HelpCircle,
  Flag
} from "lucide-react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { icon: Home, label: "Home", path: "/" },
    { icon: TrendingUp, label: "Trending", path: "/trending" },
    { icon: Music, label: "Music", path: "/music" },
    { icon: Film, label: "Movies", path: "/movies" },
    { icon: Gamepad2, label: "Gaming", path: "/gaming" },
    { icon: Newspaper, label: "News", path: "/news" },
    { icon: Trophy, label: "Sports", path: "/sports" },
    { icon: Lightbulb, label: "Learning", path: "/learning" }
  ];

  const libraryLinks = [
    { icon: History, label: "History", path: "/history" },
    { icon: Clock, label: "Watch Later", path: "/watch-later" },
    { icon: ThumbsUp, label: "Liked Videos", path: "/liked" },
    { icon: PlaySquare, label: "Playlists", path: "/playlists" }
  ];

  const settingsLinks = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help", path: "/help" },
    { icon: Flag, label: "Send Feedback", path: "/feedback" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <ScrollArea className="h-full">
          <div className="p-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="brand-gradient w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MyTube
              </span>
            </div>

            {/* Main Navigation */}
            <div className="space-y-1">
              {mainLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
                  <Button
                    variant={isActive(link.path) ? "brand" : "ghost"}
                    className="w-full justify-start gap-3 h-10"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>

            <Separator />

            {/* Library */}
            <div className="space-y-1">
              <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                Library
              </h3>
              {libraryLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
                  <Button
                    variant={isActive(link.path) ? "brand" : "ghost"}
                    className="w-full justify-start gap-3 h-10"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>

            <Separator />

            {/* Settings */}
            <div className="space-y-1">
              {settingsLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
                  <Button
                    variant={isActive(link.path) ? "brand" : "ghost"}
                    className="w-full justify-start gap-3 h-10"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;