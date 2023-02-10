/** @format */

import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "8px",
    color: "#000",
  },
  menuPaper: {
    backgroundColor: "#FFFFF",
    marginTop: "3em",
  },
  menuList: {
    // padding: "0px",
    // marginTop: "2.5em",
  },
  menuItem: {
    ...theme.typography.tab,
    color: "#000",
    "&:hover": {
      backgroundColor: "#C6183D",
      color: "#F1F1F1",
    },
    "&:focus": {
      backgroundColor: "#C6183D",
      color: "#F1F1F1",
    },
  },
}));

function MenuHorizontal() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const menuOptions = [
    {
      name: "Sous menu 1-1",
      link: "/sousmenu1",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Sous menu 1-2",
      link: "/sousmenu2",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Sous menu 1-3",
      link: "/sousmenu3",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Accueil", link: "/", activeIndex: 0 },
    {
      name: "Menu 1",
      link: "",
      activeIndex: 1,
      ariaOwn: anchorEl ? "sous-menu-1" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "Menu 2",
      link: "/menu2",
      activeIndex: 2,
    },
    {
      name: "Menu 3",
      link: "/menu3",
      activeIndex: 3,
    },
    {
      name: "Menu 4",
      link: "/menu4",
      activeIndex: 4,
    },
  ];

  // Garder le focus du menu malgré les rechargements de la page
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        // indicatorColor='primary'
        textColor='secondary'>
        {routes.map((item, index) => (
          <Tab
            key={`${item}${index}`}
            aria-owns={item.ariaOwn}
            aria-haspopup={item.ariaPoup}
            className={classes.tab}
            component={Link}
            to={item.link}
            label={item.name}
            onMouseOver={item.mouseOver}
          />
        ))}
        ;
      </Tabs>
      <Menu
        id='sous-menu-1'
        anchorEl={anchorEl}
        open={openMenu}
        classes={{ paper: classes.menuPaper, list: classes.menuList }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}>
        {menuOptions.map((item, index) => (
          <MenuItem
            key={`${item}${index}`}
            component={Link}
            to={item.link}
            onClick={(e) => {
              handleMenuItemClick(e, index);
              setValue(1);
              handleClose();
            }}
            classes={{ root: classes.menuItem }}
            selected={index === selectedIndex && value === 1}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MenuHorizontal;
