import React from 'react'
import SimilarVideoCard from './SimilarVideoCard'

export default function SimilarVideos({video}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-300 mb-2">
        Similar Videos
      </h3>

      {video.map((video) => (
        <SimilarVideoCard key={video._id} video={video} />
      ))}
    </div>
  )
}
