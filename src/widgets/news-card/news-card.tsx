import { useHistory } from "react-router-dom";
import { formatDistance } from "date-fns";

import styles from "./news-card.module.scss";
import { type NewsTypes } from "entities/news/api";
import { Title, Text } from "@mantine/core";

interface Props {
  index: number;
  item: NewsTypes.GetByIdResponse;
}

export const NewsCard = ({ index, item }: Props) => {
  const { by, time, title, score, id } = item;

  const router = useHistory();
  let convertedTime = formatDistance(time * 1000, Date.now(), {
    addSuffix: true,
  });

  return (
    <div onClick={() => router.push(`/${id}`)} className={styles.container}>
      <Title order={3}>
        {index}. {title}
      </Title>
      <div className={styles.about}>
        <Text fs="italic" mr={10}>
          Author: {by}
        </Text>
        <Text mr={10} fs="italic">
          {score} points
        </Text>
        <Text mr={10} fs="italic">
          {convertedTime}
        </Text>
      </div>
    </div>
  );
};
