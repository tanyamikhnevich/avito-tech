import { NewsTypes } from "entities/news";
import { Avatar } from "../../../../widgets";
import { Group, Stack, Text } from "@mantine/core";

export const NewsDescription = ({
  item,
}: {
  item: NewsTypes.GetByIdResponse;
}) => {
  let date = new Date(item.time * 1000); // todo: date add time

  return (
    <div>
      <Stack bg={"gray.2"} p={10}>
        <Text weight={500} size={25}>
          {item.title}
        </Text>
        <Text size={20}>{item.url}</Text>
        <Group>
          <Avatar id={item.id} />
          <Text fw={600} fs="italic">
            {item.by}
          </Text>
          <Text fw={600} fs="italic">
            {date.toLocaleDateString("ru-Ru")}
          </Text>
        </Group>
        <Text size={18} fs="italic">
          See {item.descendants} comments
        </Text>
      </Stack>
    </div>
  );
};
