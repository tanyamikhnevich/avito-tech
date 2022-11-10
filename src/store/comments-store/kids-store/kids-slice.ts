import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneComment } from "../comments-slice";
import { getKidsComments } from "./action-creators";

interface InitialStateI {
  kidsComments: Record<string, OneComment[]>;
  isLoading: boolean;
  error: string;
}

const initialState: InitialStateI = {
  kidsComments: {},
  isLoading: false,
  error: "",
};

const kidsSlice = createSlice({
  name: "kids",
  initialState,
  reducers: {
    clearKids(state) {
      state.kidsComments = {};
    },
  },
  extraReducers: {
    [getKidsComments.pending.type]: (state) => {
      state.isLoading = true;
    }, //isLoading
    [getKidsComments.fulfilled.type]: (
      state,
      action: PayloadAction<Record<string, OneComment[]>>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.kidsComments[action.payload.id.toString()] = action.payload.kids;
    }, //success
    [getKidsComments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //error
  },
});

export const { clearKids } = kidsSlice.actions;

export default kidsSlice.reducer;
