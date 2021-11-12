import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import JobTable from "../Components/JobTable";
import "./Home.css";

const useStyles = makeStyles({
  topHeading: {
    fontSize: 48,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    textTransform: "uppercase",
    fontWeight: 700,
    margin: 0,
    color: "white",
  },
  guidance: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: "13pt",
    fontWeight: 400,
    width: "80%",
    margin: "0 auto",
    lineHeight: 1.75,
    color: "white",
  },
  button: {
    marginTop: 20,
    borderRadius: 12,
    textTransform: "uppercase",
  },
});
export default function Career() {
  const classes = useStyles();

  const seeVacancies = () => {
    document.getElementById("vacancies").scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div style={{height:window.innerHeight}} className="homeBG">
        <div style={{ paddingTop: 480 }}>
          <p className={classes.topHeading}>Careers at Smart Soft Studios</p>
          <p className={classes.guidance}>
            We at Smart Soft Studios offer a mix of growth prospects, advance
            learning, fair play and amazing work culture. Apply at
            careers@smartsoftstudios.com with the subject of job title.
          </p>
          <Button
            className="srvsBtn"
            onClick={seeVacancies}
            sx={{
              bgcolor: "#ef3066",
              color: "white",
              borderRadius: 12,
              minWidth: 200,
              fontWeight: 700,
              marginTop: 5,
            }}
          >
            See Vacanciecs
          </Button>
        </div>
      </div>
      <Grid container>
        <Grid Item xs={1}></Grid>
        <Grid id="vacancies" Item xs={10} style={{ marginBottom: 30 }}>
          <JobTable />
        </Grid>
        <Grid Item xs={1}></Grid>
      </Grid>
    </>
  );
}
