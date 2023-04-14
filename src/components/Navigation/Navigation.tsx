import { Link, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  const linksArr = [
    { link: "/", name: "Home" },
    { link: "/trends", name: "Trends" },
    { link: "/popular", name: "Popular" },
    { link: "/now-playing", name: "Now playing" },
  ];

  return (
    <>
      <header className={style.header}>
        <nav className={style.navigation}>
          <ul className={style.list}>
            {linksArr.map((item, idx) => (
              <li className={style.listItem} key={idx}>
                <Link to={`${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
