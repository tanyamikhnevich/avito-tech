import React, { useEffect } from "react";

import { useComments } from "features/hooks";
import { Comments } from "widgets";
import { Button, Group, Loader } from "@mantine/core";

interface Props {
  id: number;
}

export const NewsComments = ({ id }: Props) => {
  const { relatedComments, error, isLoading, getAllComments } = useComments(id);

  useEffect(() => {
    if (!id) return;
    getAllComments(id);
  }, []);

  // if (error || isLoading) return <div>Loading</div>;

  function getComments() {
    getAllComments(id);
  }

  return (
    <div>
      {isLoading && <Loader color="red" size="xl" />}
      {error && <div>{error}</div>}
      <Group position={"right"}>
        <Button
          variant="gradient"
          gradient={{ from: "dark.9", to: "red.8" }}
          p={10}
          radius="lg"
          uppercase
          size="md"
          onClick={getComments}
        >
          Update comments
        </Button>
      </Group>

      {relatedComments && <Comments comments={relatedComments} />}
    </div>
  );
};
