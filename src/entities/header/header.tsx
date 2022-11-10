import React from "react";
import styles from "./header.module.scss";
import { useAppDispatch } from "../../features/hooks/hooks";
import { getAllNews } from "../../store/news-store/action-creators";

export const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Fake News</h1>
      <button onClick={() => dispatch(getAllNews())} className={styles.update}>
        Update news
      </button>
    </header>
  );
};
