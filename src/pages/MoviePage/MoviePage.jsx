import style from "./MoviePage.module.css";
import api from "../../services/ThemoviedbApi";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieMainSection from "../../components/MovieMainSection/MovieMainSection";
import MovieSecondarySection from "../../components/MovieSecondarySection/MovieSecondarySection";

export default function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    try {
      api.fetchMovieById(id).then((movie) => setMovie(movie));
      api.fetchCastById(id).then((movieCast) => {
        setCast(movieCast);
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {movie && (
        <div className={style.container}>
          <MovieMainSection movie={movie} cast={cast} />
          <MovieSecondarySection movie={movie} cast={cast} />
        </div>
      )}
    </>
  );
}
