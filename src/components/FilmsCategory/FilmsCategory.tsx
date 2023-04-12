import { useAppSelector } from "../../hooks/tsRedux";
import FilmItem from "../FilmItem/FilmItem";
import style from "./FilmsCategory.module.css";

import { IMovieData } from "../../types/types";
import Speener from "../Speener/Speener";

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
        {collection.map((item: any) => (
          <FilmItem item={item} key={item.id} />
        ))}
      </ul>
      <button type="button" className={style.loadMoreBtn} onClick={loadMore}>
        {isLoading ? <Speener /> : "Load more or pagination"}
      </button>
    </div>
  );
}
