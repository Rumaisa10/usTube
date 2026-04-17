export default function VideoActions({video}) {
  return (
    <div className="flex items-center gap-2">

      <div className="inline-flex items-center rounded-full border border-[#303030] overflow-hidden bg-[#1f1f1f]">

        {/* Like */}
        <button
          className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
          type="button"
          aria-label="Like"
        >
          <svg
            className="w-5 h-5 text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.68 9H14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
            />
          </svg>

          <span className="text-sm font-medium text-[#e5e5e5]">
           {video.likes}
          </span>
        </button>

        <div className="w-px h-8 bg-[#303030]" />

        {/* Dislike */}
        <button
          className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
          type="button"
          aria-label="Dislike"
        >
          <svg
            className="w-5 h-5 text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7L2.34 12a2 2 0 0 0 1.98 3H10z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
            />
          
        </svg>

          <span className="text-sm font-medium text-[#e5e5e5]">
            {video.dislikes}
          </span>
        </button>

      </div>
    </div>
  )
}