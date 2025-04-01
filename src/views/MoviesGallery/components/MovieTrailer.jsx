import styles from '../MoviesGallery.module.css'
import { useEffect, useState } from 'react'

const MovieTrailer = ({ trailerUrl }) => {
  const [videoInfo, setVideoInfo] = useState({
    id: null,
    platform: null,
  })

  useEffect(() => {
    const extractVideoInfo = url => {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i

      const vimeoRegex =
        /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/i

      const youtubeMatch = url.match(youtubeRegex)
      if (youtubeMatch) {
        return { id: youtubeMatch[1], platform: 'youtube' }
      }

      const vimeoMatch = url.match(vimeoRegex)
      if (vimeoMatch) {
        return { id: vimeoMatch[1], platform: 'vimeo' }
      }

      return { id: null, platform: null }
    }

    const info = extractVideoInfo(trailerUrl)
    setVideoInfo(info)
  }, [trailerUrl])

  if (!videoInfo.id) return <p>Loading trailer...</p>

  return (
    <div className={styles.layout__trailer}>
      {videoInfo.platform === 'youtube' ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoInfo.id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
      ) : (
        <iframe
          src={`https://player.vimeo.com/video/${videoInfo.id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video Player"
        ></iframe>
      )}
    </div>
  )
}

export default MovieTrailer
