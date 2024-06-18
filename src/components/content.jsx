import "../App.css";
import ArticleCard from "./article-card";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import SingleArticle from "./single-article";

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();
  const { article_id } = useParams();
 

  useEffect(() => {
    setIsLoading(true);
    getArticles(article_id).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleSelectedArticle = (article) => {
    navigate(`/articles/${article.article_id}`);
  };

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  if (article_id) {
    return (
      <SingleArticle />
    )
  }

  return (
    <section className="items-grid">
      {articles.map((article) => (
        <div
          key={article.article_id}
          onClick={() => handleSelectedArticle(article)}
        >
          <ArticleCard article={article} />
        </div>
      ))}
    </section>
  );
};

export default Content;
