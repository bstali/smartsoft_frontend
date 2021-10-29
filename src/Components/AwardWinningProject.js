import { Grid, ImageList, ImageListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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
export default function AwardWinningProjects() {
  const classes = useStyles();
  const itemData = [
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-3-3.png",
      title: "Breakfast",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-1-1.png",
      title: "Burger",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-2-n.png",
      title: "Camera",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-4-n.png",
      title: "Coffee",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-5-5.png",
      title: "Hats",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-8-8.png",
      title: "Honey",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-9-9.png",
      title: "Basketball",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-10-10.png",
      title: "Fern",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-11-11.png",
      title: "Mushrooms",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-12-12.png",
      title: "Tomato basil",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-13.png",
      title: "Sea star",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-14.png",
      title: "Bike",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-15.png",
      title: "Bike",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-16.png",
      title: "Bike",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-4-4.png",
      title: "Bike",
    },
    {
      img: "https://www.arpatech.com/img/portfolio/portfolio-5-n.png",
      title: "Bike",
    },
  ];
  return (
    <div style={{paddingTop: 50}}>
      <p className={classes.headingTop}>AWARD WINNING PROJECTS</p>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ImageList sx={{ width: 1000, height: 950 }} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
