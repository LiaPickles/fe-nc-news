import { getComments } from "../api";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setArticleComments(comments);
    });
  }, []);

  return (
    <Container>
      {articleComments.map((comment) => (
        <div key={comment.comment_id}>
        <p><strong>Comment: </strong>{comment.body}</p>
        <p className="comment-info"><strong>Author:</strong> {comment.author} <strong>Votes: </strong>{comment.votes} <strong>Created at:</strong> {comment.created_at}</p>
        </div>
        
      ))}
    </Container>
  );
};

export default Comments;
