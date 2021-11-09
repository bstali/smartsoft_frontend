import React from "react";
import Contact from "./Contact";
import { Button, Grid } from "@mui/material";
import Services from "../Components/Services";
import MicroSoftServices from "../Components/MicroSoftServices";
import ContactGuidlines from "../Components/ContactGuidlines";
import NewsAndBlogs from "../Components/NewsAndBlogs";
import AwardWinningProjects from "../Components/AwardWinningProject";
import TechnologyAndBusiness from "../Components/TechnologyAndBusiness";
import AboutCompany from "../Components/AboutCompany";
import "./Home.css";
import Intro from "../Components/Intro";

export default function Home() {
  const viewServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  const viewPortfolio = () => {
    document
      .getElementById("awardwinprojects")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="homeBG">
        <div>
          <Intro />
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
          <div style={{ marginLeft:40, marginTop: 80, marginBottom: 100, display:"flex" }}>
            <Button
              className="srvsBtn"
              onClick={viewServices}
              sx={{
                bgcolor: "#EF3066",
                color: "white",
                borderRadius: 12,
                padding: "5px 20px 5px 20px",
                // Width: 500,
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
                //  Width: 200,
                padding: "3px 15px 3px 15px",
                fontWeight: 700,
                marginLeft: 10,
              }}
            >
              View Portfolio
            </Button>
          </div>
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
          
        </Grid>
      </div>
      <div id="services">
        <Services />
      </div>
      <div>
        <MicroSoftServices />
      </div>
      <div>
        <ContactGuidlines />
      </div>

      <div>
        <NewsAndBlogs />
      </div>
      <div id="awardwinprojects">
        <AwardWinningProjects />
      </div>
      <div>
        <TechnologyAndBusiness />
      </div>
      <div>
        <AboutCompany />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
