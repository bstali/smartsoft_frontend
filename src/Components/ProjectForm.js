import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MenuItem,
  TextField,
  FormControl,
  Paper,
  Button,
  Backdrop,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CountryDropdown } from "react-country-region-selector";
import "../Pages/Home.css";

const useStyles = makeStyles({
  country: {
    minHeight: 60,
    fontFamily: "Montserrat, sans-serif",
    color: "#4a4a4a",
  },
  btn: {
    borderRadius: 12,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 700,
    color: "white",
  },
});

export default function ProjectForm() {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToHome = () => {
    history.push("/");
  };

  const projectTypes = [
    {
      value: "Web Development",
      label: "Web Development",
    },
    {
      value: "App Development",
      label: "App Development",
    },
    {
      value: "Managed Cloud Hosting",
      label: "Managed Cloud Hosting",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const nameChangeHander = (event) => {
    setName(event.target.value);
  };
  const emailChangeHander = (event) => {
    setEmail(event.target.value);
  };
  const projectTypeChangeHander = (event) => {
    setProjectType(event.target.value);
  };
  const selectCountry = (val) => {
    setCountry(val);
  };
  const phoneChangeHander = (event) => {
    setPhone(event.target.value);
  };
  const messageChangeHander = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Paper elevation={3}>
        {/* Name */}
        <TextField
          style={{ marginTop: 10 }}
          required
          id="outlined-required"
          variant="outlined"
          fullWidth
          label="YOUR NAME"
          value={name}
          onChange={nameChangeHander}
        />
        {/* Email */}
        <TextField
          style={{ marginTop: 10 }}
          required
          id="outlined-required"
          variant="outlined"
          fullWidth
          label="YOUR EMAIL"
          value={email}
          onChange={emailChangeHander}
        />
        {/* Project Type*/}
        <TextField
          style={{ marginTop: 10 }}
          id="outlined-select-currency"
          select
          label="SELECT PROJECT"
          fullWidth
          value={projectType}
          onChange={projectTypeChangeHander}
        >
          {projectTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* Select Country */}
        <FormControl style={{ marginTop: 10 }} variant="outlined" fullWidth>
          <CountryDropdown
            classes={classes.country}
            value={country}
            onChange={selectCountry}
          />
        </FormControl>
        {/* Phone */}
        <TextField
          style={{ marginTop: 10 }}
          required
          id="outlined-required"
          variant="outlined"
          fullWidth
          label="YOUR PHONE"
          value={phone}
          onChange={phoneChangeHander}
        />
        {/* Message */}
        <TextField
          style={{ marginTop: 10, marginBottom: 10 }}
          required
          id="outlined-required"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          label="YOUR MESSAGE"
          value={message}
          onChange={messageChangeHander}
        />
      </Paper>
      <Button
        style={{ marginTop: 20, borderRadius: 12 }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Get Started
      </Button>
      <div>
        <Backdrop
          open={open}
          onClick={handleClose}
          sx={{
            display: "block",
            boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.7)",
            zIndex: 10
          }}
        >
          <div style={{ marginTop: 200 }}>
            <p className="thanks">
              <center> Thank You </center>
            </p>
            <p className={classes.text}>Our team will get in touch with you</p>
            <Button
              className="srvsBtn"
              onClick={goToHome}
              sx={{
                bgcolor: "#bdd030",
                color: "white",
                borderRadius: 12,
                minWidth: 200,
                fontWeight: 700,
                marginTop: 5,
              }}
            >
              Get Back To Home
            </Button>
          </div>
        </Backdrop>
      </div>
    </>
  );
}
