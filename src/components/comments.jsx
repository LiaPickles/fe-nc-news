import { getComments } from "../api";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import PostComment from "./post-comment.jsx";

const Comments = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [err, setErr] = useState([])

  useEffect(() => {
    fetchComments()
  }, [article_id]);

  const fetchComments = () => {
    getComments(article_id).then((comments) => {
      setArticleComments(comments);
      setErr(null)
    }).catch((error) => {
      setErr('error fetching comments')
    })

  }

  const handlePostedComments = (newComment) => {
    const commentObj = {comment_id: `temp-id-${Date.now()}`, body: newComment}
    setArticleComments((prevComments) => [...prevComments, commentObj])
    setErr(null)
    fetchComments()

  }

  return (
    <Container>
      {err ? <p>{err}</p> : null}
      {articleComments.map((comment) => (
        <div key={comment.comment_id}>
        <p><strong>Comment: </strong>{comment.body}</p>
        <p className="comment-info"><strong>Author:</strong> {comment.author} <strong>Votes: </strong>{comment.votes} <strong>Created at:</strong> {comment.created_at}</p>
        </div>
        
      ))}
    <PostComment article_id={article_id} handlePostedComments={handlePostedComments} />  
    </Container>
    
  );
};

export default Comments;
