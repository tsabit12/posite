/* eslint-disable no-undef */
import { IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";

const InputComponent = (props) => {
  const { inputProps, label, isScure, scurityInput, setScure } = props;

  let icon = "ant-design_eye-outlined.svg";

  if (isScure) icon = "ant-design_eye-invisible-outlined.svg";

  return (
    <Box>
      <Typography variant="label">{label}</Typography>
      <Paper
        elevation={0}
        sx={{
          padding: "15px 20px",
          borderRadius: "5px",
          border: "1px solid #cfcfcf",
          backgroundColor: "#E5E5E5",
        }}
      >
        <Stack direction={"row"} justifyContent="space-between">
          <InputBase
            {...inputProps}
            sx={{ width: "100%" }}
            type={isScure ? "password" : "text"}
          />

          {scurityInput && (
            <IconButton sx={{ padding: 0 }} disableRipple onClick={setScure}>
              <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/${icon}`}
                alt="eye-icon"
              />
            </IconButton>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

InputComponent.defaultProps = {
  isScure: false,
  scurityInput: false,
};

InputComponent.propTypes = {
  inputProps: PropTypes.object,
  label: PropTypes.string,
  isScure: PropTypes.bool,
  scurityInput: PropTypes.bool,
  setScure: PropTypes.func,
};

export default InputComponent;
