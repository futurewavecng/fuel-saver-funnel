import { useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
}

export const YouTubeVideo = ({ videoId, title = "YouTube Video" }: YouTubeVideoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center">
            <div className="text-4xl mb-2">🎥</div>
            <p className="text-muted-foreground">Loading video...</p>
          </div>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        className="w-full h-full"
      />
    </div>
  );
};