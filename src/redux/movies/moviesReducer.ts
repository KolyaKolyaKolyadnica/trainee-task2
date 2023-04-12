import { createSlice } from "@reduxjs/toolkit";
import {
  getPopular,
  getTrends,
  getNowPlaying,
  getAllCategory,
} from "./moviesOptions";
import { IMovieData } from "../../types/types";

type MoviesState = {
  trends: IMovieData[];
  popular: IMovieData[];
  nowPlaying: IMovieData[];
  isLoading: boolean;
  error: any;
};

const initialState = {
  trends: [],
  popular: [],
  nowPlaying: [],
  isLoading: false,
  error: null,
} as MoviesState;

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrends.fulfilled, (state, { payload }) => {
        state.trends = payload;
        state.isLoading = false;
      })
      .addCase(getPopular.fulfilled, (state, { payload }) => {
        state.popular = payload;
        state.isLoading = false;
      })
      .addCase(getNowPlaying.fulfilled, (state, { payload }) => {
        state.nowPlaying = payload;
        state.isLoading = false;
      })

      .addCase(getTrends.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getPopular.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getNowPlaying.pending, (state, { payload }) => {
        state.isLoading = true;
      })

      .addCase(getAllCategory.fulfilled, (state, { payload }) => {
        state.trends = payload.trends;
        state.popular = payload.popular;
        state.nowPlaying = payload.nowPlaying;

        state.isLoading = false;
      })
      .addCase(getAllCategory.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default moviesSlice.reducer;
