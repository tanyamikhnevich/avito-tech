import { useHistory } from "react-router-dom";
import { formatDistance } from "date-fns";
import { Avatar } from "../avatar/avatar";
import { type NewsTypes } from "entities/news/api";

import { IconStar } from "@tabler/icons";
import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { useStyles } from "./news-card.style";

interface Props {
  index: number;
  item: NewsTypes.GetByIdResponse;
}

export const NewsCard = ({ index, item }: Props) => {
  const { by, time, title, score, id } = item;
  const { classes } = useStyles();

  const router = useHistory();
  let convertedTime = formatDistance(time * 1000, Date.now(), {
    addSuffix: true,
  });

  return (
    <Card
      p="sm"
      onClick={() => router.push(`/${id}`)}
      className={classes.container}
    >
      <Stack p={8} align="stretch" justify="center">
        <Title weight={500} order={3}>
          {title}
        </Title>
        <Group spacing="xs">
          <IconStar size={16} stroke={3} color="red" />
          <Text size="sm" color="red" fs="italic" fw={700}>
            {score} points
          </Text>
        </Group>
        <Group>
          <Avatar id={id} />

          <Text size="sm" color="dimmed" fs="italic" fw={700}>
            {by}
          </Text>

          <Text size="sm" color="dimmed" fs="italic">
            {convertedTime}
          </Text>
        </Group>
      </Stack>
    </Card>
  );
};
