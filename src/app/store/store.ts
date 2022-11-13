import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "entities/news";
import { commentsReducer } from "entities/comments";
import { avatarReducer } from "entities/avatars";

const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
    avatar: avatarReducer,
  },
});

export default store;
