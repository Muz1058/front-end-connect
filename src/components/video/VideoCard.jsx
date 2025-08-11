import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVertical, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const VideoCard = ({ id, title, thumbnail, duration, views, createdAt, channel }) => {
  const formatViews = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  return (
    <Link to={`/watch/${id}`}>
      <Card className="group cursor-pointer overflow-hidden bg-card border-border smooth-transition hover:scale-105 hover:glow-effect">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Duration overlay */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex gap-3">
          {/* Channel Avatar */}
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarImage src={channel.avatar} alt={channel.name} />
            <AvatarFallback>{channel.name[0]}</AvatarFallback>
          </Avatar>

          {/* Video Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground line-clamp-2 leading-tight mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">{channel.name}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{formatViews(views)} views</span>
              <span>•</span>
              <span>{timeAgo}</span>
            </div>
          </div>

          {/* More Options */}
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
    </Link>
  );
};

export default VideoCard;