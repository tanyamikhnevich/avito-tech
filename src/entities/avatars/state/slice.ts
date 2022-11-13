import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAvatar } from "./action-creators";
import {
  fulfilled,
  type IReduxState,
  pending,
  rejected,
} from "shared/utils/redux";
import type { IAvatarsState } from "./types";
import { IAvatarsActionReturn } from "./types";

const initialState: IAvatarsState & IReduxState = {
  avatar: {},
  isLoading: false,
  error: "",
};

const avatarsSlice = createSlice({
  name: "avatars",
  initialState,
  reducers: {
    clearState(state) {
      state.avatar = {};
    },
  },
  extraReducers: {
    [getAvatar.pending.type]: pending,
    [getAvatar.fulfilled.type]: (
      state,
      action: PayloadAction<IAvatarsActionReturn>
    ) => {
      fulfilled(state);
      state.avatar[action.payload.id] = action.payload.img;
    },
    [getAvatar.rejected.type]: rejected,
  },
});

export const { clearState } = avatarsSlice.actions;

export default avatarsSlice.reducer;
