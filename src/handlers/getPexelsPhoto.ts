import { createClient, type ErrorResponse, type Photo, type PhotosWithTotalResults } from 'pexels'

const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const client = createClient(PEXELS_KEY)

export interface PhotoSummary {
  src: string
  photographer: {
    name: string
    url: string
  }
  alt?: string
}
export type ImageResponse = PhotoSummary | ErrorResponse

const parsePhotoResponse = (photo: Photo): PhotoSummary => ({
  photographer: {
    url: photo.photographer_url,
    name: photo.photographer,
  },
  src: photo.src.original,
  alt: photo.alt ?? undefined,
})

export default async function fetchPhotoData(nounOfTheDay: string): Promise<ImageResponse> {
  const response = (await client.photos.search({
    query: nounOfTheDay,
    per_page: 1,
    page: 1,
    orientation: 'square',
  })) as PhotosWithTotalResults
  if (response.total_results > 0) {
    return parsePhotoResponse(response.photos[0])
  } else return { error: 'no photos found' }
}
