import { useAppSelector } from "./hooks";
import { useActions } from "./use-actions";
import { useCallback, useEffect, useState } from "react";

export const useComments = (id: number) => {
  const {
    comments: commentsList,
    error,
    isLoading,
  } = useAppSelector((state) => state.comments);
  const relatedComments = commentsList[id];
  const { getAllComments: getAllCommentsAction } = useActions();

  const [called, setCalled] = useState(false);

  const getAllComments = useCallback((id: number) => {
    if (relatedComments) return;
    getAllCommentsAction(id);
    setCalled(true);
  }, []);

  useEffect(() => {
    setCalled(false);
  }, [isLoading]);

  return {
    relatedComments,
    error,
    isLoading: isLoading && called,
    getAllComments,
  };
};
