import React from "react";
import Container from "@mui/material/Container";
import AppBar from "../components/AppBar";
import Box from "@mui/material/Box";
import ArticleDetails from "../components/ArticleDetails";

const HomePage = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="md">
        <Box sx={{ my: 10 }}>
          <ArticleDetails />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
