import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import ProjectForm from "../Components/ProjectForm";
import MapChart from "../Components/Map";
import "./Home.css";

const useStyles = makeStyles({
  officesHeading: {
    color: "#4a4a4a",
    margin: 0,
    fontSize: 45,
    fontFamily: "Montserrat, sans-serif",
    textTransform: "uppercase",
    textAlign: "left",
  },
  continentsName: {
    fontSize: 24,
    margin: 0,
    marginTop: 10,
    color: "#ef3066",
    fontFamily: "Montserrat, sans-serif",
    textTransform: "uppercase",
    textAlign: "left",
  },
  country: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 21,
    color: "#4a4a4a",
    textTransform: "uppercase",
    textAlign: "left",
  },
  city: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 17,
    color: "#4a4a4a",
    textTransform: "uppercase",
    textAlign: "left",
  },
  address: {
    color: "#4a4a4a",
    textAlign: "left",
  },
});

export default function Contact() {
  const classes = useStyles();
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="homeBG">
        <ProjectForm />
      </div>
      <Grid container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} sm={5}>
              <MapChart />
            </Grid>
            <Grid item xs={12} sm={7}>
              <div>
                <p className={classes.officesHeading}>Our Global Offices</p>
              </div>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <p className={classes.continentsName}>Asia</p>
                  <p className={classes.country}>Pakistan</p>
                  <p className={classes.city}>Lahore</p>
                  <p className={classes.address}>
                    P405-6 on 4th Floor, Gulberg Arcade, <br />
                    located at 38-G, Gulberg II, Lahore.
                  </p>
                </Grid>

                  <Grid item xs={12} sm={6}>
                    <p className={classes.continentsName}>Europe</p>
                    <p className={classes.country}>UK</p>
                    <p className={classes.address}>
                      Upper Willsley House, Angley Road, Cranbrook, Kent, TN17
                      2LF.
                    </p>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
