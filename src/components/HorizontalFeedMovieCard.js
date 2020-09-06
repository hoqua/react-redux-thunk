import React from 'react'
import {IMAGE_HOST} from '../utils/envLike'
import {Link} from 'react-router-dom'

const IMAGE_SETTINGS = 'w342'

export default function HorizontalFeedMovieCard({movie}) {
  return (
    <Link to={`/${movie.id}`}>
      <img
        className='scale-hover'
        style={HorizontalFeedMovieCardStyles}
        src={`${IMAGE_HOST}/${IMAGE_SETTINGS}/${movie.poster_path}`}
        alt={`Learn more about film ${movie.original_title}`}
      />
    </Link>

  )
}

const HorizontalFeedMovieCardStyles = {
  scrollSnapAlign: 'center',
  margin: '0 15px',
  cursor: 'pointer'
}
