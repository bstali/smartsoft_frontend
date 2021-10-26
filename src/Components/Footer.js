import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#ebebeb",
    color: "grey",
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    display: "flex",
  },
  serviceHeading: {
    color: "#4a4a4a",
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 30,
  },
  services: {
    fontSize: "12px",
    textAlign: "left",
    paddingLeft: 30,
  },
});
export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.footer}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4} alignItems="center">
          <h2>SmartSoft</h2>
          <p>
            We empower your Business through our ingenious technological
            solutions, and support from our remarkable teams.
          </p>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.serviceHeading}>Services</p>
          <div className={classes.services}>
            <p>Web Development</p>
            <p>Mobile App Development</p>
            <p>Software Development</p>
            <p>Managed Cloud Hosting</p>
            <p>Startups</p>
            <p>Digital Marketing</p>
            <p>Business Process Outsourcing</p>
            <p>Business Intelligence</p>
            <p>IT Management Services</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <p className={classes.serviceHeading}>Company</p>
          <div className={classes.services}>
            <p>About</p>
            <p>Blogs</p>
            <p>Career</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://facebook.com/" />
            <SocialIcon url="https://youtube.com" />
            <SocialIcon url="https://linkedin.com" />
            <SocialIcon url="https://googleplus.com" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
