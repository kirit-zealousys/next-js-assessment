/**
 *
 * MoviesLayout
 *
 */

import Movie from "../../client";
import Search from "../../client/search";

import { MovieProps } from "../../../types";
import { MOVIES_LIST_URL, MOVIE_SEARCH_URL } from "@/app/apiConfig";

async function getMovies(search: string) {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      `Authorization`,
      `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    );
    let API_URL = MOVIES_LIST_URL;
    if (search) API_URL = `${MOVIE_SEARCH_URL}?query=${search}`;

    console.log("API CALL URL: " + API_URL);

    const response = await fetch(API_URL, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const movies = await response.json();
    console.log("movies----", movies);
    return movies.results;
  } catch (error) {
    console.error(error);
  }
}

async function MoviesLayout({ search }: string) {
  const movies = await getMovies(search);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      <div className="container mx-auto px-4 py-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies &&
            movies.map((movie: MovieProps) => (
              <Movie {...movie} key={movie.id} />
            ))}
          {!movies && "No movies found"}
        </div>
      </div>
    </main>
  );
}

export default MoviesLayout;
