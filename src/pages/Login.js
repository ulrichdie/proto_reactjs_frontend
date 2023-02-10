/** @format */

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import logo from "../assets/img/Logo_SUNU.jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuthentification } from "../customhooks/useAuthData";

// Style composent
const useStyles = makeStyles((theme) => ({
  cnxContainer: {
    margin: "5%",
    width: "90%",
    height: "90%",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: "120px",
    margin: "1em",
  },
  button: {
    width: "80%",
    margin: "1em",
    "&:hover": {
      backgroundColor: "#C6183D",
    },
  },
  linkPwd: {
    width: "60%",
    marginLeft: "auto",
    marginBottom: "1em",
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkAcc: {
    // marginTop: "1em",
    fontSize: "17px",
    fontFamily: "italic",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
    },
  },
  text: {
    width: "80%",
    marginBottom: "0.5em",
  },
  title: {
    color: "#C6183D",
    display: "block",
    fontSize: "25px",
    marginTop: "0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

// Schema de validation du formulaire
const validationSchema = yup.object({
  email: yup
    .string("Entrez votre email")
    .email("Email invalide")
    .required("Email obligatoire"),
  password: yup
    .string("Entrez votre mot de passe")
    .min(8, "Le mot de passe doit être sur 8 caractères minimum")
    .required("Mot de passe obligatoire"),
});

// Composent login
function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  // Déclaration react-query
  // const {
  //   mutate: authUser,
  //   isLoading,
  //   isError,
  //   isSuccess,
  // } = useAuthentification();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Définition des options de formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // authUser(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.cnxContainer}>
        <img alt='SUNU Assurances' src={logo} className={classes.logo} />
        <h1 className={classes.title}>SUNU App</h1>
        <TextField
          id='email'
          name='email'
          label='E-mail'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={classes.text}
        />
        <TextField
          id='password'
          name='password'
          label='Mot de passe'
          type={values.showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          className={clsx(classes.margin, classes.text)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link
          component='button'
          variant='body2'
          color='inherit'
          className={classes.linkPwd}
          onClick={() => {
            console.info("I'm a button.");
          }}>
          Mot de passe oublié ?
        </Link>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          type='submit'>
          Connexion
        </Button>
        <p>Vous n'avez pas de compte ?</p>
        <Link
          component='button'
          variant='body2'
          color='secondary'
          className={classes.linkAcc}
          onClick={() => {
            console.info("I'm a button.");
          }}>
          Créer un compte
        </Link>
      </form>
    </>
  );
}

export default Login;
