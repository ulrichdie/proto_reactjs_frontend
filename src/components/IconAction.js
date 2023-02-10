/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    marginLeft: "2em",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const IconAction = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='secondary'>
            <NotificationsActiveIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge='end'
          aria-label='account of current user'
          // aria-controls={menuId}
          aria-haspopup='true'
          // onClick={handleProfileMenuOpen}
          color='inherit'>
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label='show more'
          //   aria-controls={mobileMenuId}
          aria-haspopup='true'
          //   onClick={handleMobileMenuOpen}
          color='inherit'>
          <MoreVertIcon />
        </IconButton>
      </div>
    </>
  );
};

export default IconAction;
