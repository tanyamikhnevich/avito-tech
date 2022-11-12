import React, { useEffect } from "react";

import { Header } from "widgets/header/header";
import { NewsCard } from "widgets/news-card/news-card";
import { useAppSelector } from "features/hooks";
import { useActions } from "features/hooks";

export const NewsList = () => {
  const { error, isLoading, news } = useAppSelector((state) => state.news);
  const { getAllNews } = useActions();

  useEffect(() => {
    getAllNews();
    const intervalNews = setInterval(() => {
      getAllNews();
    }, 60000);
    return () => {
      clearInterval(intervalNews);
    };
  }, []);

  return (
    <div>
      <Header />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {news.map((news, index) => (
        <NewsCard
          index={index + 1}
          key={news.id}
          item={news}
          data-testid="news-item"
        />
      ))}
    </div>
  );
};
