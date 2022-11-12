import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentsApi } from "../api";
import { type GetByIdActionReturnT } from "./types";

export const getAllComments = createAsyncThunk<GetByIdActionReturnT, number>(
  "comments/all",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await commentsApi.getById(id);

      const promises = data.kids.map((id) => commentsApi.getById(id));
      const res = await Promise.all(promises);

      return { id, comments: res.map((res) => res.data) };
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
