import React, {useEffect} from 'react'
import HorizontalFeed from '../components/HorizontalFeed'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovies} from '../store/actions/movieActions'

export default function Feed() {
  const dispatch = useDispatch()
  const popularMovies = useSelector(state => state.movies.popularMovies)
  const topRatedMovies = useSelector(state => state.movies.topRatedMovies)
  const upcomingMovies = useSelector(state => state.movies.upcomingMovies)

  useEffect(()=> {
    dispatch(fetchMovies())
  },[])

  return (
    <React.Fragment>
      <section>
        <h2>Popular movies</h2>
        <HorizontalFeed movies={popularMovies}/>
      </section>

      <section>
        <h2>Top rated movies</h2>
        <HorizontalFeed movies={topRatedMovies}/>
      </section>

      <section>
        <h2>Upcoming movies</h2>
        <HorizontalFeed movies={upcomingMovies}/>
      </section>
    </React.Fragment>
  )
}
