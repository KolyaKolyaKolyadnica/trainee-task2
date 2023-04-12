import style from "./MovieMainSection.module.css";

import { IMovieById, IMovieCredits, IMovieKeywords } from "../../types/types";

interface IMovieSecondarySection {
  movie: IMovieById;
  cast: IMovieCredits;
}

export default function MovieMainSection({
  movie,
  cast,
}: IMovieSecondarySection) {
  return (
    <section className={style.mainInfo}>
      <div
        className={style.bgimg}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "50% 50%",
        }}
      ></div>

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`poster of the movie ${movie.title}`}
        className={style.image}
      />

      <div className={style.textBlock}>
        <h1 className={style.title}>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>

        <ul className={style.sortInfo}>
          <li className={style.listItem}>
            {movie.release_date.split("-").reverse().join("/")}
          </li>

          <li className={style.listItem}>
            <ul className={style.genres}>
              {movie.genres.map((genre) => (
                <li className={style.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </li>

          {movie.runtime && (
            <li className={style.listItem}>
              {(movie.runtime - (movie.runtime % 60)) / 60}h{" "}
              {movie.runtime % 60}m
            </li>
          )}

          <li className={style.listItem}>
            Rating: {Math.round(movie.vote_average * 10)}%
          </li>
        </ul>

        <h3 className={style.overview}>Overview</h3>
        <p className={style.text}>{movie.overview}</p>

        <ul className={style.crew}>
          {cast &&
            cast.crew
              .filter(
                (el) => el.job === "Director" || el.job === "Head of Story"
              )
              .map((person) => (
                <li className={style.listItem} key={person.id}>
                  <h4 className={style.text}>{person.name}</h4>
                  <p className={style.text}>{person.job}</p>
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}
