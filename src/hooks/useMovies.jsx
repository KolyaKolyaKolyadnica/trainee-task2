import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useMovies(stateData, categoryOptions, page = 1) {
  const dispatch = useDispatch();

  const [allFilms, setAllFilms] = useState([...stateData]);

  useEffect(() => {
    dispatch(categoryOptions(page));
  }, [page]);

  useEffect(() => {
    page <= 1
      ? setAllFilms([...stateData])
      : setAllFilms([...allFilms, ...stateData]);
  }, [stateData]);

  return allFilms;
}
