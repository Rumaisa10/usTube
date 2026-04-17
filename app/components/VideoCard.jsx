import Link from "next/link"
import Image from "next/image"
export default function VideoCard({ video }) {
  return (
    <Link href={`/video/${video._id}`}>
      <div className="cursor-pointer rounded-xl overflow-hidden bg-cyan-600 hover:bg-[#1a1a1a] transition">

        {/* Thumbnail */}
        <div className="aspect-video bg-cyan-600">
          <Image
            src={video.thumbnailURL || "https://via.placeholder.com/640x360"}
            alt={video.videoTitle}
           
            height={1000}
            width={900}
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-3">

          <h3 className="text-sm font-medium line-clamp-2">
            {video.videoTitle}
          </h3>

          {/* <p className="text-xs text-gray-400 mt-1">
            {video.views || "0 views"} • {video.createdAt || "recently"}
          </p> */}

        </div>
      </div>
    </Link>
  )
}