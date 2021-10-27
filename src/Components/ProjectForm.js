import React, { useState } from "react";
import { MenuItem, TextField, FormControl, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CountryDropdown } from "react-country-region-selector";

const useStyles = makeStyles({
  country: {
    minHeight: 60,
    fontFamily: "Montserrat, sans-serif",
    color: "#4a4a4a",
  },
  btn: {
    borderRadius: 12,
    marginTop: 20
  }
});

export default function ProjectForm() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
      <Paper elevation={3} >
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
      <Button style={{marginTop: 20, borderRadius: 12}} variant="contained">
        Get Started
      </Button>
    </>
  );
}
