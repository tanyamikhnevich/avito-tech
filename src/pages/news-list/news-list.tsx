import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

import { UpdateNewsButton } from "widgets";
import { NewsCard } from "widgets/news-card/news-card";
import { useActions, useAppSelector } from "features/hooks";
import { Loader } from "shared/ui";

import "./news-list.css";

export const NewsList = () => {
  const { error, isLoading, news } = useAppSelector((state) => state.news);
  const { getAllNews, updateAllNews } = useActions();

  useEffect(() => {
    getAllNews();
    const intervalNews = setInterval(() => {
      updateAllNews();
    }, 60000);
    return () => {
      clearInterval(intervalNews);
    };
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    300: 1,
  };

  if (news.length === 0 && isLoading) return <Loader />;

  const item = {
    hidden: { opacity: 0, transition: { y: -300 } },
    show: {
      opacity: 1,
      transition: {
        y: 0,
        delay: 0.5,
      },
    },
  };

  return (
    <div>
      <UpdateNewsButton loading={isLoading} />
      {error && <div>{error}</div>}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {news.map((news, index) => (
          <motion.div
            key={news.id}
            whileHover={{ scale: 1.05 }}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <NewsCard item={news} />
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};
