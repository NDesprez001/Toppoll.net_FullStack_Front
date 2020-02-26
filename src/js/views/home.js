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
			src="https://v.ftcdn.net/02/98/91/68/700_F_298916839_hsDs9lzZjpbWWV6sOeB7OT0GJ5dFMmVu_ST.mp4"
			type="video/mp4"
		/>
		<div className="info_cluster d-flex justify-content-around align-items-center mb-5">
			<div className="info_cont1">
				<hr />
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "5s" }}>
					<h1>Be heard GLOBALLY!</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "7s" }}>
						<h4>See how opinions can vary from accross the GLOBE!</h4>
					</ScrollAnimation>
				</ScrollAnimation>
				<hr />
			</div>
			<ScrollAnimation animateIn="bounceIn" style={{ animationDuration: "7s" }}>
				<div className="info_cont2">
					<img
						src="https://lh3.googleusercontent.com/proxy/Lw9B4FkTm-vbqpVxgjfTYoyjrq9ei3Y7R7je85LkrkCDzD-bKnGD7zSxsXIG86-UnBlD41oO68v1Rc7s1gNiYLTsd4B1NtdRrOyUVL2D78ESojZ6Ei8"
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
			src="https://v.ftcdn.net/02/14/15/69/240_F_214156930_Tgoj0fpjJYF7hw4XlXwWHjmDiDqo1mSL_ST.mp4"
            type="video/mp4"
            
		/>
		<TakeSpace />
		<TakeSpace />
		<TakeSpace />
		<TakeSpace />

	</div>
);
