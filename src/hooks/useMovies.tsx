import { useEffect, useState } from "react";
import { useAppDispatch } from "./tsRedux";
import { IMovieData } from "../types/types";
import { AsyncThunk } from "@reduxjs/toolkit";

export default function useMovies(
  stateData: IMovieData[],
  categoryOptions: any, // Warning!!! Не могу придумать как мне описать тип
  page = 1
) {
  const dispatch = useAppDispatch();

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
