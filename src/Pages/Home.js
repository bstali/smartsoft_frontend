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
  
  grnFirstHeading: {
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 0.25,
  },
  grnSecondHeading: {
    color: "white",
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
    color: "white",
    fontSize: 20,
  },
});

export default function Home() {
  const classes = useStyles();

  const viewServices = () => {
    document.getElementById("services").scrollIntoView({behavior: "smooth"})
  }

  const viewPortfolio = () => {
    document.getElementById("awardwinprojects").scrollIntoView({behavior: "smooth"})
  }
  
  return (
    <div style={{ backgroundColor: "#F5F5F5"}}>
      <div className="homeBG" >
        <div>
          <Intro />
        </div>
        <div style={{ marginTop: 80, marginBottom: 100 }}>
          <Button
            className="srvsBtn"
            onClick={viewServices}
            sx={{
              bgcolor: "#EF3066",
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
            onClick={viewPortfolio}
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
          
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <div id="services">
      <Services />
      </div>
      <MicroSoftServices />
      <Grid
        container
        style={{ backgroundColor: "#EF3066", marginTop: 150, padding: 40 }}
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
      <div id="awardwinprojects"><AwardWinningProjects /></div>
      <div><TechnologyAndBusiness /></div>
      <div><AboutCompany /></div>
      <div><Contact /></div>
      
    </div>
  );
}
