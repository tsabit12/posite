/* eslint-disable no-undef */
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const NotFound = (props) => {
  return (
    <Box>
      <Stack direction={"row"} justifyContent="center">
        <img
          src={`${process.env.REACT_APP_PUBLIC_URL}/assets/404.svg`}
          alt="404"
          style={{ width: "382px", height: "382px" }}
        />
      </Stack>
      <Stack spacing="22px">
        <Box>
          <Typography variant="h4" color="#081A51" textAlign="center">
            Sepertinya ada yang tidak beres
          </Typography>
          <Typography
            textAlign={"center"}
            variant="h5"
            textTransform={"none"}
            color="rgba(37, 39, 63, 0.7)"
            fontWeight="400"
            letterSpacing={"0.025em"}
          >
            Silakan klik tombol di bawah untuk kembali ke Beranda
          </Typography>
        </Box>
        <Stack direction={"row"} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ height: "64px", padding: "20px 60px" }}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.history.replace("/home")}
          >
            Kembali ke Beranda
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NotFound;
