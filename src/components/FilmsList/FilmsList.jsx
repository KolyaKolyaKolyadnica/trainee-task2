import FilmItem from "../FilmItem/FilmItem";
import style from "./FilmsList.module.css";

export default function FilmsList({ sectionTitle, collection }) {
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
