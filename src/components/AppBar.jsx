import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const styles = makeStyles({
  appBar: {
    alignItems: "center",
  },
});

export default function DesktopAppBar() {
  const classes = styles();
  return (
    <Box sx={{ flexGrow: 1 }} display="flex">
      <AppBar position="static" color="secondary" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            "The New York Times" article search application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
