import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import GetAFreeQuote from "./GetAFreeQuote";
import { AppBar } from "@mui/material";

const useStyles = makeStyles({
  navItems: {
    fontSize: 15,
    color: "white",
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    letterSpacing: 1,
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "7px 7px",
  },
  appBar: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0)",
    // opacity: 1
  },
  quoteBtn: {
    float: "inherit",
  },
});

export default function NavBar() {
  const classes = useStyles();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          paddingTop: 2,
          transition: "all 0.9s linear",
        }}
        className={colorChange ? "navbar colorChange" : "navbar"}
      >
        <div>
          <NavLink exact to="/" className={classes.navItems}>
            Home
          </NavLink>
          <NavLink exact to="/Contact-Us" className={classes.navItems}>
            Contact
          </NavLink>
          <NavLink exact to="/Careers" className={classes.navItems}>
            Careers
          </NavLink>
          <NavLink exact to="/Slider" className={classes.navItems}>
            Slider
          </NavLink>
          <div style={{ float: "right" }}>
            <GetAFreeQuote />
          </div>
        </div>
        
      </AppBar>
    </>
  );
}
