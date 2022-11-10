import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api/api";
import { OneComment } from "./comments-slice";

export const getAllComments = createAsyncThunk<OneComment[], number>(
  "comments/all",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await api.get<OneComment>(
        `/item/${id}.json?print=pretty`
      );

      const promises = data.kids.map((id) =>
        api.get<OneComment>(`/item/${id}.json?print=pretty`)
      );
      const res = await Promise.all(promises);

      return res.map((res) => res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
