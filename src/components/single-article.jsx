import "../App.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <p>Votes: {singleArticle.votes}</p>
        <p>Comments: {singleArticle.comment_count}</p>
      </ul>
    </Container>
  );
};

export default SingleArticle;
