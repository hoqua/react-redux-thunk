import {API_HOST, API_VERSION, API_KEY, API_PREFIX} from './envLike'

async function api(requestRoute){
  const requestDestination = `${API_HOST}/${API_VERSION}/${API_PREFIX}/${requestRoute}?api_key=${API_KEY}`
  return (await fetch(requestDestination)).json()
}

export function fetchPopularMovies() {
  return api('popular')
}

export function fetchTopRatedMovies() {
  return api('top_rated')
}

export function fetchUpcomingMovies() {
  return api('upcoming')
}

export function fetchMovie(movieId) {
  return api(movieId)
}