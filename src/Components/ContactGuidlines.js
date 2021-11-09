import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  text: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 17,
  },

  span: {
    fontFamily: "Montserrat",
    color: "white",
    fontSize: 17,
  },
});
export default function ContactGuidlines() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{ backgroundColor: "#EF3066", marginTop: 150, padding: 40 }}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} sm={3}>
            <p className={classes.text}>
              Discuss with our Experts & Choose the <br /> BEST SOLUTION FOR
              YOUR BUSINESS
            </p>
          </Grid>
          <Grid item xs={4} sm={3}>
            <span className={classes.span}>
              <img src="https://www.arpatech.com/img/tel-1-1.png" alt="phone" />
              +1 (800) 214-3513
            </span>
          </Grid>
          <Grid item xs={4} sm={3}>
            <span className={classes.span}>
              <img src="https://www.arpatech.com/img/tel-2.png" alt="chat" />
              Live Chat
            </span>
          </Grid>
          <Grid item xs={4} sm={3}>
            <span className={classes.span}>
              <img src="https://www.arpatech.com/img/tel-3.png" alt="email" />
              Email Us
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
