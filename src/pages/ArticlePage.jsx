import React, { useState, useEffect } from "react";
import { getOneArticles } from "../utils/requests";
import { useParams } from "react-router-dom";
import Backdrop from "../components/Backdrop";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const getArticleInfo = async () => {
    const res = await getOneArticles(id);
    setArticleInfo(res.response.docs[0]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (id) {
      getArticleInfo();
    }
  }, [id]);

  return (
    <div>
      <span>Go Back</span>
      <h1>{articleInfo?.headline?.main || "No title"}</h1>
      <span>{articleInfo?.pub_date}</span>
      <span>{articleInfo?.snippet}</span>
      <a href={articleInfo.web_url}>
        <span>Read the full article</span>
      </a>
      <Backdrop open={loading} />
    </div>
  );
};

export default ArticlePage;
