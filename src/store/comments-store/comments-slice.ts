import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllComments } from "./action-creators";

export interface OneComment {
  by: string;
  id: number;
  kids: Array<number>;
  parent: number;
  time: number;
  text: string;
  type: string;
}

interface InitialStateI {
  comments: Array<OneComment>;
  kidsComments: Record<string, OneComment[]>;
  isLoading: boolean;
  error: string;
}

const initialState: InitialStateI = {
  comments: [],
  kidsComments: {},
  isLoading: false,
  error: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllComments.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [getAllComments.fulfilled.type]: (
      state,
      action: PayloadAction<Array<OneComment>>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.comments = action.payload;
      // console.log(state.comments.map((m) => m.kids));
    }, //success
    [getAllComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
