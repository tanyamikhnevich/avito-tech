import React from "react";
import { CommentsTypes } from "entities/comments/api";
import { Comment } from "widgets";

interface Props {
  comments: CommentsTypes.GetByIdResponse[];
}

export const Comments = ({ comments }: Props) => {
  return (
    <div>
      {comments.map(
        (comment) =>
          (comment.by || comment.text) && (
            <Comment comment={comment} key={comment.id} />
          )
      )}
    </div>
  );
};
