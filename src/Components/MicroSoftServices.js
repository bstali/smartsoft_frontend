import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles({
  heading: {
    fontSize: 50,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    padding: 80,
    color: "#333333",
  },
  img: {
    maxWidth: 50,
    maxHeight: 50,
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
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={10}
          >
            <Grid item>
              <img
                src="https://www.arpatech.com/img/serv/azure.png"
                alt="azure"
                className={classes.img}
              />
              <p className={classes.msSrvices}>Microsoft Azure</p>
            </Grid>
            <Grid item>
              <img
                src="https://www.arpatech.com/img/serv/dynamic.png"
                alt="MS-Dynamics"
                className={classes.img}
              />
              <p className={classes.msSrvices}>Microsoft Dynamics</p>
            </Grid>
            <Grid item>
              <img
                src="https://www.arpatech.com/img/serv/office.png"
                alt="MS365"
                className={classes.img}
              />
              <p className={classes.msSrvices}>Microsoft 365</p>
            </Grid>
            <Grid item>
              <img
                src="https://www.arpatech.com/img/serv/industry.png"
                alt="MS-Industry"
                className={classes.img}
              />
              <p className={classes.msSrvices}>Microsoft Industry</p>
            </Grid>

            <Grid item>
              <img
                src="https://www.arpatech.com/img/serv/data-platform.png"
                alt="data-platform"
                className={classes.img}
              />
              <p className={classes.msSrvices}>Data Platform</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
