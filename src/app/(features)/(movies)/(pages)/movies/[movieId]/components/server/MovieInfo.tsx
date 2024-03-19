import Image from "next/image";
import BackButton from "../client/BackButton";

async function getMovieInfo({movieId}: number) {
  // if(!movieId) movieId = 1;
  // console.log("-----get ID:" + movieId);
  // const API = process.env.PRODUCT_API_URL;
  const response = await fetch("https://fakestoreapi.com/products/" + movieId);
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
  console.log("-----getMovieInfo-----", response);
  return await response.json();
}

async function MovieInfo(movieId: number) {
  const movieInfo = await getMovieInfo(movieId);
  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Image
            src={movieInfo.image}
            alt="Product"
            className="w-full h-auto rounded-lg"
            width={400}
            height={300}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{movieInfo.title}</h1>
          <p className="text-gray-700 mb-4">{movieInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
