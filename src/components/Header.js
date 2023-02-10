/** @format */
// Composent entête
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { MenuDrawer } from "./MenuDrawer";
import logo from "../assets/img/Logo_SUNU.jpg";
import MenuHorizontal from "./MenuHorizontal";
import IconAction from "./IconAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
    },
  },
  title: {
    color: "#C6183D",
    flexGrow: 1,
    display: "block",
    fontSize: "30px",
    // fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f6f6f6",
    "&:hover": {
      backgroundColor: "#f6f6f6",
    },
    marginLeft: 0,
    marginRight: "1em",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  icons: {
    paddingLeft: "1em",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

// Scroll function
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

//   Function component
export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  // Ouverture drawer
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  // fermeture drawer
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  // clique bouton menu drawer
  const handleSwitchDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // Constante menu
  const tabs = <MenuHorizontal />;

  // Contenu menu mobile
  const drawer = (
    <MenuDrawer
      open={openDrawer}
      onOpen={handleOpenDrawer}
      onClose={handleCloseDrawer}
      switchDrawer={handleSwitchDrawer}
    />
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              disableRipple
              color='inherit'
              aria-label='menu'>
              <img alt='SUNU Assurances' src={logo} className={classes.logo} />
            </IconButton>
            <h1 className={classes.title}>SUNU App</h1>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Recherche…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {useMediaQuery(theme.breakpoints.down("sm")) ? drawer : tabs}
            <IconAction className={classes.icons} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.headerMargin}></div>
    </>
  );
}
