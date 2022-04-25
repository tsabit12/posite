/* eslint-disable react/prop-types */
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FrameworkList, FrameworkMenu } from "./components";
import listbagian from "../../dummy/bagianhero.json";
import { handleAxiosError } from "../../utils";
import { ErrorMessage } from "../../Element";
import api from "../../api";
import { connect } from "react-redux";
import { setSource } from "../../actions/source";
import PropTypes from "prop-types";

const HomeHero = (props) => {
  const [componentlist, setcomponentlist] = useState([]);
  const [errors, seterrors] = useState({});

  const handlePreview = (component) => {
    props.setSource(component);
    props.history.push(
      `/home/preview?type=Bagian Hero&name=${component.title}&id=${component.id}`
    );
  };

  const handleChangeMenu = async (categoryid, frameworkid) => {
    try {
      const { resData } = await api.source.list({
        framework: frameworkid,
        category: categoryid,
      });
      setcomponentlist(resData.result);
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (response) => {
    const { code, message } = handleAxiosError(response);
    seterrors({ global: `${code} | ${message}` });
  };

  return (
    <Box>
      <ErrorMessage
        open={!!errors.global}
        handleClose={() =>
          seterrors((prev) => ({ ...prev, global: undefined }))
        }
        message={errors.global}
      />

      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          onClick={() => props.history.replace("/home")}
          sx={{ cursor: "pointer" }}
        >
          Beranda
        </Link>
        <Typography>Bagian Hero</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/assets/unsplash__x335IZXxfc.png)`,
          height: "7vh",
          backgroundSize: "cover",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          padding: "0 59px 0 59px",
          marginTop: "16px",
        }}
      >
        <Typography variant="h4">Bagian Hero</Typography>
      </Box>
      <Grid container spacing={"21px"} sx={{ marginTop: "24px" }}>
        <Grid item xs={12} lg={3}>
          <FrameworkMenu
            headers={listbagian}
            onChange={handleChangeMenu}
            onError={handleError}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <FrameworkList list={componentlist} onPreview={handlePreview} />
        </Grid>
      </Grid>
    </Box>
  );
};

HomeHero.propTypes = {
  setSource: PropTypes.func.isRequired,
};

export default connect(null, { setSource })(HomeHero);
