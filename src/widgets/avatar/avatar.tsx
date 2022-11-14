import React, { useEffect } from "react";
import { useActions, useAppSelector } from "../../features/hooks";
import { Avatar as AvatarMantine, Group, Text } from "@mantine/core";

interface Props {
  id: number;
  by: string;
}

export const Avatar = ({ id, by }: Props) => {
  const { avatar } = useAppSelector((state) => state.avatar);
  const img = avatar[id];
  const { getAvatar } = useActions();

  useEffect(() => {
    if (img) return;
    getAvatar(id);
  }, []);

  return (
    <Group spacing="xs">
      {avatar ? (
        <AvatarMantine src={img} radius="xl" />
      ) : (
        <AvatarMantine radius="xl" />
      )}
      <Text size="sm" color="dimmed" fs="italic" fw={700}>
        {by}
      </Text>
    </Group>
  );
};
