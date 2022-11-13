import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearState as clearStateComments } from "entities/comments/state/slice";
import { clearState as clearStateAvatars } from "entities/avatars/state/slice";
import { newsApi } from "../api";
import { INewsItem } from "./types";

export const getAllNews = createAsyncThunk<INewsItem[]>(
  "news/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await newsApi.getNewsIds();

      const promises = data.slice(0, 30).map((id) => newsApi.getById(id));
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

export const updateAllNews = createAsyncThunk<INewsItem[]>(
  "news/update",
  async (_, thunkAPI) => {
    try {
      const { data } = await newsApi.getNewsIds();
      thunkAPI.dispatch(clearStateComments);
      thunkAPI.dispatch(clearStateAvatars);
      const promises = data.slice(0, 100).map((id) => newsApi.getById(id));
      const res = await Promise.all(promises);

      return res.map((res) => res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
