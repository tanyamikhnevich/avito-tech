import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllComments } from "./action-creators";
import {
  fulfilled,
  type IReduxState,
  pending,
  rejected,
} from "shared/utils/redux";
import type { ICommentsState } from "./types";
import { GetByIdActionReturnT } from "./types";

const initialState: ICommentsState & IReduxState = {
  comments: {},
  isLoading: false,
  error: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllComments.pending.type]: pending,
    [getAllComments.fulfilled.type]: (
      state,
      action: PayloadAction<GetByIdActionReturnT>
    ) => {
      const { id, comments } = action.payload;
      fulfilled(state);
      state.comments[id] = comments;
    },
    [getAllComments.rejected.type]: rejected,
  },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
