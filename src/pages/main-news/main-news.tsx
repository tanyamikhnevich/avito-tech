import React, { useEffect } from "react";

import { Header } from "../../entities/header/header";
import { NewsCard } from "../../entities/news-card/news-card";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { getAllNews } from "../../store/news-store/action-creators";

//Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
// Список новостей должен автоматически обновляться раз в минуту без участия пользователя

export const MainNews = () => {
  const { error, isLoading, news } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <div>
      <Header />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {news.map((news, index) => (
        <NewsCard num={index + 1} key={news.id} news={news} />
      ))}
    </div>
  );
};
