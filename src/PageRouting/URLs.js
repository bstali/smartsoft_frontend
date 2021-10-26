import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Careers from "../Pages/Careers";
import AppBar from "../Components/AppBar";
import Footer from "../Components/Footer";

export default function URLs() {
  return (
    <Router>
      <AppBar />
      <Route exact path="/Contact-Us" component={Contact}></Route>
      <Route exact path="/Careers" component={Careers}></Route>
      <Footer />
    </Router>
  );
}
