import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArticleList from "./components/ArticleList";
import AppBar from "./components/AppBar";
import { AppWrapper } from "../src/context/state";

export default function App() {
  return (
    <AppWrapper>
      <AppBar />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <ArticleList />
        </Box>
      </Container>
    </AppWrapper>
  );
}
