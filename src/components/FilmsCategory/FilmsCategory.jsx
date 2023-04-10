import FilmItem from "../FilmItem/FilmItem";
import style from "./FilmsCategory.module.css";

export default function FilmsCategory({ collection, isLoading, loadMore }) {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {collection.map((item) => (
          <FilmItem item={item} key={item.id} />
        ))}
      </ul>
      <button type="button" className={style.loadMoreBtn} onClick={loadMore}>
        {isLoading ? "Wait" : "Load more or pagination"}
      </button>
    </div>
  );
}
