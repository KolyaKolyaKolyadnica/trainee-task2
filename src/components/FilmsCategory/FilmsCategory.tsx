import { useAppSelector } from "../../hooks/tsRedux";
import FilmItem from "../FilmItem/FilmItem";
import style from "./FilmsCategory.module.css";

import { IMovieData } from "../../types/types";

interface FilmsCategoryProps {
  collection: IMovieData[];
  loadMore: () => void;
}

export default function FilmsCategory({
  collection,
  loadMore,
}: FilmsCategoryProps) {
  const isLoading = useAppSelector((state) => state.movies.isLoading);

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {collection.map((item: IMovieData) => (
          <FilmItem item={item} key={item.id} />
        ))}
      </ul>
      <button type="button" className={style.loadMoreBtn} onClick={loadMore}>
        {isLoading ? "Wait" : "Load more or pagination"}
      </button>
    </div>
  );
}
