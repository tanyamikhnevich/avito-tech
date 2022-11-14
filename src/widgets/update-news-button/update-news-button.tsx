import React from "react";
import { Button } from "shared/ui";

import { useActions } from "features/hooks";

interface Props {
  loading: boolean;
}
export const UpdateNewsButton = ({ loading }: Props) => {
  const { updateAllNews } = useActions();
  const getNews = () => {
    updateAllNews();
  };

  return (
    <Button onClick={getNews} p={10} uppercase size="sm" loading={loading}>
      Update
    </Button>
  );
};
