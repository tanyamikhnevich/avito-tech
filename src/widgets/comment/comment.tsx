import { GetByIdResponse } from "entities/comments/api/types";
import React from "react";
import { useComments, useIsVisible } from "features/hooks";
import { Comments } from "widgets";

import styles from "./comment.module.scss";

interface Props {
  comment: GetByIdResponse;
}

export const Comment = ({ comment }: Props) => {
  const { isVisible: opened, show, hide } = useIsVisible(false);

  const { relatedComments, error, isLoading, getAllComments } = useComments(
    comment.id
  );

  if (error || isLoading) return <div>Loading</div>;

  return (
    <div key={comment.id}>
      <div className={styles.comments}>
        <h5 className={styles.commentUser}>User: {comment.by}</h5>
        <p className={styles.commentUser}>Comment: {comment.text}</p>
        <p className={styles.commentUser}>
          количество комментов: {comment.kids}
        </p>

        {comment.kids && (
          <div>
            <button
              onClick={() => {
                opened ? hide() : show(() => getAllComments(comment.id));
              }}
            >
              {opened ? "Close" : "See"}
            </button>
          </div>
        )}
        {relatedComments && opened && <Comments comments={relatedComments} />}
      </div>
    </div>
  );
};
