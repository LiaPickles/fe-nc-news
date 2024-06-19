import "../App.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Comments from "./comments";
import ArticleVotes from "./article-votes";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticles(article_id).then((article) => {
      setSingleArticle(article);
    });
  }, [article_id]);

  if (!article_id) {
    return <p>Loading...</p>;
  }

  return (
    <Container fluid className="article"> 
      <Row className="justify-content-center mt-3">
        <Col xs={12} className="text-center">
          <h2>{singleArticle.title}</h2>
        </Col>
      </Row>
      <img src={singleArticle.article_img_url} />
      <ul>
        <p>{singleArticle.body}</p>
        <p>Author: {singleArticle.author}</p>
        <p>Created At: {singleArticle.created_at}</p>
        <ArticleVotes article_id={article_id}/>
        <p>Comments: {singleArticle.comment_count}</p>
      </ul>
      <Comments article_id={article_id}/>
    </Container>
    
  );
};

export default SingleArticle;
