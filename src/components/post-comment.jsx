import Container from "react-bootstrap/Container";
import {useState, useEffect} from "react"
import { postArticleComments, getComments } from "../api";

const PostComment = ({ article_id, handlePostedComments }) => {

const [commentInput, setCommentInput] = useState({username: '', body: ''})
const [err, setErr] = useState(null)
const [successfulPost, setSuccessfulPost] = useState(null)



const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setCommentInput(values => ({...values, [name]: value}))
}
 

const handleSubmit = (event) => {
  event.preventDefault()
  if (!commentInput.body) {
    setErr("No comment written");
    return;
  }
  postArticleComments(article_id, commentInput).then((comment) => {
    setSuccessfulPost('comment posted!')
    setErr(null)
    handlePostedComments(comment)
    setCommentInput({username: "", body: ""})
  })
  .catch((err) => {
    setErr('error posting comment')
  })
}


  return (
    <Container>
      Write a comment...
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" 
          name="username"
          value={commentInput.username || ""}
          onChange={handleChange}/>
        </label>
         <label>
            Comment:
            <input type="text"
            name="body"
            value={commentInput.body || ""}
            onChange={handleChange}></input>
        </label>
        <input type="submit" />
      </form>
      {err ? <p>{err}</p> : null}
      {successfulPost ? <p>{successfulPost}</p> : null}
      </Container>
  );
};

export default PostComment