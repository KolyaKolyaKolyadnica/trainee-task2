import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/ThemoviedbApi";
import {
  IPromiseMovieCategory,
  IPromiseAllMovieCategories,
} from "../../types/types";

const asyncWrapper = async (
  apiMethod: Promise<IPromiseMovieCategory>,
  thunkAPI: any
) => {
  try {
    const data = await apiMethod;
    return data.results;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const getTrends = createAsyncThunk(
  "movies/getTrends",
  (page: number, thunkAPI) => asyncWrapper(api.fetchTrend(page), thunkAPI)
);

export const getPopular = createAsyncThunk(
  "movies/getPopular",
  (page: number, thunkAPI) => asyncWrapper(api.fetchPopular(page), thunkAPI)
);

export const getNowPlaying = createAsyncThunk(
  "movies/getNowPlaying",
  async (page: number, thunkAPI) =>
    asyncWrapper(api.fetchNowPlaying(page), thunkAPI)
);

export const getAllCategory = createAsyncThunk(
  "movies/getAllCategory",
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllFirstPage();

      const result = {
        trends: data.trends.results,
        popular: data.popular.results,
        nowPlaying: data.nowPlaying.results,
      };

      return result as IPromiseAllMovieCategories;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
