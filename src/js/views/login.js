import React from "react";
import { Welcome, Info2, Take_space, TakeSpace } from "../component/opener.js";
import { LoginCard } from "../component/loginCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export const Login = () => (
	<div className="register" style={{ "text-align": "center", "max-width": "100%", margin: "auto" }}>
		<LoginCard />
	</div>
);
