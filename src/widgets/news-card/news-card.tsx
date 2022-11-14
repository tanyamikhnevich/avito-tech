import { useHistory } from "react-router-dom";

import { Avatar } from "../avatar/avatar";
import { type NewsTypes } from "entities/news/api";
import { convertedTimeAgo } from "shared/utils/converted-time-ago";

import { IconStar } from "@tabler/icons";
import { Card, Group, Space, Stack, Text, Title } from "@mantine/core";
import { useStyles } from "./news-card.style";

interface Props {
  item: NewsTypes.GetByIdResponse;
}

export const NewsCard = ({ item }: Props) => {
  const { by, time, title, score, id } = item;
  const { classes } = useStyles();
  const router = useHistory();

  return (
    <Card
      p="sm"
      onClick={() => router.push(`/${id}`)}
      className={classes.container}
    >
      <Stack p="sm" align="stretch" justify="center">
        <Title weight={500} order={3}>
          {title}
        </Title>
        <Group spacing="xs">
          <IconStar size={16} stroke={3} color="red" />
          <Text size="sm" color="red" fs="italic" fw={700}>
            {score} points
          </Text>
        </Group>
        <Space h="xs" />
        <Group position="apart" align="flex-end">
          <Avatar id={id} by={by} />
          <Text size="sm" color="dimmed" fs="italic">
            {convertedTimeAgo(time)}
          </Text>
        </Group>
      </Stack>
    </Card>
  );
};
