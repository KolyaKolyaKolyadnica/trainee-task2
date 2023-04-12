import FilmsCategory from "../../components/FilmsCategory/FilmsCategory";
// import style from "./TrendsPage.module.css";
import { useState } from "react";
import { getTrends } from "../../redux/movies/moviesOptions";
import useMovies from "../../hooks/useMovies";
import { useAppSelector } from "../../hooks/tsRedux";

export default function TrendsPage() {
  const stateData = useAppSelector((state) => state.movies.trends);
  const [page, setPage] = useState(1);
  const allMovies = useMovies(stateData, getTrends, page);

  return (
    <FilmsCategory collection={allMovies} loadMore={() => setPage(page + 1)} />
  );
}
