import { createAsyncThunk } from "@reduxjs/toolkit";
import { avatarApi } from "../api";
import { type IAvatarsActionReturn } from "./types";

export const getAvatar = createAsyncThunk<IAvatarsActionReturn, number>(
  "avatar",
  async (id: number, thunkAPI) => {
    try {
      const { data } = await avatarApi.getAvatar();

      return { id: id, img: data[0].url };
    } catch (e) {
      return thunkAPI.rejectWithValue("Data not found");
    }
  }
);
