import React, {useRef, useEffect} from 'react'
import {IMAGE_HOST} from '../utils/envLike'
import {Link} from 'react-router-dom'
import placeholder from '../assets/placeholder-image.png'

const IMAGE_SETTINGS = 'w342'

export default function HorizontalFeedMovieCard({movie}) {
  const imgRef = useRef(null)
  const posterPath = `${IMAGE_HOST}/${IMAGE_SETTINGS}/${movie.poster_path}`

  useEffect(() => {
    if (IntersectionObserver) {
      let observer = new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              imgRef.current.setAttribute('src', posterPath)
              imgRef.current.style.opacity = 1
              observer = observer.disconnect()
            }
          })
      )
      observer.observe(imgRef.current)

      return () => (observer = observer && observer.disconnect())
    } else {
      imgRef.current.setAttribute('src', posterPath)
    }
  }, [movie.id])

  return (
    <Link to={`/${movie.id}`}>
      <img
        ref={imgRef}
        className='transition shadow-drop'
        style={HorizontalFeedMovieCardStyles}
        src={placeholder} // necessary to prevent glitching while throttling x4 and 3g mode
        alt={`Learn more about film ${movie.title}`}
      />
    </Link>
  )
}

const HorizontalFeedMovieCardStyles = {
  scrollSnapAlign: 'center',
  height: '513px',
  width: '342px',
  margin: '0 15px',
  cursor: 'pointer',
  opacity: '0',
}
