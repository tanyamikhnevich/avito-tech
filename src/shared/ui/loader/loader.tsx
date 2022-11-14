import React from "react";
import { Center, Loader as LoaderMantine } from "@mantine/core";

export const Loader = () => {
  return (
    <Center style={{ width: "100%" }}>
      <LoaderMantine color="red" size="xl" />
    </Center>
  );
};
