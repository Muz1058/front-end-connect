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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 md:p-12">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to <span className="brand-gradient bg-clip-text text-transparent">MyTube</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
              Discover amazing videos, connect with creators, and share your passion with the world.
            </p>
            <Button variant="brand" size="lg" className="gap-2">
              <TrendingUp className="h-5 w-5" />
              Explore Trending
            </Button>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.label}
              variant={category.active ? "brand" : "secondary"}
              size="sm"
              className="gap-2 whitespace-nowrap"
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Latest Videos</h2>
          <VideoGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
