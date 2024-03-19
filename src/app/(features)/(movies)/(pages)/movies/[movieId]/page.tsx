import { useParams } from "next/navigation";
import MovieInfo from "./components/server/MovieInfo";

function MovieInfoPage({ params  }: any) {
  return <MovieInfo {...params} />;
}

export default MovieInfoPage;
