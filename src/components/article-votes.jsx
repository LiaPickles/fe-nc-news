import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getArticles, patchArticleVotes } from "../api";

const ArticleVotes = ({ article_id }) => {
  const [articleVotes, setArticleVotes] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticles(article_id)
      .then((article) => {
        setArticleVotes(article.votes);
      })
      .catch((err) => {
        console.error("Error fetching votes:", err);
      });
  }, [article_id]);

  const handleVote = (increment) => {
    const originalVotes = articleVotes;
    const newVotes = articleVotes + increment;
    setArticleVotes(newVotes);
    setErr(null);

    patchArticleVotes(article_id, { inc_votes: increment })
      .then((article) => {
        setArticleVotes(article.votes);
      })
      .catch((err) => {
        setArticleVotes(originalVotes);
        setErr("something went wrong, please try again");
      });
  };

  const handleUpVote = () => {
    handleVote(1);
  };

  const handleDownVote = () => {
    handleVote(-1);
  };

  return (
    <Container>
      Votes: {articleVotes}
      {err ? <p>{err}</p> : null}
      <button onClick={handleUpVote}>Vote up</button>
      <button onClick={handleDownVote}>Vote down</button>
    </Container>
  );
};

export default ArticleVotes;
