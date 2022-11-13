import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { newsActions } from "entities/news";
import { commentsActions } from "entities/comments";
import { avatarActions } from "entities/avatars";

const actionCreators = { ...newsActions, ...commentsActions, ...avatarActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return { ...bindActionCreators(actionCreators, dispatch) };
};
