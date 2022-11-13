import React from "react";
import { Button } from "@mantine/core";

import { useActions } from "features/hooks";

interface Props {
  loading: boolean;
}
export const UpdateNewsButton = ({ loading }: Props) => {
  const { updateAllNews } = useActions();
  function getNews() {
    updateAllNews();
  }

  return (
    <Button onClick={getNews} p={10} uppercase size="sm" loading={loading}>
      Update
    </Button>
  );
};
