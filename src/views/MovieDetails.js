import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentMovie} from '../store/actions/movieActions'
import {useParams} from 'react-router-dom'

export default function MovieDetails() {
  const dispatch = useDispatch()
  const currentMovie = useSelector(state => state.movies.currentMovie)
  const {movieId} = useParams()

  useEffect(()=> {
    if(currentMovie.data && currentMovie.data.id === Number(movieId)) return

    dispatch(fetchCurrentMovie(movieId))
  },[])

  if(currentMovie.error) return (<p> {currentMovie.error.status_message}</p>)
  if(!currentMovie.data || currentMovie.isLoading) return (<p> loading movie description...</p>)

  return (
    <section>
      <Link to='/'><b>&#8249; Back</b></Link>
      <h2>Title: {currentMovie.data.title}</h2>
      <p>Description: {currentMovie.data.overview}</p>
      <p>Date: {currentMovie.data.release_date}</p>
      <p>Genre: {currentMovie.data.genres[0].name}</p>
      <p>Rating: {currentMovie.data.vote_average}</p>
      <p>Duration: {currentMovie.data.runtime} min</p>
    </section>
  )
}
