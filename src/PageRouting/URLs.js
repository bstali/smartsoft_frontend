import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Careers from "../Pages/Careers";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AppBar from "../Components/AppBar";
import Footer from "../Components/Footer";

export default function URLs() {
  return (
    <Router>
      <AppBar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Contact-Us" component={Contact}></Route>
      <Route exact path="/Careers" component={Careers}></Route>
      <Route exact path="/About-Us" component={About}></Route>
      <Footer />
    </Router>
  );
}
