import { getvideos } from "@/lib/queries/videos";
import VideoGrid from "./components/VideoGrid";
import VideoInfo from "./components/VideoInfo";
import VideoPlayer from "./components/VideoPlayerSection";


export default async function VideoPage() {
  const videos = await getvideos()
  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          <section className="lg:col-span-8">
           {/* <VideoPlayer></VideoPlayer> */}
           <VideoGrid videos={videos}></VideoGrid>
           
          </section>

        </div>

      </div>
    </main>
  )
}