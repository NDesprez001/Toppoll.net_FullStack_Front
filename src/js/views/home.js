import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt--20px">
		<video
			playsinline="playsinline"
			autoPlay="autoplay"
			muted="muted"
			loop="loop"
			source
			src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
			type="video/mp4"
		/>
		<video autoPlay="autoplay" loop="loop" src="https://player.vimeo.com/2bfa4d00-5c49-47f2-a2ec-4d42d213a40a" />
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
