import { useEffect } from "react";
import style from "./HomePage.module.css";
import FilmsList from "../../components/FilmsList/FilmsList";
import { getAllCategory } from "../../redux/movies/moviesOptions";
import { useAppDispatch, useAppSelector } from "../../hooks/tsRedux";
import Speener from "../../components/Speener/Speener";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const { trends, popular, nowPlaying, isLoading, error } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <div className={style.container}>
      {isLoading ? (
        <Speener />
      ) : (
        <>
          <FilmsList sectionTitle="Trends" collection={trends} />
          <FilmsList sectionTitle="Popular" collection={popular} />
          <FilmsList sectionTitle="Now playing" collection={nowPlaying} />
        </>
      )}
    </div>
  );
}
