import React from "react";
import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../Pages/Home.css";

const useStyles = makeStyles({
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    color: "#333333",
  },
  cardContent: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 10,
    color: "inherit",
  },
});
export default function NewsAndBlogs() {
  const classes = useStyles();
  return (
    <>
      <p className={classes.headingTop}>CHECKOUT OUR LATEST NEWS & BLOGS</p>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <Card
                className="newsCard"
                sx={{
                  maxWidth: 345,
                  border: "2px solid",
                  borderColor: "#EF3066",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.arpatech.com/img/PR-ISO-9001-2015-2.jpg"
                  alt="img"
                />
                <CardContent className={classes.cardContent}>
                  Smart Soft Studios is proud to be awarded ISO 9001:2015
                  certification for its quality management systems. The
                  attainment of this certification will help us adopt a quality
                  management system which,
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                className="newsCard"
                sx={{
                  maxWidth: 345,
                  border: "2px solid",
                  borderColor: "#EF3066",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.arpatech.com/img/PR-ISO-27001-2013-02.jpg"
                  alt="img"
                />
                <CardContent className={classes.cardContent}>
                  Smart Soft Studios is proud to be awarded ISO 9001:2015
                  certification for its quality management systems. The
                  attainment of this certification will help us adopt a quality
                  management system which,
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                className="newsCard"
                sx={{
                  maxWidth: 345,
                  border: "2px solid",
                  borderColor: "#EF3066",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.arpatech.com/img/PR-ISO-27001-2013-02.jpg"
                  alt="img"
                />
                <CardContent className={classes.cardContent}>
                  Smart Soft Studios is proud to be awarded ISO 9001:2015
                  certification for its quality management systems. The
                  attainment of this certification will help us adopt a quality
                  management system which,
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
