import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    color: "#333333"
  },
  cardContent: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 10,
    color: "inherit"
  },
});
export default function NewsAndBlogs() {
  const classes = useStyles();
  return (
    <>
      <p className={classes.headingTop}>CHECKOUT OUR LATEST NEWS & BLOGS</p>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.arpatech.com/img/PR-ISO-27001-2013-02.jpg"
              alt="img"
            />
            <CardContent className={classes.cardContent}>
           Smart Soft Studios is proud to be awarded ISO 9001:2015 certification for its quality management systems. The attainment of this certification will help us adopt a quality management system which,
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.arpatech.com/img/PR-ISO-27001-2013-02.jpg"
              alt="img"
            />
            <CardContent className={classes.cardContent}>
           Smart Soft Studios is proud to be awarded ISO 9001:2015 certification for its quality management systems. The attainment of this certification will help us adopt a quality management system which,
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.arpatech.com/img/PR-ISO-27001-2013-02.jpg"
              alt="img"
            />
            <CardContent className={classes.cardContent}>
           Smart Soft Studios is proud to be awarded ISO 9001:2015 certification for its quality management systems. The attainment of this certification will help us adopt a quality management system which,
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
