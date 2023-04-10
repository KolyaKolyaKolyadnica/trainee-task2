import { Link } from "react-router-dom";
import style from "./FilmItem.module.css";

export default function FilmItem({ item }) {
  return (
    <li className={style.listItem}>
      <Link className={style.infoContainer} to={`/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt=""
          className={style.itemImage}
        />
        <h2 className={style.itemTitle}>
          {item.title ? item.title : item.name}
        </h2>
        <p className={style.itemRelease}>
          {item.release_date ? item.release_date : item.first_air_date}
        </p>
        <p className={style.itemTitle}>
          Rating: {Math.round(item.vote_average * 10)}%
        </p>
      </Link>
      {/* <div className={style.infoContainer}></div> */}
    </li>
  );
}
