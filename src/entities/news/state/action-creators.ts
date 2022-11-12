import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsApi } from "../api";
import { INewsItem } from "./types";

export const getAllNews = createAsyncThunk<INewsItem[]>(
  "news/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await newsApi.getNewsIds();

      const promises = data.slice(0, 10).map((id) => newsApi.getById(id));
      const res = await Promise.all(promises);

      return res.map((res) => res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);

export const getNewsById = createAsyncThunk<INewsItem, number>(
  "news/one",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await newsApi.getById(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
