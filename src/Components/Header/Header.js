import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Music Store
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
