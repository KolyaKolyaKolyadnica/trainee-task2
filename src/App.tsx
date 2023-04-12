import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import TrendsPage from "./pages/TrendsPage/TrendsPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MoviesByKeywordPage from "./pages/MoviesByKeywordPage/MoviesByKeywordPage";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="trends" element={<TrendsPage />}></Route>
          <Route path="popular" element={<PopularPage />}></Route>
          <Route path="now-playing" element={<NowPlayingPage />}></Route>
          <Route path="/:id" element={<MoviePage />}></Route>
          <Route
            path="/movies-by-keyword"
            element={<MoviesByKeywordPage />}
          ></Route>
          <Route path="/*" element={<div>Not found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
