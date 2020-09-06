import {
  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_SUCCESS,
  FETCH_UPCOMING_MOVIES_FAILURE,

  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,

  FETCH_TOP_RATED_MOVIES_REQUEST,
  FETCH_TOP_RATED_MOVIES_SUCCESS,
  FETCH_TOP_RATED_MOVIES_FAILURE,

  FETCH_CURRENT_MOVIE_REQUEST,
  FETCH_CURRENT_MOVIE_FAILURE,
  FETCH_CURRENT_MOVIE_SUCCESS,
} from '../types/moviesTypes'
import {fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchMovie} from '../../utils/api'
import {eitherSucceeded} from '../../utils/helpers'

export const fetchCurrentMovie = (movieId) =>{
  return async (dispatch) => {
    dispatch(fetchCurrentMovieRequest())
    try {
      const currentMovie = await fetchMovie(movieId)
      dispatch(fetchCurrentMovieSuccess(currentMovie))
    }catch (error) {
      dispatch(fetchCurrentMovieFailure(error))
    }
  }
}

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchPopularMoviesRequest())
    dispatch(fetchTopRatedMoviesRequest())
    dispatch(fetchUpcomingMoviesRequest())

    const [
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ] = await Promise.allSettled([
      fetchPopularMovies(),
      fetchTopRatedMovies(),
      fetchUpcomingMovies()
    ])

    eitherSucceeded(popularMovies,
      () => dispatch(fetchPopularMoviesSuccess(popularMovies.value.results)),
      () => dispatch(fetchPopularMoviesFailure(popularMovies.value))
    )
    eitherSucceeded(topRatedMovies,
      () => dispatch(fetchTopRatedMoviesSuccess(topRatedMovies.value.results)),
      () => dispatch(fetchTopRatedMoviesFailure(topRatedMovies.value))
    )
    eitherSucceeded(upcomingMovies,
      () => dispatch(fetchUpcomingMoviesSuccess(upcomingMovies.value.results)),
      () => dispatch(fetchUpcomingMoviesFailure(upcomingMovies.value))
    )
  }
}

export const fetchPopularMoviesRequest = () => {
  return {
    type: FETCH_POPULAR_MOVIES_REQUEST
  }
}

export const fetchPopularMoviesSuccess = movies => {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchPopularMoviesFailure = error => {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    payload: error
  }
}

export const fetchTopRatedMoviesRequest = () => {
  return {
    type: FETCH_TOP_RATED_MOVIES_REQUEST
  }
}

export const fetchTopRatedMoviesSuccess = movies => {
  return {
    type: FETCH_TOP_RATED_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchTopRatedMoviesFailure = error => {
  return {
    type: FETCH_TOP_RATED_MOVIES_FAILURE,
    payload: error
  }
}

export const fetchUpcomingMoviesRequest = () => {
  return {
    type: FETCH_UPCOMING_MOVIES_REQUEST
  }
}

export const fetchUpcomingMoviesSuccess = movies => {
  return {
    type: FETCH_UPCOMING_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchUpcomingMoviesFailure = error => {
  return {
    type: FETCH_UPCOMING_MOVIES_FAILURE,
    payload: error
  }
}

export const fetchCurrentMovieRequest = () => {
  return {
    type: FETCH_CURRENT_MOVIE_REQUEST
  }
}

export const fetchCurrentMovieSuccess = movie => {
  return {
    type: FETCH_CURRENT_MOVIE_SUCCESS,
    payload: movie
  }
}

export const fetchCurrentMovieFailure = error => {
  return {
    type: FETCH_CURRENT_MOVIE_FAILURE,
    payload: error
  }
}