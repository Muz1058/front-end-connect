import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
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
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-sidebar-background border-r border-sidebar-border">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div className="space-y-1">
            {mainLinks.map((link) => (
              <Link key={link.path} to={link.path}>
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

          <Separator className="bg-sidebar-border" />

          {/* Library */}
          <div className="space-y-1">
            <h3 className="px-3 py-2 text-sm font-semibold text-sidebar-foreground/70">
              Library
            </h3>
            {libraryLinks.map((link) => (
              <Link key={link.path} to={link.path}>
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

          <Separator className="bg-sidebar-border" />

          {/* Settings */}
          <div className="space-y-1">
            {settingsLinks.map((link) => (
              <Link key={link.path} to={link.path}>
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
    </aside>
  );
};

export default Sidebar;