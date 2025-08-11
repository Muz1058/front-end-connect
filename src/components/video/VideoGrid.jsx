import VideoCard from "./VideoCard";

// Mock data for demonstration
const mockVideos = [
  {
    id: "1",
    title: "Building a Full-Stack Video Platform with Node.js and React",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    duration: "12:34",
    views: 125000,
    createdAt: "2024-01-15T10:30:00Z",
    channel: {
      name: "Tech Academy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "2",
    title: "Modern React Hooks: useEffect, useState, and Custom Hooks Explained",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    duration: "18:45",
    views: 89000,
    createdAt: "2024-01-14T15:20:00Z",
    channel: {
      name: "React Mastery",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Which Layout Method",
    thumbnail: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&h=450&fit=crop",
    duration: "8:22",
    views: 45000,
    createdAt: "2024-01-13T09:15:00Z",
    channel: {
      name: "CSS Ninja",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "4",
    title: "JavaScript ES6+ Features Every Developer Should Know",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    duration: "15:30",
    views: 203000,
    createdAt: "2024-01-12T14:45:00Z",
    channel: {
      name: "JS Master",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "5",
    title: "TypeScript Fundamentals: From Beginner to Advanced",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    duration: "25:18",
    views: 156000,
    createdAt: "2024-01-11T11:30:00Z",
    channel: {
      name: "TypeScript Pro",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "6",
    title: "API Design Best Practices with Express.js and MongoDB",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    duration: "22:12",
    views: 78000,
    createdAt: "2024-01-10T16:20:00Z",
    channel: {
      name: "Backend Guru",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  }
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;