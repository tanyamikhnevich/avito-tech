import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { getAllComments } from "../../store/comments-store/action-creators";
import { KidsComments } from "../kids-comments/kids-comments";

import styles from "./comments.module.scss";

export const Comments = () => {
  const { id } = useParams<{ id?: string | undefined }>();
  const dispatch = useAppDispatch();

  const { comments, error, isLoading } = useAppSelector(
    (state) => state.comments
  );

  useEffect(() => {
    if (!id) return;
    dispatch(getAllComments(Number(id)));
    console.log("ghggh");
  }, []);

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {error && <div>{error}</div>}

      {comments.map(
        (comment) =>
          (comment.by || comment.text) && (
            <div key={comment.id}>
              <div className={styles.comments}>
                <h5 className={styles.commentUser}>User: {comment.by}</h5>
                <p className={styles.commentUser}>Comment: {comment.text}</p>
                {comment.kids && <KidsComments comment={comment} />}
              </div>
            </div>
          )
      )}
    </div>
  );
};
