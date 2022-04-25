/* eslint-disable no-undef */
import { Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const Preview = ({ breadcrumbdata, coverUrl }) => {
  return (
    <Box sx={{ marginTop: "24px" }}>
      <Box
        sx={{
          padding: "19px 24px",
          backgroundColor: "#F3F4F6",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          height: "57vh",
        }}
      >
        <img
          alt={breadcrumbdata.name}
          src={`${process.env.REACT_APP_PUBLIC_URL}${coverUrl}`}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

Preview.propTypes = {
  breadcrumbdata: PropTypes.object.isRequired,
  coverUrl: PropTypes.string.isRequired,
};

export default Preview;
