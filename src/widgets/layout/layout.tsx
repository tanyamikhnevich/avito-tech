import React, { ReactNode } from "react";
import { Container, Group, Stack, Title, Text } from "@mantine/core";
import { useStyles } from "./layout.styles";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { classes } = useStyles();
  return (
    <Stack className={classes.wrapper}>
      <Group className={classes.headerContainer}>
        <Container size="xl" className={classes.header}>
          <Group position="apart" align="flex-end">
            <Title c="red.9" order={2}>
              Hacker News
            </Title>
            <Text c="gray.0">by T. Mikhnevich</Text>
          </Group>
        </Container>
      </Group>
      <Container size="xl" w="100%">
        {children}
      </Container>
    </Stack>
  );
};
