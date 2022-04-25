/* eslint-disable no-undef */
import { IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";

const MenuIcon = styled(IconButton)({
  backgroundColor: "#FFF",
  "&:hover": {
    backgroundColor: "#FFF",
  },
  width: "45px",
  height: "45px",
  marginRight: "-20px",
  border: "1px solid #DADADA",
});

const Title = ({ onClick, drawerIsOpen }) => {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      sx={{
        height: "100%",
        width: "280px",
        backgroundColor: "#081A51",
      }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        minHeight={"90px"}
        sx={{ width: "100%" }}
      >
        <img
          src={`${process.env.REACT_APP_PUBLIC_URL}/assets/logoputih.svg`}
          alt="logo"
        />
      </Box>
      <MenuIcon onClick={onClick}>
        {drawerIsOpen ? (
          <ArrowBackIosIcon sx={{ color: "#445BFF", fontSize: "16px" }} />
        ) : (
          <ArrowForwardIosIcon sx={{ color: "#445BFF", fontSize: "16px" }} />
        )}
      </MenuIcon>
    </Stack>
  );
};

Title.propTypes = {
  onClick: PropTypes.func.isRequired,
  drawerIsOpen: PropTypes.bool.isRequired,
};

export default Title;
