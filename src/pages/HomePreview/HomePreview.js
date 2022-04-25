/* eslint-disable react/prop-types */
import { Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { Box } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Code, Header, Preview } from "./components";
import { connect } from "react-redux";
import api from "../../api";

const HomePreview = (props) => {
  const [activePage, setactivePage] = useState("preview");

  let isExistPage = false;
  let breadcrumbdata = {};
  let framework = props.source;

  useEffect(() => {
    if (Object.keys(props.source).length <= 0) {
      props.history.replace("/home/hero");
    }
    //eslint-disable-next-line
     }, [props.source]);

  if (props.location.search) {
    isExistPage = true;
    breadcrumbdata = queryString.parse(props.location.search);
  }

  const handleDownload = async () => {
    try {
      const codeurl = props.source.code;
      var getfileType = codeurl.split(".");
      getfileType = getfileType[getfileType.length - 1];
      getfileType = `${props.source.title}.${getfileType}`;
      getfileType = getfileType.replace(/ /g, "");

      await api.source.download(props.source.code, getfileType);
    } catch (error) {
      console.log({ error });
    }
  };

  if (isExistPage) {
    return (
      <Box>
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
          <Typography>{breadcrumbdata.type}</Typography>
          <Typography>{breadcrumbdata.name}</Typography>
        </Breadcrumbs>
        <Box sx={{ marginTop: "16px" }}>
          <Header
            title={breadcrumbdata.name}
            framework={framework}
            activePage={activePage}
            onChangePage={(value) => setactivePage(value)}
            onDownload={handleDownload}
          />

          {activePage === "preview" ? (
            <Preview breadcrumbdata={breadcrumbdata} coverUrl={framework.img} />
          ) : (
            <Code codeurl={framework.code} />
          )}
        </Box>
      </Box>
    );
  }

  return <Typography>Not found</Typography>;
};

HomePreview.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  source: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    source: state.source,
  };
}

export default connect(mapStateToProps, null)(HomePreview);
