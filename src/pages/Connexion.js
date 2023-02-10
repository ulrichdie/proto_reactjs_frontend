/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainRouter from "../routes/MainRouter";

const useStyles = makeStyles((theme) => ({
  cnxContainer: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#F1F1F1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cnxForm: {
    minWidth: "350px",
    minHeight: "600px",
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    boxShadow: "20px 12px 15px -3px rgba(0,0,0,0.1)",
    [theme.breakpoints.down("sm")]: {
      minWidth: "320px",
    },
  },
  Img: {
    width: "700px",
    height: "500px",
    boxShadow: "-1px 8px 50px -23px rgba(0,0,0,0.1);",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Connexion() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.cnxContainer}>
        <div className={classes.Img}></div>
        <div className={classes.cnxForm}>
          <MainRouter />
        </div>
      </div>
    </>
  );
}

export default Connexion;
