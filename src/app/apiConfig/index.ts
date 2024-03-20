const API_BASE_URL = "https://api.themoviedb.org/3";

export const MOVIES_LIST_URL = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
export const MOVIE_INFO_URL = `${API_BASE_URL}/movie/`;
export const MOVIE_SEARCH_URL = `${API_BASE_URL}/search/movie`;
