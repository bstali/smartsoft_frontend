import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 35,
    color: "#333333",
    margin: 0,
    textTransform: "uppercase",
  },
  img: {
    maxWidth: "70%",
  },
});
export default function AboutCompany() {
  const classes = useStyles();
  return (
    <div style={{marginBottom: 100}}>
    <Carousel interval={3000} autoPlay={true} animation="slide" swipe={true} IndicatorIcon={false}>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Infrastructure</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/infra.png"
          alt="Infrastructure"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Platforms</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/platform.png"
          alt="Platforms"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Database</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/db.png"
          alt="DB"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Digital Marketing</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/dm.png"
          alt="DM"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>CRM</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/crm.png"
          alt="CRM"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Customer Service</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/cs.png"
          alt="CS"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Data & Analyst</p>
        <img
          className={classes.img}
          src="https://www.arpatech.com/img/tech/da.png"
          alt="D&A"
        />
      </div>
      <div style={{ paddingTop: 80 }}>
        <p className={classes.headingTop}>Framework</p>
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
