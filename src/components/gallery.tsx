import { useFetchPhotos, type UseFetchPhotosResult } from "../hooks/useFetchPhotos"
import { ImageCard } from "./image-card"

export const Gallery = ({limit}: {
  limit: number;
}) => {
  const apiUrl = import.meta.env.VITE_PICSUM_API_URL
  const result: UseFetchPhotosResult = useFetchPhotos({ apiUrl, limit })
  
  return <div>
    {/* Cols 4 (desktop), 2 tablets, 1 mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        result.photos.map((photo)=> (
          <ImageCard
            key={photo.id}
            authorName={photo.author}
            imgSource={photo.download_url}
            height={photo.height}
            width={photo.width}
          />
        ))
      }
    </div>
  </div>
}