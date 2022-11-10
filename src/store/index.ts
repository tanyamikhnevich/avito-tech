import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news-store/news-slice";
import commentsReducer from "./comments-store/comments-slice";
import kidsReducer from "./comments-store/kids-store/kids-slice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
    kids: kidsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
