import { searchVideos } from "@/lib/queries/videos"
import VideoGrid from "../components/VideoGrid"

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || ""

  const videos = await searchVideos(query)

  return (
    <div className="p-6 text-white">

      <h1 className="text-xl font-bold">
        Search Results
      </h1>

      <p className="text-gray-400 mt-2">
        You searched for: {query}
      </p>

      <VideoGrid videos={videos} />

    </div>
  )
}