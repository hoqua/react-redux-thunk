import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_SUCCESS,

  FETCH_TOP_RATED_MOVIES_REQUEST,
  FETCH_TOP_RATED_MOVIES_FAILURE,
  FETCH_TOP_RATED_MOVIES_SUCCESS,

  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_FAILURE,
  FETCH_UPCOMING_MOVIES_SUCCESS,

  FETCH_CURRENT_MOVIE_REQUEST,
  FETCH_CURRENT_MOVIE_FAILURE,
  FETCH_CURRENT_MOVIE_SUCCESS
} from '../types/moviesTypes'

const initialState = {
  currentMovie: {
    isLoading: false,
    data: null,
    error: null
  },
  popularMovies:{
    isLoading: false,
    data: [],
    error: null
  },
  topRatedMovies:{
    isLoading: false,
    data: [],
    error: null
  },
  upcomingMovies:{
    isLoading: false,
    data: [],
    error: null
  },
}

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          isLoading: true
        }
      }
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: {
          isLoading: false,
          data: action.payload,
          error: null
        }
      }
    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        popularMovies: {
          isLoading: false,
          data: [],
          error: action.payload
        }
      }

    case FETCH_TOP_RATED_MOVIES_REQUEST:
      return {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          isLoading: true
        }
      }
    case FETCH_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: {
          isLoading: false,
          data: action.payload,
          error: null
        }
      }
    case FETCH_TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        topRatedMovies: {
          isLoading: false,
          data: [],
          error: action.payload
        }
      }

    case FETCH_UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        upcomingMovies: {
          ...state.upcomingMovies,
          isLoading: true
        }
      }
    case FETCH_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: {
          isLoading: false,
          data: action.payload,
          error: null
        }
      }
    case FETCH_UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        upcomingMovies: {
          isLoading: false,
          data: [],
          error: action.payload
        }
      }

    case FETCH_CURRENT_MOVIE_REQUEST:
      return {
        ...state,
        currentMovie: {
          ...state.currentMovie,
          isLoading: true
        }
      }
    case FETCH_CURRENT_MOVIE_SUCCESS:
      return {
        ...state,
        currentMovie: {
          isLoading: false,
          data: action.payload,
          error: null
        }
      }
    case FETCH_CURRENT_MOVIE_FAILURE:
      return {
        ...state,
        currentMovie: {
          isLoading: false,
          data: null,
          error: action.payload
        }
      }

    default:
      return state
  }
}