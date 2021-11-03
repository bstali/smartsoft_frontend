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
import "./Home.css";
import Intro from "../Components/Intro";

const useStyles = makeStyles({
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
    <div style={{ backgroundColor: "#F5F5F5"}}>
      <div className="homeBG" >
        <div>
          <Intro />
        </div>
        <div style={{ marginTop: 80, marginBottom: 100 }}>
          <Button
            className="srvsBtn"
            sx={{
              bgcolor: "#bdd030",
              color: "white",
              borderRadius: 12,
              minWidth: 200,
              fontWeight: 700,
            }}
          >
            View Services
          </Button>
          <Button
            className="portfolioBtn"
            sx={{
              bgcolor: "transparent",
              border: "1px solid white",
              color: "white",
              borderRadius: 12,
              minWidth: 200,
              fontWeight: 700,
              marginLeft: 10,
            }}
          >
            View Portfolio
          </Button>
        </div>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={2}></Grid>
        <Grid id="1" item xs={8}>
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
      <div><NewsAndBlogs /></div>
      <div><AwardWinningProjects /></div>
      <div><TechnologyAndBusiness /></div>
      <div><AboutCompany /></div>
      <div><Contact /></div>
      
    </div>
  );
}
