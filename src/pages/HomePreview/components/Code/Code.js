/* eslint-disable no-undef */
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CodeEditorEditable } from "react-code-editor-editable";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "highlight.js/styles/dracula.css";
import api from "../../../../api";
import styled from "@emotion/styled";
import { ErrorMessage } from "../../../../Element";

const CopyButton = styled(Button)({
  background: "#E0E0E0",
  position: "absolute",
  right: "16px",
  top: "16px",
  zIndex: 1,
  borderRadius: "10px",
  padding: "5px",
  cursor: "pointer",
  width: "50px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    background: "#E0E0E0",
  },
});

const Code = ({ codeurl }) => {
  const [value, setvalue] = useState("");
  const [copied, setcopied] = useState(false);

  useEffect(() => {
    if (codeurl) {
      (async () => {
        try {
          const source = await api.source.getcode(codeurl);
          setvalue(source);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setcopied(false);
      }, 1400);
    }
  }, [copied]);

  const filetype = codeurl.split(".");
  let languageType = filetype[filetype.length - 1];

  return (
    <Box sx={{ marginTop: "16px", position: "relative" }}>
      <ErrorMessage
        open={copied}
        handleClose={() => setcopied(false)}
        message="source code copied to clipboard"
        severity="success"
      />

      <CopyToClipboard text={value} onCopy={() => setcopied(true)}>
        <CopyButton>
          <center>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ep_copy-document.svg`}
              alt="copy-icon"
            />
            <Typography
              align="center"
              color="#081A51"
              fontWeight={"400"}
              lineHeight={"15px"}
              fontSize={"10px"}
            >
              Copy
            </Typography>
          </center>
        </CopyButton>
      </CopyToClipboard>
      <CodeEditorEditable
        value={value}
        setValue={setvalue}
        width="100%"
        height="57vh"
        language={languageType}
        inlineNumbers
        borderRadius="20px"
        caretColor={"red"}
      />
    </Box>
  );
};

Code.propTypes = {
  codeurl: PropTypes.string.isRequired,
};

export default Code;
