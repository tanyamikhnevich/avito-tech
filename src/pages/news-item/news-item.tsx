import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { getNewsById } from "../../store/news-store/action-creators";
import { Comments } from "../../widgets/comments/comments";

import styles from "./news-item.module.scss";
import { PUBLIC_PATH } from "shared/config";

// todo: сделать скрытие комента

export const NewsItem = () => {
  const { id } = useParams<{ id?: string | undefined }>();
  const dispatch = useAppDispatch();
  const { oneNew } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (!id) return;
    dispatch(getNewsById(Number(id)));
  }, []);
  if (!oneNew) return null;

  let date = new Date(oneNew.time * 1000);

  return (
    <div className={styles.container}>
      <Link to={PUBLIC_PATH.NEWS_LIST} className={styles.title}>
        To all news
      </Link>
      <h2 className={styles.title}>{oneNew.title}</h2>

      <div className={styles.about}>
        <h3 className={styles.username}>by {oneNew.by}</h3>
        <p className={styles.username}> {date.toLocaleDateString("ru-Ru")}</p>
        <p className={styles.username}> {oneNew.url}</p>
        <p className={styles.username}>
          Counts of comments: {oneNew.descendants}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(getNewsById(Number(id)));
        }}
      >
        Update comments
      </button>
      <Comments />
    </div>
  );
};
