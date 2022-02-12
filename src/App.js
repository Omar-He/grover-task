import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppWrapper } from "../src/context/state";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </AppWrapper>
  );
}
