import { getComments, deleteComment } from "../api";
import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import PostComment from "./post-comment.jsx";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import { UserContext } from "../user-context.jsx";

const Comments = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const [articleComments, setArticleComments] = useState([]);
  const [err, setErr] = useState(null);
  const [commentDeleted, setCommentDeleted] = useState(null)
  const [commentDeleteErr, setCommentDeleteErr] = useState(null)

  useEffect(() => {
    fetchComments();
  }, [article_id]);

  const fetchComments = () => {
    getComments(article_id)
      .then((comments) => {
        setArticleComments(comments);
        setErr(null);
      })
      .catch((error) => {
        setErr("error fetching comments");
      });
  };

  const handlePostedComments = (newComment) => {
    const commentObj = {
      comment_id: `temp-id-${Date.now()}`,
      body: newComment,
    };
    setArticleComments((prevComments) => [...prevComments, commentObj]);
    setErr(null);
    fetchComments();
  };

  const handleDeleteButton = (commentId) => {
    setArticleComments((currentComments) => currentComments.filter((comment => comment.comment_id !== commentId)))
    setCommentDeleteErr('deleting comment...')
    deleteComment(commentId).then(() => {
      fetchComments()
      setCommentDeleted('comment deleted')
      setCommentDeleteErr(null)
    })
    .catch((err) => {
      setArticleComments(articleComments)
      setCommentDeleteErr('error deleting comment')
      setCommentDeleted(null);
    })
    
  }

  return (
    <Container>
      {err ? <p>{err}</p> : null}
      {commentDeleted && <p>{commentDeleted}</p>}
      {commentDeleteErr && <p>{commentDeleteErr}</p>}
      {articleComments.map((comment) => (
        <Card key={comment.comment_id}>
          <Card.Body>
            <div>
              <p className="comment-body">
                <strong>Comment: </strong>
                {comment.body}
              </p>
              {comment.author === user && <CloseButton 
              onClick={() => handleDeleteButton(comment.comment_id)}
              className="close-button" />}
              <p className="comment-info">
                <strong>Author:</strong> {comment.author}{" "}
                <strong>Votes: </strong>
                {comment.votes} <strong>Created at:</strong>{" "}
                {comment.created_at}
              </p>
            </div>
          </Card.Body>
        </Card>
      ))}
      <PostComment
        article_id={article_id}
        handlePostedComments={handlePostedComments}
      />
    </Container>
  );
};

export default Comments;
