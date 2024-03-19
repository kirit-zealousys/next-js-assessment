"use client";

import { useParams } from "next/navigation";
import MovieInfo from "./components/server/MovieInfo";

function MovieInfoPage() {
  const params = useParams();
  return <MovieInfo movieId={params.movieId} />;
}

export default MovieInfoPage;
