import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 35,
    color: "#333333",
    margin: 0,
  },
  img: {
    width: "70%",
  },
});
export default function AboutCompany() {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 80 }}>
      <p className={classes.headingTop}>FRAME WORKS</p>

      <img
        className={classes.img}
        src="https://www.arpatech.com/img/tech/frame.png"
        alt="Frameworks"
      />
    </div>
  );
}
