import React from "react";
import { Grid, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloudIcon from "@mui/icons-material/Cloud";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "../Pages/Home.css";

const useStyles = makeStyles({
  cardContent: {
    color: "#797979",
    fontSize: 13,
  },
});

export default function Services() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={7}>
            <Grid item xs={4}>
              <Card
                className="service1"
                sx={{
                  width: 300,
                  height: 300,
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <LaptopIcon
                  className="icon1"
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Web design & development</h3>
                <p className={classes.cardContent}>
                  We create a smooth user experience for every web design and
                  development project we take.
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service2"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <PhoneAndroidIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Mobile App Development</h3>
                <p className={classes.cardContent}>
                  Smart Soft Studios enjoins a hallmark of projects in mobile
                  application development and contributed to the industry
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service3"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <SettingsSuggestIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Software Development</h3>
                <p className={classes.cardContent}>
                  For various startups and established businesses alike, our
                  exceptional software development company
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service4"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <FilterDramaIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Startup Solution</h3>
                <p className={classes.cardContent}>
                  We are the enablers of tech-savvy and budding entrepreneurs.
                  We groom and nurture entrepreneurs from various industries
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service5"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <FilterDramaIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>DevOps</h3>
                <p className={classes.cardContent}>
                  Smart Soft Studios would like to offer its services to move
                  your workload to Azure with our Free migration and DevOps
                  services during the lockdown!
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service6"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <PersonIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Resource Augmentation</h3>
                <p className={classes.cardContent}>
                  From dedicated and multi-tiered teams of professionals to
                  simple staff augmentation, we offer exceptional service of
                  resource allocation.
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service7"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <ShoppingCartIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Ecommerce Solution</h3>
                <p className={classes.cardContent}>
                  E-commerce solution requires a technically holistic approach
                  and it caters to all aspects including, design, development
                  and e-cart.
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service8"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <CloudIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Managed Cloud Hosting</h3>
                <p className={classes.cardContent}>
                  Smart Soft Studio’s Cloud Management Services drives us to
                  create a customized solution that addresses all unique
                  requirements
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service9"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <GroupIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>IT Resource Allocation</h3>
                <p className={classes.cardContent}>
                  Smart Soft Studio’s IT allocation service is all about
                  managing human resources frontiers including tracking,
                  optimization, and stages of analysis.
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service10"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <BusinessCenterIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Business Intelligence</h3>
                <p className={classes.cardContent}>
                  One of our hallmarks is Business Intelligence and Analytics
                  services. It offers a unique basis for insights
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service11"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <AccessibilityNewIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Business Process Outsourcing</h3>
                <p className={classes.cardContent}>
                  We have bespoke cost-effective, and quite flexible Business
                  Process Outsourcing services for clients to enable them across
                  their journey.
                </p>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className="service12"
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "white",
                  border: "1px solid",
                  borderColor: "#bdd030",
                }}
              >
                <AddBusinessIcon
                  style={{ fontSize: 50, marginTop: 50, color: "#bdd030" }}
                />
                <h3>Digital Marketing</h3>
                <p className={classes.cardContent}>
                  To establish the marketing possibilities of digital services,
                  you have to crack the supremacy of social media platforms
                </p>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
