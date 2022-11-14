import { type NewsTypes } from "entities/news";
import { Avatar } from "widgets";
import { convertedTimeNow } from "shared/utils/converted-time-now";

import { useStyles } from "./news-description.style";
import { Group, Space, Stack, Text, Title } from "@mantine/core";
import { IconMessage } from "@tabler/icons";

export const NewsDescription = ({
  item,
}: {
  item: NewsTypes.GetByIdResponse;
}) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      <Title order={1}>{item.title}</Title>
      <Text color="gray.7" size="lg">
        {item.url}
      </Text>

      <Space h="xs" />
      <Group position="apart" align="flex-end">
        <Avatar id={item.id} by={item.by} />

        <Stack align="flex-end" spacing="xs">
          <Text size="sm" color="dimmed" fs="italic">
            {convertedTimeNow(item.time)}
          </Text>
          <Group>
            <IconMessage size={16} stroke={3} color="red" />
            <Text size="sm" color="red" fs="italic" fw={700}>
              {item.descendants} comments
            </Text>
          </Group>
        </Stack>
      </Group>
    </Stack>
  );
};
