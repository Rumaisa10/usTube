import VideoCard from "./VideoCard"
export default async function VideoGrid({videos}) {
   
  return (
   <div className="max-w-7xl mx-auto px-4 py-6">
  <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
    {videos.map((video) => (
      <VideoCard key={video._id} video={video} />
    ))}
  </div>
</div>
  )
}