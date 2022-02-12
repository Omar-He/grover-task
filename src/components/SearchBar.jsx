import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useAppContext } from "../context/state";

export default function SearchBar() {
  const context = useAppContext();
  const [keyword, setKeyword] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);

  useEffect(() => {
    context.updateSearchTerm(keyword);
  }, [debouncedSearchTerm]);

  const onInputChange = (value) => {
    setKeyword(value.target.value);
  };
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        margin: "40px 0px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for an article"
        inputProps={{ "aria-label": "Search for an article" }}
        onChange={onInputChange}
        value={keyword}
      />
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
