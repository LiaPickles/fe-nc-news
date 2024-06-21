import "../App.css";
import ArticleCard from "./article-card";
import { useState, useEffect } from "react";
import { getArticles, getArticlesByTopic, getArticlesWithQuery } from "../api";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import SingleArticle from "./single-article";
import Topics from "./topics";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const { article_id, topic } = useParams();
  
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get('sort_by')
  

  useEffect(() => {
    setIsLoading(true);
    if (topic) {
      getArticlesByTopic(topic).then((articlesByTopic) => {
        setArticles(articlesByTopic);
        setIsLoading(false);
      });
    } 
    if (sortBy) {
      getArticlesWithQuery(sortBy).then((sortedArticles) => {
        setArticles(sortedArticles, 'sortedArticles in content')
        setIsLoading(false)
      })

    }
    
    
    else {
      getArticles(article_id).then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
  }, [article_id, topic, sortBy]);

  const handleSelectedArticle = (article) => {
    navigate(`/articles/${article.article_id}`);
  };

  const handleDateSort = () => {
    navigate('/articles?sort_by=created_at')
  }

  const handleCommentSort = () => {
    navigate('/articles?sort_by=comment_count')
  }

  const handleVoteSort = () => {
    navigate('/articles?sort_by=votes')
  }

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  if (article_id) {
    return <SingleArticle />;
  }

  return (
    <div>
      <DropdownButton title="Sort By">
        <Dropdown.Item onClick={() => handleDateSort()}>Date</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCommentSort()}>Comment Count</Dropdown.Item>
        <Dropdown.Item onClick={() => handleVoteSort()}>Votes</Dropdown.Item>
      </DropdownButton>
      <DropdownButton title="Order By">
        <Dropdown.Item>Ascending</Dropdown.Item>
        <Dropdown.Item>Descending</Dropdown.Item>
      </DropdownButton>
    <section>
      <Topics articles={articles} />
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
    </section>
    </div>
  );
};

export default Content;
