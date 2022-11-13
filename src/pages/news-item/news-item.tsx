import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useActions, useAppSelector } from "features/hooks";
import { PUBLIC_PATH } from "shared/config";
import { NewsComments, NewsDescription } from "./ui";

import styles from "./news-item.module.scss";
import { Button, Group } from "@mantine/core";
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

  if (!item || isLoading || error) return <div>Loading</div>;

  return (
    <div className={styles.container}>
      <Group position={"right"}>
        <Button
          variant="gradient"
          gradient={{ from: "dark.9", to: "red.8" }}
          p={10}
          radius="lg"
          uppercase
          size="md"
        >
          <IconHome2 size={16} stroke={1.5} />
          <Link to={PUBLIC_PATH.NEWS_LIST} className={styles.link}>
            TO NEWS
          </Link>
        </Button>
      </Group>

      <NewsDescription item={item} />
      <NewsComments id={item.id} />
    </div>
  );
};
