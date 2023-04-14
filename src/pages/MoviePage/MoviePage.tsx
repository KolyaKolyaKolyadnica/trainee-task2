import style from "./MoviePage.module.css";
import api from "../../services/ThemoviedbApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieMainSection from "../../components/MovieMainSection/MovieMainSection";
import MovieSecondarySection from "../../components/MovieSecondarySection/MovieSecondarySection";

import { IMovieById, IMovieCredits } from "../../types/types";
import Speener from "../../components/Speener/Speener";

export default function MoviePage() {
  const [movie, setMovie] = useState<IMovieById | null>(null);
  const [cast, setCast] = useState<IMovieCredits | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  const { id } = useParams();

  const getData = () => {
    try {
      api.fetchMovieById(id).then((movie) => setMovie(movie));
      api.fetchCastById(id).then((movieCast) => {
        setCast(movieCast);
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.container}>
      {isLoading && <Speener />}

      {movie && cast && (
        <>
          <MovieMainSection movie={movie} cast={cast} />
          <MovieSecondarySection movie={movie} cast={cast} />
        </>
      )}
    </div>
  );
}
