import React from "react";
import { Welcome } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";

export const Home = () => (
	<div className="text-center mt--20px">
		<Welcome />
		<video
			width="100%"
			playsinl="playsinline"
			autoPlay="autoplay"
			muted="muted"
			loop="loop"
			source
			src="https://vod-progressive.akamaized.net/exp=1582664770~acl=%2A%2F1272382776.mp4%2A~hmac=154e32cbbd85b0493ff4efa3f81a6ff1c479bad61cde0832ce7ed5d6bb4000a8/vimeo-prod-skyfire-std-us/01/61/13/325309368/1272382776.mp4"
			type="video/mp4"
		/>
		<div>
			<h1>Talk a lot!</h1>
			<h4>Have conversations with different people in different places!</h4>
			<img src="https://gifimage.net/wp-content/uploads/2018/05/spinning-globe-animated-gif-free-download-10.gif" />
		</div>
	</div>
);
