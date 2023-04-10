import { useSelector } from "react-redux";
import FilmsCategory from "../../components/FilmsCategory/FilmsCategory";
import style from "./NowPlayingPage.module.css";
import { useState } from "react";
import { getNowPlaying } from "../../redux/movies/moviesOptions";
import useMovies from "../../hooks/useMovies";

export default function NowPlayingPage() {
  const stateData = useSelector((state) => state.movies.nowPlaying);
  const [page, setPage] = useState(1);
  const allMovies = useMovies(stateData, getNowPlaying, page);

  return (
    <FilmsCategory
      collection={allMovies}
      isLoading={allMovies.isLoading}
      loadMore={() => setPage(page + 1)}
    />
  );
}
