import FilmItem from "../FilmItem/FilmItem";
import style from "./FilmsList.module.css";

import { IMovieData } from "../../types/types";

interface IFilmsList {
  sectionTitle: string;
  collection: IMovieData[];
}

export default function FilmsList({ sectionTitle, collection }: IFilmsList) {
  return (
    <section className={style.section}>
      <h1 className={style.sectionTitle}>{sectionTitle}</h1>
      <ul className={style.list}>
        {collection.map((item) => (
          <FilmItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
