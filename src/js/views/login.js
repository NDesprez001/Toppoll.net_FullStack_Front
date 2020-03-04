import React from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { LoginCard } from "../component/loginCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { LoginCarousel } from "../component/loginCarousel.js";

export const Login = () => (
	<div
		className="d-flex justify-content-center align-items-center"
		style={{
			width: "100%",
			height: "100%",
			"background-image":
				"url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
			backgroundSize: "cover"
		}}>
		<LoginCarousel />
		<LoginCard />
	</div>
);
