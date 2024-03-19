import Image from "next/image";
import BackButton from "../client/BackButton";
import { MOVIE_INFO_URL } from "@/app/apiConfig";

async function getMovieInfo(movieId: string) {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      `Authorization`,
      `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ZlZDVjZmRjNDcxYTMwZWI4ZTkxYTBiODA5NzRhZSIsInN1YiI6IjY1ZjgxMTAwZTE5NGIwMDE2M2JlZmIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0z5lCexBUA9-n450QNqEjpkGzEKMP1XUC-5McD5kwI`
    );
    console.log("MOVIE_INFO_URL + `${movieId}`", MOVIE_INFO_URL + `${movieId}`);
    const response = await fetch(MOVIE_INFO_URL + `${movieId}`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const movies = await response.json();
    return movies ?? [];
  } catch (error) {
    //
    console.error(error);
  }
}

const getPosterURL = (poster_path: string) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
};

async function MovieInfo({movieId}: any) {
  const info = await getMovieInfo(movieId);
  console.log("--getMovieInfo", movieId, info);
  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      {info && (
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Image
              src={getPosterURL(info.poster_path)}
              alt="Movie Poster"
              className="w-full h-auto rounded-lg"
              width={400}
              height={300}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">{info.title}</h1>
            <p className="text-gray-700 mb-4">{info.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieInfo;
