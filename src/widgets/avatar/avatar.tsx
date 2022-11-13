import React, { useEffect } from "react";
import { useActions, useAppSelector } from "../../features/hooks";
import { Avatar as AvatarMantine } from "@mantine/core";

interface Props {
  id: number;
}

export const Avatar = ({ id }: Props) => {
  const { avatar } = useAppSelector((state) => state.avatar);
  const img = avatar[id];
  const { getAvatar } = useActions();
  useEffect(() => {
    getAvatar(id);
  }, []);

  return (
    <div>
      {avatar ? (
        <AvatarMantine src={img} radius="xl" />
      ) : (
        <AvatarMantine radius="xl" />
      )}
    </div>
  );
};
