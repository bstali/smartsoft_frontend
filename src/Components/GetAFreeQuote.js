import React, { useState } from "react";
import { Slide, Backdrop } from "@mui/material";
import ProjectForm from "./ProjectForm";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import "../Pages/Home.css";

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
    margin: 0,
    cursor: "pointer",
    color: "white",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GetAFreeQuote() {
  const classes = useStyles();
  const [openGetQuote, setOpenGetQuote] = useState(false);
  // const [rotate, setRotate] = useState(false);


  // const rotation = () => {
  //   if (window.scrollY > 0) {
  //     setRotate(true);
  //   } else {
  //     setRotate(false);
  //   }
  // };
  // window.addEventListener("scroll", rotation);

  const handleClickOpenGetQuote = () => {
    setOpenGetQuote(true);
  };

  const handleCloseGetQuote = () => {
    setOpenGetQuote(false);
  };

  return (
    <>
      <p onClick={handleClickOpenGetQuote} className={classes.quote}>
        Get a Free Quote
      </p>
      <div>
        <Backdrop
          open={openGetQuote}
          // onClick={handleCloseGetQuote}
          TransitionComponent={Transition}
          sx={{
            backgroundColor: "",
            display: "block",
            boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)",
            zIndex: 5,
          }}
        >
          <p className={classes.text}>
            Get In Touch With The Team &nbsp;&nbsp;{" "}
            <CloseIcon className={classes.closeIcon} onClick={handleCloseGetQuote} />
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
