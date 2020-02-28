import React from "react";
import { Welcome, Info2, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { RegisterCard } from "../component/registerCard.js";

export const Register = () => (
	<div
		className="d-flex justify-content-center align-items-center"
		style={{
			width: "100%",
			height: "100%",
			"background-image":
				"url('https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
			"background-size": "cover"
		}}>
		<RegisterCard />
	</div>
);
