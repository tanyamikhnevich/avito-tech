import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { newsActions } from "entities/news";
import { commentsActions } from "entities/comments";

const actionCreators = { ...newsActions, ...commentsActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return { ...bindActionCreators(actionCreators, dispatch) };
};
