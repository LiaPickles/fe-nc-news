import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-a5kg.onrender.com/api",
});

export const getArticles = (article_id) => {
  if (article_id) {
    return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
      return res.data.article;
    });
  } else {
    return ncNewsApi.get(`/articles`).then((res) => {
      return res.data;
    });
  }
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (article_id, newVotes) => {
  return ncNewsApi.patch(`/articles/${article_id}`, newVotes).then((res) => {
    return res.data.article;
  });
};

export const postArticleComments = (article_id, commentObj) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, commentObj)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (commentId) => {
  return ncNewsApi.delete(`/comments/${commentId}`).then((res) => {
    return res.data;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticlesByTopic = (topic) => {
  return ncNewsApi
    .get("/articles", { params: { topics: topic } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticlesWithQuery = (sortByQuery) => {
  return ncNewsApi
  .get("/articles", {params: {sort_by: sortByQuery}})
  .then((res) => {
    return res.data.articles
  })
}
