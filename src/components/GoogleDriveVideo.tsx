import { useState } from 'react';

interface GoogleDriveVideoProps {
  fileId: string;
  title?: string;
}

export const GoogleDriveVideo = ({ fileId, title = "Video" }: GoogleDriveVideoProps) => {
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
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title}
        frameBorder="0"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        className="w-full h-full"
      />
    </div>
  );
};