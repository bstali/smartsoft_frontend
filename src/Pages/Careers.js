import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import JobTable from "../Components/JobTable";

const useStyles = makeStyles({
  topHeading: {
    marginTop: 400,
    fontSize: 48,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    textTransform: "uppercase",
    fontWeight: 700,
    margin: 0,
  },
  guidance: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: "13pt",
    fontWeight: 400,
    width: "80%",
    margin: "0 auto",
    lineHeight: 1.75,
  },
  button: {
    marginTop: 20,
    borderRadius: 12,
    textTransform: "uppercase",
  },
  tableHeader: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    textTransform: "uppercase",
    marginBottom: 30,
    fontSize: 30,
  },
});
export default function Career() {
  const classes = useStyles();
  return (
    <>
      <p className={classes.topHeading}>Careers at Smart Soft Studios</p>
      <p className={classes.guidance}>
        We at Smart Soft Studios offer a mix of growth prospects, advance
        learning, fair play and amazing work culture. Apply at
        careers@smartsoftstudios.com with the subject of job title.
      </p>
      <Button
        style={{
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 12,
          textTransform: "uppercase",
        }}
        variant="contained"
      >
        See Vacanciecs
      </Button>
      <Grid container>
        <Grid Item xs={1}></Grid>
        <Grid Item xs={10} style={{marginBottom: 30}}>
          <p className={classes.tableHeader}>Job openings</p>
          <JobTable />
        </Grid>
        <Grid Item xs={1}></Grid>
      </Grid>
    </>
  );
}
