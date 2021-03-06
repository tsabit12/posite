import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PropTypes from "prop-types";

const AccountMenu = ({ anchorEl, open, handleClose, onLogout }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Avatar /> Profile
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logged Out
      </MenuItem>
    </Menu>
  );
};

AccountMenu.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default AccountMenu;
