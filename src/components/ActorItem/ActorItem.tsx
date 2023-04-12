import style from "./ActorItem.module.css";
import unknownActor from "../../images/unknownActor.jpg";

import { ICast } from "../../types/types";

interface IActorItem {
  item: ICast;
}

export default function ActorItem({ item }: IActorItem) {
  return (
    <li className={style.listItem}>
      <img
        src={
          item.profile_path
            ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
            : unknownActor
        }
        alt={item.name}
        className={style.itemImage}
      />

      <h2 className={style.itemTitle}>{item.name}</h2>
      <p className={style.itemRelease}>{item.character}</p>
    </li>
  );
}
