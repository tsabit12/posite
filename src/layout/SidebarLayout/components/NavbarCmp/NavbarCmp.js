import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AccountMenu, ProfileButton, Title } from "./components";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const NavbarRoot = styled(AppBar)({
  boxShadow: "1px 0px 0px 1px rgb(255 255 255 / 10%)",
  backgroundColor: "#FFF",
});

const NavbarCmp = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { firstname, lastname, imageurl, level } = props.session;

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <NavbarRoot>
      <Toolbar disableGutters sx={{ left: 0, height: "90px" }}>
        {props.lgUp && (
          <Title
            onClick={props.onClickMenu}
            drawerIsOpen={props.drawerIsOpen}
          />
        )}

        <Box
          sx={{
            flexGrow: 1,
            marginLeft: {
              xs: "1vh",
              lg: "3vh",
            },
          }}
        >
          <Stack direction={"row"} spacing={2} alignItems="center">
            <IconButton
              sx={{ display: { xs: "inline-flex", lg: "none" } }}
              disableRipple
              onClick={props.onClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"#1C1F37"} fontSize={"32px"}>
              {props.title}
            </Typography>

            {props.title !== "Upload" && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                component={Link}
                to="/uploads"
              >
                Upload
              </Button>
            )}
          </Stack>
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          sx={{ paddingRight: 2 }}
        >
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableRipple
          >
            <ProfileButton
              fullname={`${firstname} ${lastname}`}
              imageUrl={imageurl}
              level={level}
            />
          </IconButton>
        </Stack>
      </Toolbar>

      <AccountMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        onLogout={() => alert("logout")}
      />
    </NavbarRoot>
  );
};

NavbarCmp.defaultProps = {
  title: "No title",
};

NavbarCmp.propTypes = {
  drawerIsOpen: PropTypes.bool.isRequired,
  lgUp: PropTypes.bool.isRequired,
  title: PropTypes.string,
  session: PropTypes.object.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

export default NavbarCmp;
