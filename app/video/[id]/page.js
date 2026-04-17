
import SimilarVideos from '@/app/components/SimilarVideos'
import VideoPlayer from '@/app/components/VideoPlayerSection'
import { getSimilarVideos, getvideobyid } from '@/lib/queries/videos'
import React from 'react'

export default async function page({params}) {
    const {id} = await params
   
    const video =await getvideobyid(id)
    const similarvideo =await getSimilarVideos(id,video.categories)
   
  return (
    <div  className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      <div className="lg:col-span-8">
          <VideoPlayer video={video} />
        </div>
        <div className="lg:col-span-4"><SimilarVideos video={similarvideo}></SimilarVideos></div>
      
    </div>
    </div>
  )
}
