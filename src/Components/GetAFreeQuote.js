import React, { useState } from "react";
import { Dialog, Slide } from "@mui/material";
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
    cursor: "pointer",
  },
  quote: {
    fontWeight: 400,
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    float: "right",
    margin: 0,
    cursor: "pointer",
    color: "black",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GetAFreeQuote() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <p onClick={handleClickOpen} className={classes.quote}>
        Get a Free Quote
      </p>
      <div>
        <Dialog
          open={open}
          onClick={handleClose}
          TransitionComponent={Transition}
          sx={{
            backgroundColor: "",
            display: "block",
            boxShadow: "inset 0 0 0 1000px #00aeffc9",
            zIndex: 2,
          }}
        >
          <p className={classes.text}>
            Get In Touch With The Team &nbsp;&nbsp;{" "}
            <CloseIcon className={classes.closeIcon} onClick={handleClose} />
          </p>
          <p className={classes.description}>
            Get free quote and consultation for your project
          </p>
          <ProjectForm />
        </Dialog>
      </div>
    </>
  );
}
