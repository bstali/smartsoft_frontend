import React, { useState } from "react";
import { Button, Backdrop } from "@mui/material";
import ProjectForm from "./ProjectForm";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  text: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    fontSize: 30,
    margin: 0,
  },
  description: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    margin: 0,
    marginBottom: 20,
  },
  closeIcon: {
    cursor: "pointer"
  }
});

export default function GetAFreeQuote() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          color: "white",
          fontWeight: 400,
          fontFamily:
            "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        Get a Free Quote
      </Button>
      <div>
        <Backdrop
          open={open}
          onClick={handleClose}
          sx={{ backgroundColor: "#2C94C5", display: "block", Opacity: 0.5 }}
        >
          <p className={classes.text}>
            Get In Touch With The Team &nbsp;&nbsp; <CloseIcon className={classes.closeIcon}onClick={handleClose} />
          </p>
          <p className={classes.description}>
            Get free quote and consultation for your project
          </p>
          <ProjectForm />
        </Backdrop>
      </div>
    </>
  );
}
