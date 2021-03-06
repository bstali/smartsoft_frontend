import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";
import AmazonWebServices from "../Asset/Images/InfraStructureImages/amazon.png";
import Node from "../Asset/Images/PlatformImages/node.png";
import ReactJS from "../Asset/Images/PlatformImages/react.png";
import ReactNative from "../Asset/Images/PlatformImages/reactnative.png";
import Unity from "../Asset/Images/PlatformImages/unity.png";
import AndroidStudio from "../Asset/Images/PlatformImages/androidstudio.png";
import Xcode from "../Asset/Images/PlatformImages/xcode.png";
import MongoDb from "../Asset/Images/DatabaseImages/mongodb.png";
import MySql from "../Asset/Images/DatabaseImages/mysql.png";
import GoogleAnalytics from "../Asset/Images/DigitalMarketingImages/google-analytics.png";
import GoogleAd from "../Asset/Images/DigitalMarketingImages/googleAd.png";
import CodeIgniter from "../Asset/Images/FrameworksImages/codeigniter.png";
// import InboxIcon from '@mui/icons-material/Inbox';
// import HeightIcon from '@mui/icons-material/Height';
// import StorageIcon from '@mui/icons-material/Storage';
// import NotificationsIcon from '@mui/icons-material/Notifications';

const useStyles = makeStyles({
  subHeading: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "3vmin",
    color: "#333333",
    margin: 0,
    textTransform: "uppercase",
    paddingBottom: 20,
  },
  img: {
    width: "14vmin",
    height: "8vmin"
  },
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: "6vmin",
    color: "#333333",
    margin: 0,
  },
  imagesDisplay: {
    display: "flex",
    justifyContent: "center",
    wordSpacing: 5,
    paddingTop: 10,
  },
});

export default function TechnologyWeUse() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{ paddingBottom: 50, paddingTop: 100 }}
      >
        <Grid item xs={12}>
          <p className={classes.headingTop}>TECHNOLOGY WE USE</p>
        </Grid>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={12} style={{ height: "100%", width: "100%" }}>
          <Carousel
            interval={1500}
            animation="slide"
            swipe={true}
            IndicatorIcon={false}
            navButtonsAlwaysInvisible={true}
          >
            <Grid style={{ paddingTop: 50 }} id="frameworks">
              <p className={classes.subHeading}>Frameworks/Tools</p>
              <Grid className={classes.imagesDisplay}>
                <img className={classes.img} src={Node} alt="Node" />
                <img className={classes.img} src={ReactJS} alt="NextJS" />
                &nbsp; &nbsp;
                <img
                 className={classes.img}
                  src={ReactNative}
                  alt="React Native"
                />
                &nbsp; &nbsp;
                <img className={classes.img} src={Unity} alt="Unity3D" />
                {/* &nbsp; */}
                <img className={classes.img} src={Xcode} alt="Xcode" />
                {/* &nbsp; */}
                <img
                  className={classes.img}
                  src={AndroidStudio}
                  alt="Android Studios"
                />
                <img
                  className={classes.img}
                  src={CodeIgniter}
                  alt="CodeIgniter"
                />

              </Grid>
            </Grid>
            <Grid style={{ paddingTop: 50 }} id="database">
              <p className={classes.subHeading}>Database</p>
              <Grid className={classes.imagesDisplay}>
                <img className={classes.img} src={MongoDb} alt="MongoDb" />
                &nbsp; &nbsp; &nbsp;
                <img className={classes.img} src={MySql} alt="MySql" />
              </Grid>
            </Grid>
            <Grid style={{ paddingTop: 50 }} id="infrastructure">
              <p className={classes.subHeading}>Infrastructure</p>
              <img
                className={classes.img}
                src={AmazonWebServices}
                alt="AmazonWebServices"
              />
            </Grid>
            <Grid style={{ paddingTop: 50 }} id="DM">
              <p className={classes.subHeading}>Digital Marketing</p>
              <Grid className={classes.imagesDisplay}>
                <img
                  className={classes.img}
                  src={GoogleAnalytics}
                  alt="GoogleAnalytics"
                />
                &nbsp; &nbsp; &nbsp;
                <img className={classes.img} src={GoogleAd} alt="GoogleAd" />
              </Grid>
            </Grid>
          </Carousel>
        </Grid>
        {/* <Grid item xs={1}></Grid> */}
      </Grid>
    </>
  );
}
