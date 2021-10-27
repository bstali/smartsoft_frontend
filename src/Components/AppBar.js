import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import useStyles from "./AppBarStyleSheet";
import GetAFreeQuote from "./GetAFreeQuote";

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <div className={classes.navBar}>
        <NavLink exact to="/Contact-Us" className={classes.navItems}>
          Contact
        </NavLink>
        &nbsp; &nbsp;
        <NavLink exact to="/Careers" className={classes.navItems}>
          Careers
        </NavLink>
        <GetAFreeQuote />
      </div>
    </AppBar>
  );
}
