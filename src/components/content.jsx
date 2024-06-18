import "../App.css";
import ArticleCard from "./article-card";
import { useState, useEffect } from "react";
import { getArticles } from "../api";

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  return (
    <section className="items-grid">
      {allArticles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </section>
  );
};



export default Content;
