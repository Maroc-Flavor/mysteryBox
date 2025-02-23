interface LiveContainerProps {
  roomId: string;
}

export function LiveContainer({ roomId }: LiveContainerProps) {
  return (
    <div className="live-container w-full h-full">
      <iframe
        src={`https://www.tiktok.com/embed/live/${roomId}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          minHeight: '600px'
        }}
      />
      <div className="absolute top-4 right-4 z-30">
        <div className="px-4 py-2 bg-red-500 text-white rounded-lg animate-pulse">
          LIVE
        </div>
      </div>
    </div>
  );
} 