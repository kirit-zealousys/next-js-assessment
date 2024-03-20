import MoviesLayout from "../../components/server/moviesLayout";

export default function Dashboard({searchParams}) {
  let searchText = "";
  if(searchParams) {
    searchText = searchParams.search;
  }
  return <MoviesLayout search={searchText} />;
}
