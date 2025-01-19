import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Search, ShoppingCart, Person } from "@mui/icons-material";

const Header = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
        FashionFind
      </Typography>
      <div>
        <IconButton color="secondary">
          <Search />
        </IconButton>
        <IconButton color="secondary">
          <ShoppingCart />
        </IconButton>
        <IconButton color="secondary">
          <Person />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
