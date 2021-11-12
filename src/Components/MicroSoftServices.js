import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import msAzure from "../Asset/Images/MSServicesImages/MS-Azure.png";
import msDynamics from "../Asset/Images/MSServicesImages/MS-Dynamics.png";
import msIndustry from "../Asset/Images/MSServicesImages/MS-Industry.png";
import ms365 from "../Asset/Images/MSServicesImages/MS-365.png";

const UseStyles = makeStyles({
  heading: {
    fontSize: 50,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    paddingTop: 80,
    paddingBottom: 80,
    color: "#333333",
  },
  img: {
    width: "70%",
    // maxHeight: 50,
  },
  msSrvices: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    color: "#333333",
  },
});

export default function MicroSoftServices() {
  const classes = UseStyles();
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <h2 className={classes.heading}>MICROSOFT PRODUCTS AND SERVICES</h2>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            // spacing={10}
          >
            <Grid item xs={3}>
              <img src={msAzure} alt="azure" className={classes.img} />
              {/* <p className={classes.msSrvices}>Microsoft Azure</p> */}
            </Grid>
            <Grid item xs={3}>
              <img src={msDynamics} alt="MS-Dynamics" className={classes.img} />
              {/* <p className={classes.msSrvices}>Microsoft Dynamics</p> */}
            </Grid>
            <Grid item xs={3}>
              <img src={ms365} alt="MS365" className={classes.img} />
              {/* <p className={classes.msSrvices}>Microsoft 365</p> */}
            </Grid>
            <Grid item xs={3}>
              <img src={msIndustry} alt="MS-Industry" className={classes.img} />
              {/* <p className={classes.msSrvices}>Microsoft Industry</p> */}
            </Grid>

            {/* <Grid item>
              <img
                src="https://www.arpatech.com/img/serv/data-platform.png"
                alt="data-platform"
                className={classes.img}
              />
              <p className={classes.msSrvices}>Data Platform</p>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
