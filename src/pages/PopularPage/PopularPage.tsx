import FilmsCategory from "../../components/FilmsCategory/FilmsCategory";
// import style from "./PopularPage.module.css";
import { useState } from "react";
import { getPopular } from "../../redux/movies/moviesOptions";
import useMovies from "../../hooks/useMovies";
import { useAppSelector } from "../../hooks/tsRedux";

export default function PopularPage() {
  const stateData = useAppSelector((state) => state.movies.popular);
  const [page, setPage] = useState(1);
  const allMovies = useMovies(stateData, getPopular, page);

  return (
    <FilmsCategory collection={allMovies} loadMore={() => setPage(page + 1)} />
  );
}
