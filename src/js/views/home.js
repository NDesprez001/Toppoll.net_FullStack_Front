import React from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Footer } from "../component/footer.js";

export const Home = () => (
	<div className="text-center mt--20px">
		<div className="banner">
			<Welcome />
		</div>
		<div className="info_cluster d-flex justify-content-around align-items-center ">
			<div className="info_cont1">
				<hr />
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "3s" }}>
					<h1>The Sky Is The Limit!</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "6s" }}>
						<h4>There are little to no limits to what the topics can be,</h4>
						<h4>so whether from animals to politics, go as far as your mide takes you!</h4>
					</ScrollAnimation>
				</ScrollAnimation>
				<hr />
			</div>
			<ScrollAnimation animateIn="bounceIn" style={{ animationDuration: "7s" }}>
				<div className="info_cont2">
					<Button variant="light" style={{ "border-radius": "80px", width: "100px", height: "100px" }}>
						Get started
					</Button>{" "}
				</div>
			</ScrollAnimation>
		</div>
		<div className="banner2 d-flex justify-content-center align-items-center">
			<div className="banner2Content">
				<hr />
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "3s" }}>
					<h1>Diverse Opinions</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "6s" }}>
						<h4>With tons of people to converseate with, you can find many conversations,</h4>
						<h4>debates, or even explainations. The discussion can be endless!</h4>
					</ScrollAnimation>
				</ScrollAnimation>
				<hr />
				<Button variant="light" style={{ "border-radius": "80px", width: "100px", height: "100px" }}>
					Check it out!
				</Button>
			</div>
		</div>
		<TakeSpace />
		<TakeSpace />
		<TakeSpace />
		<TakeSpace />
		<Footer />
	</div>
);
