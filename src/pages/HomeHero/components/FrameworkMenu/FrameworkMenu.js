/* eslint-disable no-undef */
import {
  alpha,
  Box,
  Button,
  Chip,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import api from "../../../../api";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 300,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const getlabel = (value) => {
  switch (value) {
    case "00":
      return { label: "Semua Framework", img: null };
    case 1:
      return {
        label: "HTML",
        img: `${process.env.REACT_APP_PUBLIC_URL}/assets/icon/html.svg`,
      };
    case 2:
      return {
        label: "React",
        img: `${process.env.REACT_APP_PUBLIC_URL}/assets/icon/react.svg`,
      };
    case 3:
      return {
        label: "Bootstrap",
        img: `${process.env.REACT_APP_PUBLIC_URL}/assets/icon/bootstrap.svg`,
      };
    case 4:
      return {
        label: "Tailwind",
        img: `${process.env.REACT_APP_PUBLIC_URL}/assets/icon/tailwindcss.svg`,
      };
    default:
      return { label: "Semua Framework", img: null };
  }
};

const ButtonOptions = styled(Button)({
  backgroundColor: "#FFF",
  border: "0.5px solid rgba(0, 0, 0, 0.2)",
  color: "rgba(37, 39, 63, 0.7)",
  fontSize: "14px",
  lineHeight: "21px",
  fontWeight: "400",
  height: "54px",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "#FFF",
  },
});

const FrameworkMenu = ({ headers, onChange, onError }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setvalue] = useState("41");
  const [data, setdata] = useState([]);
  const [activeIndex, setactiveIndex] = useState(0);
  const open = Boolean(anchorEl);

  useEffect(() => {
    (async () => {
      let idx = headers[activeIndex] ? headers[activeIndex].id : 0;
      try {
        const { resData } = await api.source.category({
          framework: parseInt(value),
        });
        setdata(resData.result);
        onChange(idx, value);
      } catch (error) {
        onError(error);
      }
    })();

    //eslint-disable-next-line
     }, [value]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val) => {
    if (val) setvalue(val);

    setAnchorEl(null);
  };

  const handleChange = async (i) => {
    setactiveIndex(i);
    const val = data[i].category_id;
    onChange(val, value);
  };

  const { label, img: labelImg } = getlabel(value);

  return (
    <React.Fragment>
      <Typography variant="h5">framework</Typography>
      <Box sx={{ marginTop: "1vh" }}>
        <ButtonOptions
          fullWidth
          endIcon={<KeyboardArrowDownIcon />}
          aria-controls={open ? "framework-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {labelImg !== null && (
              <img src={labelImg} alt="icons" style={{ marginRight: "5px" }} />
            )}
            <span>{label}</span>
          </Box>
        </ButtonOptions>
      </Box>

      <Box sx={{ marginTop: "1vh" }}>
        <Stack spacing={"4px"}>
          {data.map((row, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
                backgroundColor: index === activeIndex ? "#F2F2F2" : "none",
                padding: "7px 15px",
                borderRadius: "10px",
              }}
              onClick={() => handleChange(index)}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgba(37, 39, 63, 0.7)",
                  fontWeight: "600",
                }}
              >
                {row.category_name}
              </Typography>
              <Chip
                label={row.total}
                sx={{
                  //padding: '8px 8px 8px 8px',
                  height: "36px",
                  fontSize: "14px",
                  color: "rgba(37, 39, 63, 0.7)",
                  lineHeight: "20px",
                }}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      <StyledMenu
        id="framework-menu"
        MenuListProps={{
          "aria-labelledby": "framework-menu",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleClose(1)} disableRipple>
          <Stack direction={"row"} spacing={1}>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/html.svg`}
              alt="html"
            />
            <span>HTML</span>
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleClose(2)} disableRipple>
          <Stack direction={"row"} spacing={1}>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/react.svg`}
              alt="react"
            />
            <span>React</span>
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleClose(3)} disableRipple>
          <Stack direction={"row"} spacing={1}>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/bootstrap.svg`}
              alt="bootstrap"
            />
            <span>Bootstrap</span>
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleClose(4)} disableRipple>
          <Stack direction={"row"} spacing={1}>
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/tailwindcss.svg`}
              alt="tailwind"
            />
            <span>Tailwind</span>
          </Stack>
        </MenuItem>

        {value !== "41" && (
          <MenuItem onClick={() => handleClose("41")} disableRipple>
            <span>Semua Framework</span>
          </MenuItem>
        )}
      </StyledMenu>
    </React.Fragment>
  );
};

FrameworkMenu.propTypes = {
  headers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default FrameworkMenu;
