import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/ThemoviedbApi";

const asyncWrapper = async (apiMethod, thunkAPI) => {
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
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const getTrends = createAsyncThunk(
  "movies/getTrends",
  (credentials, thunkAPI) => asyncWrapper(api.fetchTrend(credentials), thunkAPI)
);

export const getPopular = createAsyncThunk(
  "movies/getPopular",
  (credentials, thunkAPI) =>
    asyncWrapper(api.fetchPopular(credentials), thunkAPI)
);

export const getNowPlaying = createAsyncThunk(
  "movies/getNowPlaying",
  async (credentials, thunkAPI) =>
    asyncWrapper(api.fetchNowPlaying(credentials), thunkAPI)
);

export const getAllCategory = createAsyncThunk(
  "movies/getAllCategory",
  async (_, thunkAPI) => asyncWrapper(api.getAllFirstPage(), thunkAPI)
);
