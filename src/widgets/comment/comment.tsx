import { GetByIdResponse } from "entities/comments/api/types";
import React from "react";
import { useComments, useIsVisible } from "features/hooks";
import { Avatar, Comments } from "widgets";

import { Stack, Text } from "@mantine/core";
import { useStyles } from "./comment.style";
import { Button } from "shared/ui";

interface Props {
  comment: GetByIdResponse;
}

export const Comment = ({ comment }: Props) => {
  const { isVisible: opened, show, hide } = useIsVisible(false);

  const { relatedComments, error, isLoading, getAllComments } = useComments(
    comment.id
  );
  const { classes } = useStyles();

  return (
    <Stack spacing={0}>
      <Stack
        className={
          (comment.kids && classes.containerWithButton) || classes.container
        }
      >
        <Avatar id={comment.id} by={comment.by} />
        <Text size={15}>{comment.text}</Text>
      </Stack>
      <Stack align="flex-end">
        {comment.kids && (
          <Button
            color="gray"
            className={comment.kids && classes.button}
            uppercase={false}
            onClick={() => {
              opened ? hide() : show(() => getAllComments(comment.id));
            }}
          >
            {opened ? "close" : "show replies"}
          </Button>
        )}
        {error && <Text>{error}</Text>}
        {relatedComments && opened && !isLoading && (
          <Comments comments={relatedComments} />
        )}
      </Stack>
    </Stack>
  );
};
