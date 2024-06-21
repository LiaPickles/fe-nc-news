import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useEffect } from "react";
import { getTopics, getArticlesByTopic } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Topics = ({ articles }) => {
  const [dropdownTopics, setDropdownTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleDropdownTopics = (event) => {
    getTopics().then((topics) => {
      setDropdownTopics(topics);
      setIsLoading(false);
    });
  };

  const handleSelectedTopic = (slug) => {
    navigate(`/articles/topic/${slug}`);
  };

  const handleSelectedArticle = (article) => {
    navigate(`/articles/${article.article_id}`);
  };


  return (
    <div>
      <DropdownButton
        onClick={handleDropdownTopics}
        id="dropdown-basic-button"
        title="Topic"
      >
        {dropdownTopics.map((dropdownTopic) => (
          <Dropdown.Item
            key={dropdownTopic.slug}
            onClick={() => handleSelectedTopic(dropdownTopic.slug)}
          >
            {dropdownTopic.slug}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <section className="items-grid">
        {articles.map((article) => (
          <Card key={article.article_id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={article.article_img_url}
              onClick={() => handleSelectedArticle(article)}
            />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>Topic: {article.title}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Author: {article.author}</ListGroup.Item>
              <ListGroup.Item>Created at: {article.created_at}</ListGroup.Item>
              <ListGroup.Item>Votes: {article.votes}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Topics;
