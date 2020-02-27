import React from "react";
import { Welcome, Info2, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

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
			src="https://player.vimeo.com/external/210744044.sd.mp4?s=2c321f5fb693e9b7d0048e00930f9455a1d06bdf&profile_id=164&oauth2_token_id=57447761"
			type="video/mp4"
		/>
		<div className="info_cluster d-flex justify-content-around align-items-center ">
			<div className="info_cont1">
				<hr />
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "5s" }}>
					<h1>Get Comfortable!</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "7s" }}>
						<h4>Talk to all sorts of people from all over, from anywhere!</h4>
					</ScrollAnimation>
				</ScrollAnimation>
				<hr />
			</div>
			<ScrollAnimation animateIn="bounceIn" style={{ animationDuration: "7s" }}>
				<div className="info_cont2">
					<img
						src="https://lh3.googleusercontent.com/proxy/V4LTQDHNYgA_VoQI83JY5M6M4H4hAaCWS5z_f-OFuzb9gpljWNhvuKFa85lR_1ammwRTkMAGr5J1vgjOQrdkUPinsuw7htQsIC8eGTQ0aRyZRnUYZ64"
						style={{ width: "500px" }}
					/>
				</div>
			</ScrollAnimation>
		</div>
		<Info2 />
		<video
			width="100%"
			playsinl="playsinline"
			autoPlay="autoplay"
			muted="muted"
			loop="loop"
			source
			src="https://player.vimeo.com/external/313697336.sd.mp4?s=cdff962a87a46830fe2662037b03ec2b2bcdd946&profile_id=164&oauth2_token_id=57447761"
			type="video/mp4"
		/>
		<TakeSpace />
		<TakeSpace />
		<TakeSpace />
		<TakeSpace />
	</div>
);
