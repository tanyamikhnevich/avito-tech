import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { OneComment } from "../../store/comments-store/comments-slice";
import { getKidsComments } from "../../store/comments-store/kids-store/action-creators";
import { clearKids } from "../../store/comments-store/kids-store/kids-slice";

import styles from "../comments/comments.module.scss";

interface Props {
  comment: OneComment;
}

export const KidsComments = ({ comment }: Props) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const { kidsComments } = useAppSelector((state) => state.kids);
  const allKidsComments = kidsComments[comment.id];

  const getKids = (comment: OneComment) => {
    dispatch(getKidsComments(comment));
    setIsOpen(() => !isOpen);
  };

  // todo: сделать закрытие
  const closeKids = () => {
    dispatch(clearKids());
    setIsOpen(() => !isOpen);
  };

  return (
    <div>
      <button
        onClick={() => {
          isOpen ? closeKids() : getKids(comment);
        }}
      >
        {isOpen ? "Close" : "See"}
      </button>

      {allKidsComments &&
        allKidsComments.map(
          (comment) =>
            (comment.by || comment.text) && (
              <div key={comment.id} className={styles.commentsKids}>
                <h5 className={styles.commentUser}>User: {comment.by}</h5>
                <p className={styles.commentUser}>Comment: {comment.text}</p>
              </div>
            )
        )}
    </div>
  );
};
