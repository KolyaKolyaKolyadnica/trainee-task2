import { Link, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <header className={style.header}>
        <nav className={style.navigation}>
          <ul className={style.list}>
            <li className={style.listItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/trends">Trends</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/popular">Popular</Link>
            </li>
            <li className={style.listItem}>
              <Link to="/now-playing">Now playing</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
