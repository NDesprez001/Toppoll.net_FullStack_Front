//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import "animate.css";
import "react-animate-on-scroll";
import "react-scroll-up-button";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/home.scss";
import "../styles/demo.scss";
import "../styles/login.scss";
import "../styles/register.scss";
import "../styles/toppolls.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
