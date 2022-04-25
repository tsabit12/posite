import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const StyledButton = styled(Button)(({ theme, isactive }) => ({
  backgroundColor: isactive === "true" ? "#FFF" : "transparent",
  height: "40px",
  "&:hover": {
    backgroundColor: isactive === "true" ? "#FFF" : "#F5F7FB",
  },
  color: isactive === "true" ? "#017EFA" : "#A9ABB0",
  fontSize: "18px",
  fontWeight: "400",
  borderRadius: "6px",
}));

const ButtonGroup = ({ activeButton, handleClick }) => {
  return (
    <Stack direction={"row"} justifyContent="flex-end">
      <Stack
        direction={"row"}
        sx={{
          backgroundColor: "#F5F7FB",
          borderRadius: "8px",
          padding: "4px",
          width: {
            xs: "100%",
            lg: "328px",
          },
        }}
        spacing="4px"
      >
        <StyledButton
          disableRipple
          isactive={activeButton === 1 ? "true" : "false"}
          onClick={() => handleClick(1)}
          sx={{
            width: {
              lg: "107px",
              xs: "100%",
            },
          }}
        >
          Daily
        </StyledButton>
        <StyledButton
          disableRipple
          isactive={activeButton === 2 ? "true" : "false"}
          onClick={() => handleClick(2)}
          sx={{
            width: {
              lg: "107px",
              xs: "100%",
            },
          }}
        >
          Weekly
        </StyledButton>
        <StyledButton
          disableRipple
          isactive={activeButton === 3 ? "true" : "false"}
          onClick={() => handleClick(3)}
          sx={{
            width: {
              lg: "107px",
              xs: "100%",
            },
          }}
        >
          Monthly
        </StyledButton>
      </Stack>
    </Stack>
  );
};

ButtonGroup.propTypes = {
  activeButton: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonGroup;
