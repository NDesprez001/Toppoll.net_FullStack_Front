import React from "react";
import { Welcome } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";

export const Home = () => (
	<div className="text-center mt--20px">
		<Welcome />
		<video
			width="100%"
			height="100%"
			playsinline="playsinline"
			autoPlay="autoplay"
			muted="muted"
			loop="loop"
			source
			src="https://vod-progressive.akamaized.net/exp=1582664770~acl=%2A%2F1272382776.mp4%2A~hmac=154e32cbbd85b0493ff4efa3f81a6ff1c479bad61cde0832ce7ed5d6bb4000a8/vimeo-prod-skyfire-std-us/01/61/13/325309368/1272382776.mp4"
			type="video/mp4"
		/>

		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
