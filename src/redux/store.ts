import { configureStore, combineReducers } from "@reduxjs/toolkit";

import moviesReducer from "./movies/moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
