import Link from "next/link"
import Image from "next/image"
export default function SimilarVideoCard({ video }) {
  return (
    <Link href={`/video/${video._id}`}>
      <div className="flex gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg">

        {/* Thumbnail */}
        <Image
          src={video.thumbnailURL}
          
          alt={video.videoTitle}
         height={100}
            width={90}
            className="object-cover"
        />

        {/* Info */}
        <div className="flex-1">
          <h4 className="text-sm font-medium line-clamp-2">
            {video.videoTitle}
          </h4>

          <p className="text-xs text-gray-400 mt-1">
            {video.channelName}
          </p>

          <p className="text-xs text-gray-500">
            {video.views}
          </p>
        </div>

      </div>
    </Link>
  )
}