import React from 'react'
import HorizontalFeedMovieCard from '../components/HorizontalFeedMovieCard'

export default function HorizontalFeed({movies}) {

  if(movies.error) return (<p> {movies.error.status_message}</p>)
  if(!movies.data.length || (!movies.data.length && movies.isLoading)) return (<p> loading movies...</p>)

  return (
    <div style={HorizontalFeedStyles}>
      {
        movies.data.map( movie => {
          return  <HorizontalFeedMovieCard movie={movie} key={movie.id}/>
        })
      }
    </div>
  )
}

const HorizontalFeedStyles = {
  scrollSnapType: 'x mandatory',
  overflowX: 'scroll',
  display: 'flex',
  padding: '15px 0'
}