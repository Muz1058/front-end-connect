import Layout from "@/components/layout/Layout";
import VideoGrid from "@/components/video/VideoGrid";
import { Button } from "@/components/ui/button";
import { TrendingUp, Flame, Music, Film } from "lucide-react";

const Index = () => {
  const categories = [
    { icon: TrendingUp, label: "Trending", active: true },
    { icon: Flame, label: "Popular" },
    { icon: Music, label: "Music" },
    { icon: Film, label: "Movies" }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-4 md:p-8 lg:p-12">
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              Welcome to <span className="brand-gradient bg-clip-text text-transparent">MyTube</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto md:mx-0">
              Discover amazing videos, connect with creators, and share your passion with the world.
            </p>
            <Button variant="brand" size="lg" className="gap-2 h-10 md:h-12">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
              Explore Trending
            </Button>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 md:w-32 md:h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 md:w-24 md:h-24 bg-accent/10 rounded-full blur-2xl" />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 px-4 md:px-0">
          {categories.map((category) => (
            <Button
              key={category.label}
              variant={category.active ? "brand" : "secondary"}
              size="sm"
              className="gap-1 md:gap-2 whitespace-nowrap h-8 md:h-9 px-3 md:px-4 text-xs md:text-sm"
            >
              <category.icon className="h-3 w-3 md:h-4 md:w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="space-y-4 md:space-y-6 px-4 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold">Latest Videos</h2>
          <VideoGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
