import { NewsTypes } from "entities/news";

import styles from "./news-description.module.scss";

export const NewsDescription = ({
  item,
}: {
  item: NewsTypes.GetByIdResponse;
}) => {
  let date = new Date(item.time * 1000); // todo: date add time

  return (
    <div>
      <h2 className={styles.title}>{item.title}</h2>
      <div className={styles.about}>
        <h3 className={styles.username}>by {item.by}</h3>
        <p className={styles.username}> {date.toLocaleDateString("ru-Ru")}</p>
        <p className={styles.username}> {item.url}</p>
        <p className={styles.username}>
          Counts of comments: {item.descendants}
        </p>
      </div>
    </div>
  );
};
