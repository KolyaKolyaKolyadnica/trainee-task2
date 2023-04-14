import { Link, useSearchParams } from "react-router-dom";
import style from "./MoviesByKeywordPage.module.css";
import api from "../../services/ThemoviedbApi";
import { useEffect, useState } from "react";
import { IMovieData } from "../../types/types";
import Speener from "../../components/Speener/Speener";

export default function MoviesByKeywordPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState<IMovieData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    api
      .getMoviesByKeywordId(searchParams.get("keywordId"))
      .then((res) => {
        setMovies(res.results);
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={style.container}>
      {isLoading ? (
        <Speener />
      ) : (
        <ul className={style.list}>
          {movies.map((movie) => (
            <li className={style.listItem} key={movie.id}>
              <Link className={style.link} to={`/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`poster of ${movie.title}`}
                  className={style.image}
                />
                <div className={style.textBlock}>
                  <h2 className={style.title}>{movie.title}</h2>
                  <p className={style.releaseDate}>{movie.release_date}</p>
                  <p className={style.overview}>{movie.overview}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
