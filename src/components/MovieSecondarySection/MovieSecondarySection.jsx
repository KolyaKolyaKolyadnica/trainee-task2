import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/ThemoviedbApi";
import ActorItem from "../ActorItem/ActorItem";
import style from "./MovieSecondarySection.module.css";

export default function MovieSecondarySection({ movie, cast }) {
  const [keywords, setKeywords] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    api
      .getKeywords(id)
      .then((res) => setKeywords(res.keywords))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className={style.additionalInfo}>
      <div className={style.factsAndActors}>
        <div className={style.facts}>
          <h3>Facts:</h3>
          <ul className={style.factsList}>
            <li>
              <h4>Original title</h4>
              <p>{movie.original_title}</p>
            </li>
            <li>
              <h4>Status</h4>
              <p>{movie.status}</p>
            </li>
            <li>
              <h4>Production companies</h4>
              <p>
                {movie.production_companies
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            </li>
            <li>
              <h4>Production countries</h4>
              <p>
                {movie.production_countries
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            </li>
            <li>
              <h4>Budget</h4>
              <p>{movie.budget}</p>
            </li>
          </ul>
        </div>

        {cast && (
          <ul className={style.actorsList}>
            {cast.cast.map((item) => (
              <ActorItem item={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>

      <div className={style.keywords}>
        <h3 className={style.listName}> Search by keywords:</h3>
        <ul className={style.keywordsList}>
          {keywords &&
            keywords.map((keyword) => (
              <li className={style.keyword} key={keyword.id}>
                <Link
                  to={`/movies-by-keyword?keywordId=${keyword.id}&keyword=${keyword.name}`}
                  className={style.keywordLink}
                >
                  {keyword.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
