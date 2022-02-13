import React from "react";
import Container from "@mui/material/Container";
import AppBar from "../components/AppBar";
import Box from "@mui/material/Box";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="md" id="container">
        <Box sx={{ my: 10 }}>
          <SearchBar />
          <ArticleList />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
