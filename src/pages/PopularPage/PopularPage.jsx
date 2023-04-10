import { useSelector } from "react-redux";
import FilmsCategory from "../../components/FilmsCategory/FilmsCategory";
import style from "./PopularPage.module.css";
import { useState } from "react";
import { getPopular } from "../../redux/movies/moviesOptions";
import useMovies from "../../hooks/useMovies";

export default function PopularPage() {
  const stateData = useSelector((state) => state.movies.popular);
  const [page, setPage] = useState(1);
  const allMovies = useMovies(stateData, getPopular, page);

  return (
    <FilmsCategory
      collection={allMovies}
      isLoading={allMovies.isLoading}
      loadMore={() => setPage(page + 1)}
    />
  );
}
