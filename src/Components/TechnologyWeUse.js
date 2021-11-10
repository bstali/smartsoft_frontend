import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
import AmazonWebServices from "../Asset/Images/InfraStructureImages/amazon.png"
import MongoDb from "../Asset/Images/DatabaseImages/mongodb.png"
import MySql from "../Asset/Images/DatabaseImages/mysql.png"

const useStyles = makeStyles({
  subHeading: {
    fontFamily: "Roboto, san-serif",
    fontWeight: 400,
    fontSize: 35,
    color: "#333333",
    margin: 0,
    textTransform: "uppercase",
  },
  img: {
    maxWidth: "10%",
    maxHeight: "30%",
  },
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    color: "#333333",
    margin: 0,
  },
});
export default function TechnologyWeUse() {
  const classes = useStyles();
  return (
    <div style={{paddingBottom: 100, paddingTop: 100}}>
      <p className={classes.headingTop}>TECHNOLOGY WE USE</p>
    <Carousel interval={10000000000000000} autoPlay={true} animation="slide" swipe={true} IndicatorIcon={false}>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.subHeading}>Infrastructure</p>
        <img
          className={classes.img}
          src={AmazonWebServices}
          alt="AmazonWebServices"
        />
      </div>
      <div style={{ paddingTop: 80}}>
        <p className={classes.subHeading}>Platforms</p>
        <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className={classes.img}
          src={MongoDb}
          alt="MongoDb"
        />
        <img
          className={classes.img}
          src={MySql}
          alt="MySql"
        />
        </div>
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.subHeading}>Database</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/db.png"
          alt="DB"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.subHeading}>Digital Marketing</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/dm.png"
          alt="DM"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.subHeading}>Customer Service</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/cs.png"
          alt="CS"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.subHeading}>Framework</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/frame.png"
          alt="Framework"
        />
      </div>
    </Carousel>
    </div>
  );
}
