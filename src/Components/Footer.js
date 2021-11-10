import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Logo from "../Asset/Images/SmartSoftLogov44-02-2.png";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles({
  footer: {
    // backgroundColor: "whitw",
    color: "grey",
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    // display: "flex",
    paddingTop: 50,
  },
  serviceHeading: {
    color: "#4a4a4a",
    paddingLeft: 30,
    margin: 0,
  },
  services: {
    fontSize: "12px",
    paddingLeft: 30,
  },
  icons: {
    height: 25,
    width: 25,
  },
  aboutCompany: {
    fontSize: "15px",
  }
});
export default function Footer() {
  const classes = useStyles();
  return (
      <Grid
        container
        className={classes.footer}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={4} alignItems="center">
              <img src={Logo} alt="logo" style={{ width: "100%" }} />
              <p className={classes.aboutCompany}>
                We empower your Business through our ingenious technological
                solutions, and support from our remarkable teams.
              </p>
            </Grid>
            <Grid item xs={4} sm={3}>
              <p className={classes.serviceHeading}>Services</p>
              <div className={classes.services}>
                <p>Web Development</p>
                <p>Mobile App Development</p>
                <p>Software Development</p>
              </div>
            </Grid>
            <Grid item xs={4} sm={3}>
              <p className={classes.serviceHeading}>Company</p>
              <div className={classes.services}>
                <p>About</p>
                <p>Career</p>
              </div>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <p style={{ color: "#4a4a4a", margin:0 }}>Social</p>
                <SocialIcon
                  url="https://twitter.com"
                  style={{ height: 40, width: 40, marginTop: 15 }}
                />
                <SocialIcon
                  url="https://facebook.com/"
                  style={{ height: 40, width: 40, marginTop: 5 }}
                />
                <SocialIcon
                  url="https://youtube.com"
                  style={{ height: 40, width: 40, marginTop: 5 }}
                />
                <SocialIcon
                  url="https://linkedin.com"
                  style={{ height: 40, width: 40, marginTop: 5 }}
                />
                <SocialIcon
                  url="https://googleplus.com"
                  style={{ height: 40, width: 40, marginTop: 5 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    
  );
}
