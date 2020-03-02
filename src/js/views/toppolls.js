import React from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { ToppollCard } from "../component/toppollCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

export const Toppolls = () => (
	<div
		style={{
			width: "100%",
			height: "100%",
			"background-image":
				"url('https://www.xmple.com/wallpaper/gradient-white-blue-linear-1920x1080-c2-ffffff-87cefa-a-150-f-14.svg')",
			"background-size": "cover"
		}}>
		<h1>Hello World!</h1>
		<ToppollCard />
	</div>
);
