import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InboxIcon from "@mui/icons-material/Inbox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StorageIcon from "@mui/icons-material/Storage";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import GroupIcon from "@mui/icons-material/Group";
import TranslateIcon from "@mui/icons-material/Translate";
import BuildIcon from "@mui/icons-material/Build";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const useStyles = makeStyles({
  headingTop: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    color: "#333333",
    margin: 0,
  },
  partnersHeading: {
    fontSize: 32,
    color: "#333333",
    letterSpacing: 6,
    margin: 0,
  }
});
export default function TechnologyAndBusiness() {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 80 }}>
      <p className={classes.headingTop}>TECHNOLOGY & BUSINESS</p>
      <p className={classes.partnersHeading}>PARTNERS AROUND THE WORLD</p>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item>
          <InboxIcon
            style={{ fontSize: 50, marginTop: 50, color: "#22C222" }}
          />
        </Grid>
        <Grid item>
          <ListAltIcon
            style={{ fontSize: 50, marginTop: 50, color: "#FECE5F" }}
          />
        </Grid>
        <Grid item>
          <StorageIcon
            style={{ fontSize: 50, marginTop: 50, color: "#3E5E9A" }}
          />
        </Grid>
        <Grid item>
          <AddBusinessIcon
            style={{ fontSize: 50, marginTop: 50, color: "#F1685E" }}
          />
        </Grid>
        <Grid item>
          <GroupIcon
            style={{ fontSize: 50, marginTop: 50, color: "#3C763D" }}
          />
        </Grid>
        <Grid item>
          <TranslateIcon
            style={{ fontSize: 50, marginTop: 50, color: "#A412FF" }}
          />
        </Grid>
        <Grid item>
          <BuildIcon
            style={{ fontSize: 50, marginTop: 50, color: "#FF6E07" }}
          />
        </Grid>
        <Grid item>
          <AspectRatioIcon
            style={{ fontSize: 50, marginTop: 50, color: "#999999" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
