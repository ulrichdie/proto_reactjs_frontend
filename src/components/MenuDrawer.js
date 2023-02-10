/** @format */

import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import HomeIcon from "@material-ui/icons/Home";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import logo from "../assets/img/Logo_SUNU.jpg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "270px",
    backgroundColor: theme.palette.background.paper,
  },
  headerMargin: {
    // marginBottom: "6em",
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    color: "#202020",
    height: "1.5em",
    width: "1.5em",
  },
  listHeader: {
    height: "4em",
    color: "#C6183D",
    fontSize: "1.5em",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    width: "100px",
  },
  listItem: {
    ...theme.typography.tab,
    // opacity: 0.7,
    color: "#000",
    "&:hover": {
      backgroundColor: "#C6183D",
      color: "#F1F1F1",
      // opacity: 1,
    },
    "&:focus": {
      backgroundColor: "#C6183D",
      color: "#F1F1F1",
      // opacity: 1,
    },
  },
}));

export const MenuDrawer = (props) => {
  const classes = useStyles();
  const [openList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };

  const menuOptions1 = [
    { name: "Sous menu 1-1", link: "/sousmenu1" },
    { name: "Sous menu 1-2", link: "/sousmenu2" },
    { name: "Sous menu 1-3", link: "/sousmenu3" },
  ];

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={true}
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpen}>
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              component='div'
              id='nested-list-subheader'
              className={classes.listHeader}>
              <img alt='SUNU Assurances' src={logo} className={classes.logo} />
              SUNU App
            </ListSubheader>
          }
          className={classes.root}>
          <ListItem
            button
            component={Link}
            to='/'
            className={classes.listItem}
            onClick={props.onClose}
            dense>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Accueil' />
          </ListItem>
          <ListItem
            button
            onClick={handleClick}
            className={classes.listItem}
            dense>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary='Menu 1' />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openList} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {menuOptions1.map((item, index) => (
                <ListItem
                  button
                  className={`${classes.listItem} ${classes.nested}`}
                  key={`${item}${index}`}
                  component={Link}
                  to={item.link}
                  onClick={props.onClose}
                  dense>
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem
            button
            className={classes.listItem}
            component={Link}
            to='/menu2'
            onClick={props.onClose}
            dense>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary='Menu 2' />
          </ListItem>
          <ListItem
            button
            className={classes.listItem}
            component={Link}
            to='/menu3'
            onClick={props.onClose}
            dense>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary='Menu 3' />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={props.switchDrawer}
        disableRipple
        className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};
