import React from "react";
import Contact from "./Contact";
import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import Services from "../Components/Services";
import MicroSoftServices from "../Components/MicroSoftServices";
import NewsAndBlogs from "../Components/NewsAndBlogs";
import AwardWinningProjects from "../Components/AwardWinningProject";
import TechnologyAndBusiness from "../Components/TechnologyAndBusiness";
import AboutCompany from "../Components/AboutCompany";

const useStyles = makeStyles({
  topHeading: {
    fontSize: 48,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    textTransform: "uppercase",
  },
  descriptionHeading: {
    color: "#bdd030",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Montserrat",
  },
  description: {
    fontFamily: "Montserrat",
    textAlign: "center",
    margin: "0 auto",
    fontSize: 13,
    fontWeight: 400,
    width: "70%",
  },
  midHeading: {
    fontSize: 45,
    color: "#333",
    fontFamily: "Montserrat",
    fontWeight: 400,
    marginTop: 150,
  },
  servicesDescription: {
    color: "#333",
    fontSize: 16,
    fontFamily: "arial",
    lineHeight: 1.75,
    fontWeight: 500,
  },
  grnFirstHeading: {
    color: "#333",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 0.25,
  },
  grnSecondHeading: {
    color: "#333",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 17,
  },
  span: {
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
    fontFamily: "Montserrat",
    fontWeight: 700,
    color: "#4A4A4A",
    fontSize: 20,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#F5F5F5", paddingTop: 400 }}>
      <div>
        <h1 className={classes.topHeading}>
          WORLD'S FINEST <br />
          TECHNOLOGY HUB
        </h1>
        <p className={classes.descriptionHeading}>We Are Pioneers</p>
        <p className={classes.description}>
          Smart Soft Studios – the finest technology hub kept innovating as more
          people joined the global village and came closer with connectivity. We
          are adding our bit to the world advanced research in technologies as
          we embark on the future to continue to create better experiences.
        </p>
      </div>
      <div>
        <Button
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 12,
            textTransform: "uppercase",
          }}
          variant="contained"
        >
          View Services
        </Button>
        <Button
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 12,
            textTransform: "uppercase",
            marginLeft: 20,
          }}
          variant="contained"
        >
          View Portfolio
        </Button>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <h2 className={classes.midHeading}>WHAT WE DO</h2>
          <p className={classes.servicesDescription}>
            We have a refined process after we have taken up a project. We offer
            the platform from where the projects take shape through stages of
            planning, testing and execution. In this aspect we follow an agile
            methodology and run the project through a loop of feedback and
            constant improvement. Our specialized services also have:
          </p>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Services />
      <MicroSoftServices />
      <Grid
        container
        style={{ backgroundColor: "#BDD030", marginTop: 150, padding: 40 }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={4}>
              <p className={classes.grnFirstHeading}>
                Discuss with our Experts & Choose the
              </p>
              <p className={classes.grnSecondHeading}>
                BEST SOLUTION FOR YOUR BUSINESS
              </p>
            </Grid>
            <Grid item xs={3}>
              <img src="https://www.arpatech.com/img/tel-1-1.png" alt="phone" />
              <span className={classes.span}>+1 (800) 214-3513</span>
            </Grid>
            <Grid item xs={3}>
              <img src="https://www.arpatech.com/img/tel-2.png" alt="chat" />
              <span className={classes.span}>Live Chat</span>
            </Grid>
            <Grid item xs={2}>
              <img src="https://www.arpatech.com/img/tel-3.png" alt="email" />
              <span className={classes.span}>Email Us</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <NewsAndBlogs />
      <AwardWinningProjects />
      <TechnologyAndBusiness />
      <AboutCompany />
      <Contact />
    </div>
  );
}
