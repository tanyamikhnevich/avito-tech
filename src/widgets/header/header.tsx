import React from "react";
import { Button, Group, Title } from "@mantine/core";

import { useActions } from "features/hooks";

import styles from "./header.module.scss";

export const Header = () => {
  const { getAllNews } = useActions();
  function getNews() {
    getAllNews();
  }

  return (
    <Group position="apart">
      <Title className={styles.title}>Fake News</Title>
      <Button onClick={getNews}>Update news</Button>
    </Group>
  );
};
