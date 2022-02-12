import React from "react";
import Container from "@mui/material/Container";
import AppBar from "../components/AppBar";
import Box from "@mui/material/Box";
import ArticleList from "../components/ArticleList";

const HomePage = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <ArticleList />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
