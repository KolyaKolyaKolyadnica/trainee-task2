import style from "./MoviePage.module.css";
import api from "../../services/ThemoviedbApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieMainSection from "../../components/MovieMainSection/MovieMainSection";
import MovieSecondarySection from "../../components/MovieSecondarySection/MovieSecondarySection";

import { IMovieById, IMovieCredits } from "../../types/types";

export default function MoviePage() {
  const [movie, setMovie] = useState<IMovieById | null>(null);
  const [cast, setCast] = useState<IMovieCredits | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const { id } = useParams();

  useEffect(() => {
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
  }, []);

  return (
    <>
      {movie && cast && (
        <div className={style.container}>
          <MovieMainSection movie={movie} cast={cast} />
          <MovieSecondarySection movie={movie} cast={cast} />
        </div>
      )}
    </>
  );
}
