import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllNews, getNewsById } from "./action-creators";

export interface OneNew {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface InitialStateI {
  news: Array<OneNew>;
  isLoading: boolean;
  error: string;
  oneNew: OneNew | null;
}

const initialState: InitialStateI = {
  news: [],
  oneNew: null,
  isLoading: false,
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllNews.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [getAllNews.fulfilled.type]: (
      state,
      action: PayloadAction<Array<OneNew>>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.news = action.payload;
    }, //success
    [getAllNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
    [getNewsById.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [getNewsById.fulfilled.type]: (state, action: PayloadAction<OneNew>) => {
      state.isLoading = false;
      state.error = "";
      state.oneNew = action.payload;
    }, //success
    [getNewsById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
