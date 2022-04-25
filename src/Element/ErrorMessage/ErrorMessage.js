import { Alert, Snackbar, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ open, handleClose, message, severity }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      key="snackbar"
    >
      <Alert onClose={handleClose} variant="filled" severity={severity}>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "600px",
            color: "#FFF",
            fontSize: "14px",
            marginTop: "-3px",
          }}
        >
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

ErrorMessage.defaultProps = {
  message: "Oppss something wrong",
  severity: "error",
};

ErrorMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  severity: PropTypes.string,
};

export default ErrorMessage;
