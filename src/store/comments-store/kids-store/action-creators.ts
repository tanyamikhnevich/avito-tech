import { createAsyncThunk } from "@reduxjs/toolkit";
import { OneComment } from "./../comments-slice";
import { api } from "../../../shared/api/api";

export const getKidsComments = createAsyncThunk<
  { id: number; kids: OneComment[] },
  OneComment
>("comments/kids", async (comment: OneComment, thunkAPI) => {
  try {
    const promises = comment.kids.map((id) =>
      api.get<OneComment>(`/item/${id}.json?print=pretty`)
    );

    const res = await Promise.all(promises);
    return { id: comment.id, kids: res.map((res) => res.data) };
  } catch (e) {
    return thunkAPI.rejectWithValue("Data not found");
  }
});
