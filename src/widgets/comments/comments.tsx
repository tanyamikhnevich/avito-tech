import React from "react";

import { CommentsTypes } from "entities/comments/api";
import { Comment } from "widgets";

import { Stack } from "@mantine/core";

interface Props {
  comments: CommentsTypes.GetByIdResponse[];
}

export const Comments = ({ comments }: Props) => {
  return (
    <Stack ml={64}>
      {comments.map(
        (comment) =>
          (comment.by || comment.text) && (
            <Comment comment={comment} key={comment.id} />
          )
      )}
    </Stack>
  );
};
