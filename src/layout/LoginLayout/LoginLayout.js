import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { CssBaseline, Grid, Stack } from "@mui/material";

const LoginLayout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <Grid container sx={{ margin: 0, minHeight: "100vh" }}>
        <Grid item xs={12} lg={6} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box sx={{ height: "100%", backgroundColor: "#081A51" }} p={3}>
            <Stack
              direction={"row"}
              spacing={6}
              alignItems="center"
              sx={{ marginLeft: 5 }}
            >
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/logoputih.svg`}
                alt="Logo"
                style={{ width: "135px", height: "67px" }}
              />
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/bumn.svg`}
                alt="Logo BUMN"
                style={{ width: "184px", height: "110px" }}
              />
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/pos.svg`}
                alt="POS Indonesia"
                style={{ width: "87px", height: "58px" }}
              />
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "75%",
              }}
            >
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/Illustration.svg`}
                alt="Ilustrator"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ backgroundColor: "#E5E5E5" }}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginLayout;
