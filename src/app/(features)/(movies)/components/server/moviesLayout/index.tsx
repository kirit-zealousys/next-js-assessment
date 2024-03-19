/**
 *
 * MoviesLayout
 *
 */

import Movie from "../../client";
import Search from "../../client/search";

import { MovieProps } from "../../../types";
import { MOVIES_LIST_URL } from "@/app/apiConfig";

async function getMovies() {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      `Authorization`,
      `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    );

    const response = await fetch(MOVIES_LIST_URL, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const movies = await response.json();
    return movies.results;
  } catch (error) {
    console.error(error);
  }
}

async function MoviesLayout() {
  const movies = await getMovies();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      <div className="container mx-auto px-4 py-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie: MovieProps) => (
            <Movie {...movie} key={movie.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MoviesLayout;
