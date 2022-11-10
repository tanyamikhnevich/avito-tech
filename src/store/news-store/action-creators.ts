import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/api";
import { OneNew } from "./news-slice";

export interface NewsResponse {}

// todo newstories
export const getAllNews = createAsyncThunk<OneNew[]>(
  "news/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Array<number>>(
        "/topstories.json?print=pretty"
      );

      const promises = data
        .slice(0, 50)
        .map((id) => api.get<OneNew>(`/item/${id}.json?print=pretty`));
      const res = await Promise.all(promises);

      return res.map((res) => res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);

export const getNewsById = createAsyncThunk<OneNew, number>(
  "news/one",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await api.get<OneNew>(`/item/${id}.json?print=pretty`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
