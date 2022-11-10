import { useHistory } from "react-router-dom";
import { formatDistance } from "date-fns";
import React from "react";

import { OneNew } from "../../store/news-store/news-slice";

import styles from "./news-card.module.scss";

interface Props {
  num: number;
  news: OneNew;
}

export const NewsCard = ({ num, news }: Props) => {
  const router = useHistory();
  let time = formatDistance(news.time * 1000, Date.now(), {
    addSuffix: true,
  });

  return (
    <div
      onClick={() => router.push(`/news/${news.id}`)}
      className={styles.container}
    >
      <h2 className={styles.title}>
        {num}. {news.title}
      </h2>
      <div className={styles.about}>
        <h3 className={styles.username}>by {news.by}</h3>
        <p className={styles.rating}>{news.score} points</p>
        <p className={styles.username}>{time}</p>
      </div>
    </div>
  );
};
