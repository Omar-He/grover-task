import React, { useState, useEffect } from "react";
import { getOneArticles } from "../utils/requests";
import Backdrop from "../components/Backdrop";
import { Button, Typography, Box } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate, useParams } from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

const ArticleDetails = () => {
  const [articleInfo, setArticleInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const readMore = () => {
    const link = document.createElement("a");
    link.href = articleInfo.web_url;
    link.target = "_blank";
    link.click();
  };
  const goToList = () => {
    navigate("/articles");
  };
  return (
    <>
      {!loading && (
        <div>
          <Button
            variant="outlined"
            onClick={goToList}
            size="small"
            id="back-list"
          >
            <ArrowLeftIcon fontSize="small" />
            Articles List
          </Button>
          <Box mt={4}>
            <Typography variant="h4" marginTop={"20px"}>
              {articleInfo?.headline?.main || "No title"}
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="subtitle1" color="gray">
              {dateFormatter(articleInfo?.pub_date)}{" "}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontSize={18} color="secondary">
              {articleInfo?.snippet}
            </Typography>
          </Box>
          <Box
            mt={6}
            display="flex"
            justifyContent="flex-end"
            id="full-details"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={readMore}
              size="small"
            >
              Read full article
              <ArrowRightIcon fontSize="small" />
            </Button>
          </Box>
        </div>
      )}
      <Backdrop open={loading} />
    </>
  );
};

export default ArticleDetails;
