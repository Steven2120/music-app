import React, { Fragment } from "react";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box p={4} sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
