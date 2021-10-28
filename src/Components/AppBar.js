import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import GetAFreeQuote from "./GetAFreeQuote";

const useStyles = makeStyles({
  navItems: {
    color: "#fff",
    fontWeight: 400,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    letterSpacing: 1,
    textTransform: "uppercase",
    textDecoration: "none",
  },
  navBar: {
    display: "flex",
  },
  appBar: {
    padding: 30,
  },
  quoteBtn: {
    float: "inherit",
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <div className={classes.navBar}>
          <NavLink exact to="/" className={classes.navItems}>
            Home
          </NavLink>
          &nbsp; &nbsp;
          <NavLink exact to="/Contact-Us" className={classes.navItems}>
            Contact
          </NavLink>
          &nbsp; &nbsp;
          <NavLink exact to="/Careers" className={classes.navItems}>
            Careers
          </NavLink>
          &nbsp; &nbsp;
          <div style={{ float: "right" }}>
            <GetAFreeQuote />
          </div>
        </div>
      </AppBar>
    </>
  );
}
