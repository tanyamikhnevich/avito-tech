import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useActions, useAppSelector } from "features/hooks";
import { PUBLIC_PATH } from "shared/config";
import { NewsComments, NewsDescription } from "./ui";

import styles from "./news-item.module.scss";

type TParams = { id?: string | undefined };

export const NewsItem = () => {
  const { id } = useParams<TParams>();
  const {
    displayedNewsItem: item,
    isLoading,
    error,
  } = useAppSelector((state) => state.news);
  const { getNewsById } = useActions();

  useEffect(() => {
    if (!id) return;
    getNewsById(Number(id));
  }, []);

  if (!item || isLoading || error) return <div>Loading</div>;

  return (
    <div className={styles.container}>
      <Link to={PUBLIC_PATH.NEWS_LIST} className={styles.title}>
        To all news
      </Link>
      <NewsDescription item={item} />
      <NewsComments id={item.id} />
    </div>
  );
};
