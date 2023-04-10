import { useEffect } from "react";
import style from "./HomePage.module.css";
import FilmsList from "../../components/FilmsList/FilmsList";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/movies/moviesOptions";

export default function HomePage() {
  const dispatch = useDispatch();

  const { trends, popular, nowPlaying, isLoading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <div className={style.container}>
      {isLoading && <div>Жди! Я загружаю...</div>}
      <FilmsList sectionTitle="Trends" collection={trends} />
      <FilmsList sectionTitle="Popular" collection={popular} />
      <FilmsList sectionTitle="Now playing" collection={nowPlaying} />
    </div>
  );
}
