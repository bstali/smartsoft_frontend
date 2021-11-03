import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import GetAFreeQuote from "./GetAFreeQuote";

const useStyles = makeStyles({
  navItems: {
    color: "black",
    fontWeight: 400,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    letterSpacing: 1,
    textTransform: "uppercase",
    textDecoration: "none",
    float: "left",
    padding: '5px 5px',
  },
  navBar: {
    display: "flex",
  },
  appBar: {
    padding: 30,
    backgroundColor: "transparent",
  },
  quoteBtn: {
    float: "inherit",
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <header className={classes.appBar}>
      <NavLink exact to="/" className={classes.navItems}>
        Home
      </NavLink>
      <NavLink exact to="/Contact-Us" className={classes.navItems}>
        Contact
      </NavLink>
      <NavLink exact to="/Careers" className={classes.navItems}>
        Careers
      </NavLink>
      <div style={{ float: "right" }}>
        <GetAFreeQuote />
      </div>
    </header>
  );
}
