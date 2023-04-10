import { configureStore, combineReducers } from "@reduxjs/toolkit";

import moviesReducer from "./movies/moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
