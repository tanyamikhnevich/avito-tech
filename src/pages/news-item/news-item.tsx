import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useActions, useAppSelector } from "features/hooks";
import { PUBLIC_PATH } from "shared/config";
import { NewsComments, NewsDescription } from "./ui";
import { Button, Loader } from "shared/ui";

import { Group, Stack } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";

type TParams = { id?: string | undefined };

export const NewsItem = () => {
  const { id } = useParams<TParams>();
  const {
    displayedNewsItem: item,
    isLoading,
    error,
  } = useAppSelector((state) => state.news);
  const { getNewsById } = useActions();

  useEffect(() => {
    if (!id) return;
    getNewsById(Number(id));
  }, []);

  if (!item || isLoading || error) return <Loader />;

  return (
    <Stack>
      <Group position="right">
        <Link to={PUBLIC_PATH.NEWS_LIST}>
          <Button leftIcon={<IconHome2 size={16} stroke={1.5} />}>
            TO NEWS
          </Button>
        </Link>
      </Group>

      <NewsDescription item={item} />
      <NewsComments id={item.id} />
    </Stack>
  );
};
