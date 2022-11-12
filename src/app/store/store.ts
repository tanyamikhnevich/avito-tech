import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "entities/news";
import { commentsReducer } from "entities/comments";

const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
  },
});

export default store;
