import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newsActions as actions, NewsStateTypes } from ".";
import {
  type IReduxState,
  pending,
  fulfilled,
  rejected,
} from "shared/utils/redux";

const initialState: NewsStateTypes.INewsState & IReduxState = {
  news: [],
  displayedNewsItem: null,
  isLoading: false,
  error: "",
};

type NewsItemT = NewsStateTypes.INewsItem;

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [actions.getAllNews.pending.type]: pending,
    [actions.getAllNews.fulfilled.type]: (
      state,
      action: PayloadAction<NewsItemT[]>
    ) => {
      fulfilled(state);
      state.news = action.payload;
    },
    [actions.getAllNews.rejected.type]: rejected,
    [actions.getNewsById.pending.type]: pending,
    [actions.getNewsById.fulfilled.type]: (
      state,
      action: PayloadAction<NewsItemT>
    ) => {
      fulfilled(state);
      state.displayedNewsItem = action.payload;
    },
    [actions.getNewsById.rejected.type]: rejected,
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
