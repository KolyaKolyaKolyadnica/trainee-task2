import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import {
  getPopular,
  getTrends,
  getNowPlaying,
  getAllCategory,
} from "./moviesOptions";

const initialState = {
  trends: [],
  popular: [],
  nowPlaying: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTrends.fulfilled, (state, { payload }) => {
        state.trends = payload;
      })
      .addCase(getPopular.fulfilled, (state, { payload }) => {
        state.popular = payload;
      })
      .addCase(getNowPlaying.fulfilled, (state, { payload }) => {
        state.nowPlaying = payload;
      })

      .addCase(getAllCategory.fulfilled, (state, { payload }) => {
        state.trends = payload.trends;
        state.popular = payload.popular;
        state.nowPlaying = payload.nowPlaying;

        state.isLoading = false;
      })
      .addCase(getAllCategory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default moviesSlice.reducer;
