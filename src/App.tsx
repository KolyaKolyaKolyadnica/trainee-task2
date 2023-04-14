import { useRoutes } from "react-router-dom";
import style from "./App.module.css";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import TrendsPage from "./pages/TrendsPage/TrendsPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MoviesByKeywordPage from "./pages/MoviesByKeywordPage/MoviesByKeywordPage";

function App() {
  const pages = useRoutes([
    {
      element: <Navigation />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "trends", element: <TrendsPage /> },
        { path: "popular", element: <PopularPage /> },
        { path: "now-playing", element: <NowPlayingPage /> },
        { path: "/:id", element: <MoviePage /> },
        { path: "/movies-by-keyword", element: <MoviesByKeywordPage /> },
        { path: "/*", element: <div>Not found</div> },
      ],
    },
  ]);
  return <div className={style.App}>{pages}</div>;
}

export default App;
