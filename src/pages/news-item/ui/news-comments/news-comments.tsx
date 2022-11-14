import React, { useEffect } from "react";

import { useComments } from "features/hooks";
import { Comments } from "widgets";
import { Loader } from "shared/ui";
import { Button } from "shared/ui";

import { Group, Stack, Text } from "@mantine/core";

interface Props {
  id: number;
}

export const NewsComments = ({ id }: Props) => {
  const { relatedComments, error, isLoading, getAllComments } = useComments(id);

  useEffect(() => {
    if (!id) return;
    getAllComments(id);
  }, []);

  if (!relatedComments) return null;

  if (error || isLoading) return <Loader />;

  function getComments() {
    getAllComments(id);
  }

  return (
    <Stack>
      {error && <Text>{error}</Text>}
      <Group position="right">
        <Button onClick={getComments}>Update comments</Button>
      </Group>

      {relatedComments && <Comments comments={relatedComments} />}
    </Stack>
  );
};
