import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
  topHeading: {
    fontSize: 48,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    textTransform: "uppercase",
    color: "white"
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
    color: "white"
  },
});
export default function Intro() {
  const classes = useStyles();

  const items = [
    {
      name: "We Are Pioneers",
      description:
        "Smart Soft Studios – the finest technology hub kept innovating as more people joined the global village and came closer with connectivity. We are adding our bit to the world advanced research in technologies as we embark on the future to continue to create better experiences.",
    },
    {
      name: "We Are Problem Solvers",
      description:
        "We have a team of IT consultants with presence at the key technology innovation hubs around the world. We empower you to modify and analyze data and turn it profitable by simplifying business goals.",
    },
    {
      name: "We Are Innovators",
      description:
        "Smart Soft Studios offers complete solutions in software development from services ranging from custom application development to web design and development. Our presence as a leading IT service provider for all advanced technology-based projects.",
    },
    {
      name: "We Are Creators",
      description: "",
    },
    {
      name: "More Than 17 Years of IT Experience",
      description: "",
    },
    {
      name: "We Are Smart Soft Studios",
      description: "",
    },
  ];

  return (
    <div style={{paddingTop: 300}}>
      <p className={classes.topHeading}>
        WORLD'S FINEST <br />
        TECHNOLOGY HUB
      </p>
      <Carousel interval={3000} autoPlay={true} animation="slide" IndicatorIcon={false}>
        {items.map((item) => 
        <div>
        <p className={classes.descriptionHeading}>{item.name}</p>
        <p className={classes.description}>{item.description}</p>
        </div>
        )}
      </Carousel>
    </div>
  );
}
