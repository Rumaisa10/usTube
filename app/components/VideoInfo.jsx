import VideoActions from "./VideoAction"

export default function VideoInfo({video}) {
  return (
    <div className="flex justify-center">
    <div className="mt-4">

      {/* Title */}
      <h1 className="text-lg sm:text-xl font-medium leading-snug">
        {video.videoTitle}
      </h1>

      {/* Meta + Actions */}
      <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* Meta */}
        <div className="text-sm text-gray-400">
          <span>{video.views}</span>
          <span className="mx-1">•</span>
          <span>{video.publishedDate}</span>
        </div>

        <VideoActions video={video}/>
      </div>
    </div>
    </div>
  )
}