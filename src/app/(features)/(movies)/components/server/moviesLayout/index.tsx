import dynamic from "next/dynamic";
const Movie = dynamic(() => import("../../client/index"), {
  ssr: false,
});
const Search = dynamic(() => import("../../client/search"), {
  ssr: false,
});

/**
 *
 * MoviesLayout
 *
 */

interface MovieProps {
  id: number;
  title: string;
  image: string;
}

async function getMovies() {
  // try {
  //   const myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ZlZDVjZmRjNDcxYTMwZWI4ZTkxYTBiODA5NzRhZSIsInN1YiI6IjY1ZjgxMTAwZTE5NGIwMDE2M2JlZmIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0z5lCexBUA9-n450QNqEjpkGzEKMP1XUC-5McD5kwI"
  //   );

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   const response = await fetch(
  //     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  //     requestOptions
  //   );

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   const result = await response.json();
  //   console.log("Movies DB:", result);
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }
  // const API = process.env.PRODUCT_API_URL;
  const response = await fetch("https://fakestoreapi.com/products/");
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "Bearer ",
  //   },
  // };
  // const response = await fetch(API, options);
  // const API = process.env.MOVIES_DB_API_URL;
  // const response = await fetch(API, options);
  return await response.json();
}

async function MoviesLayout() {
  const movies = await getMovies();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      <div className="container mx-auto px-4 py-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map(({ id, image, title }: MovieProps) => (
            <Movie id={id} title={title} image={image} key={id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MoviesLayout;
