import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Download, 
  MoreHorizontal,
  Bell,
  Eye,
  Calendar
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const VideoPlayer = () => {
  // Mock data
  const video = {
    id: "1",
    title: "Building a Full-Stack Video Platform with Node.js and React",
    description: "In this comprehensive tutorial, we'll build a complete video sharing platform from scratch using modern web technologies. We'll cover authentication, file uploads, video streaming, and much more!",
    views: 125000,
    likes: 3200,
    dislikes: 45,
    createdAt: "2024-01-15T10:30:00Z",
    channel: {
      name: "Tech Academy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      subscribers: 245000,
      isSubscribed: false
    }
  };

  const formatViews = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const timeAgo = formatDistanceToNow(new Date(video.createdAt), { addSuffix: true });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-white/80">Video Player Placeholder</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Info */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{video.title}</h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {formatViews(video.views)} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {timeAgo}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    {formatNumber(video.likes)}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ThumbsDown className="h-4 w-4" />
                    {formatNumber(video.dislikes)}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Channel Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={video.channel.avatar} alt={video.channel.name} />
                  <AvatarFallback>{video.channel.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{video.channel.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {formatViews(video.channel.subscribers)} subscribers
                  </p>
                </div>
              </div>
              <Button 
                variant={video.channel.isSubscribed ? "outline" : "brand"} 
                className="gap-2"
              >
                <Bell className="h-4 w-4" />
                {video.channel.isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </div>

            {/* Description */}
            <Card className="bg-secondary/50">
              <CardContent className="p-4">
                <p className="text-sm leading-relaxed">{video.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Up Next</h3>
            {/* Related videos would go here */}
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="cursor-pointer hover:bg-card/80 transition-colors">
                  <CardContent className="p-3">
                    <div className="flex gap-3">
                      <div className="w-32 h-20 bg-muted rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">
                          Related Video Title {i}
                        </h4>
                        <p className="text-xs text-muted-foreground">Channel Name</p>
                        <p className="text-xs text-muted-foreground">50K views • 2 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayer;