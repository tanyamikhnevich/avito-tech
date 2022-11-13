import { GetByIdResponse } from "entities/comments/api/types";
import React from "react";
import { useComments, useIsVisible } from "features/hooks";
import { Avatar, Comments } from "widgets";

import { Button, Group, Stack, Text } from "@mantine/core";

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
    <div
      key={comment.id}
      style={{
        border: "1px solid black",
        borderRadius: "20px",
        margin: "10px",
        background: "white",
      }}
    >
      <Stack m={20}>
        <Text size={15}>{comment.text}</Text>
        <Group>
          <Avatar id={comment.id} />
          <Text fw={600} fs="italic">
            {comment.by}
          </Text>
        </Group>
      </Stack>
      <div style={{ margin: "10px 20px" }}>
        {comment.kids && (
          <Text
            variant="gradient"
            gradient={{ from: "dark.9", to: "red.8" }}
            size={15}
            onClick={() => {
              opened ? hide() : show(() => getAllComments(comment.id));
            }}
          >
            {opened ? "Close" : "Show replies"}
          </Text>
        )}
        {relatedComments && opened && <Comments comments={relatedComments} />}
      </div>
    </div>
  );
};
