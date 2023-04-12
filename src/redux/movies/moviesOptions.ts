import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/ThemoviedbApi";

const asyncWrapper = async (apiMethod: any, thunkAPI: any) => {
  // Warning!!! Не могу придумать как мне описать тип
  try {
    const data = await apiMethod;

    // for fetch all films categories on HomePage:
    if (data.trends && data.popular && data.nowPlaying) {
      const result = {
        trends: data.trends.results,
        popular: data.popular.results,
        nowPlaying: data.nowPlaying.results,
      };

      return result;
    }

    // for fetch films by some category (trend/popular/... .etc)
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
  async (_, thunkAPI) => asyncWrapper(api.getAllFirstPage(), thunkAPI)
);
