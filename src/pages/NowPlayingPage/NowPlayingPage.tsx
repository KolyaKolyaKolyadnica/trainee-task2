import FilmsCategory from "../../components/FilmsCategory/FilmsCategory";
// import style from "./NowPlayingPage.module.css";
import { useState } from "react";
import { getNowPlaying } from "../../redux/movies/moviesOptions";
import useMovies from "../../hooks/useMovies";
import { useAppSelector } from "../../hooks/tsRedux";

export default function NowPlayingPage() {
  const stateData = useAppSelector((state) => state.movies.nowPlaying);
  const [page, setPage] = useState(1);
  const allMovies = useMovies(stateData, getNowPlaying, page);

  return (
    <FilmsCategory collection={allMovies} loadMore={() => setPage(page + 1)} />
  );
}
