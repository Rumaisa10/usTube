import VideoInfo from "./VideoInfo";

function getYouTubeId(url) {
  const match = url?.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}
export default function VideoPlayer({ video }) {
  return (
    <>
    <div className="flex justify-center pt-6">
     <div className="w-full max-w-4xl">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
        <iframe
          className="w-full h-full"
          title="Video player"
          src={`https://www.youtube.com/embed/${getYouTubeId(video.videoURL)}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      </div>
      </div>
      <VideoInfo video={video}></VideoInfo>
    </>
  );
}
