import React from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollUpButton from "react-scroll-up-button";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Footer } from "../component/footer.js";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt--20px">
		<div className="banner">
			<Welcome />
		</div>
		<div className="info_cluster d-flex justify-content-around align-items-center ">
			<div className="info_cont1">
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "3s" }}>
					<h1>The Sky Is The Limit!</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "6s" }}>
						<h4>There are little to no limits to what the topics can be,</h4>
						<h4>so whether from animals to politics, go as far as your mind takes you!</h4>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>
			<ScrollAnimation animateIn="bounceIn" style={{ animationDuration: "7s", animationDelay: "3s" }}>
				<Link to="/login">
					<div className="info_cont2">
						<button className="b1" variant="light">
							<p>Get started</p>
						</button>
					</div>
				</Link>
			</ScrollAnimation>
		</div>
		<div className="banner2 d-flex justify-content-center align-items-center">
			<div className="banner2Content">
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "3s" }}>
					<h1>Diverse Opinions</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "6s" }}>
						<h4>With tons of people to converseate with, you can find many conversations,</h4>
						<h4>debates, or even explainations. The discussion can be endless!</h4>
					</ScrollAnimation>
				</ScrollAnimation>
				<ScrollAnimation animateIn="bounceIn" style={{ animationDuration: "7s", animationDelay: "3s" }}>
					<Link to="/toppolls">
						<div className="info_cont3 mt-5">
							<button className="b2" variant="light">
								<p>Take a look</p>
							</button>
						</div>
					</Link>
				</ScrollAnimation>
			</div>
		</div>
		<div className="socialMedia">
			<ScrollAnimation
				animateIn="rollIn"
				style={{ animationDuration: "3s", width: "400px", position: "relative", left: "20%" }}>
				<div className="instagramPic">
					<img
						className="ig"
						src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png"
					/>
				</div>
			</ScrollAnimation>
			<ScrollAnimation
				animateIn="rollIn"
				style={{ animationDuration: "3s", width: "400px", position: "relative", left: "10%" }}>
				<div className="facbookPic">
					<img
						className="fb"
						src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png"
					/>
				</div>
			</ScrollAnimation>
			<div className="socialBanner" style={{ width: "600px", position: "relative", bottom: "20%", left: "60%" }}>
				<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "3s" }}>
					<h1>Spread the word!!</h1>
					<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "6s" }}>
						<h4>
							share great debates, questions and all sorts of things with you friends, family and further!{" "}
						</h4>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>
			<ScrollAnimation
				animateIn="rollIn"
				style={{ animationDuration: "3s", width: "400px", position: "relative", left: "38%", bottom: "30%" }}>
				<div className="twitterPic">
					<img
						className="tw"
						src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png"
					/>
				</div>
			</ScrollAnimation>
			<ScrollAnimation
				animateIn="rollIn"
				style={{ animationDuration: "3s", width: "400px", position: "relative", bottom: "30%", left: "20%" }}>
				<div className="gmailPic">
					<img
						className="gm"
						src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png"
					/>
				</div>
			</ScrollAnimation>
			<div className="info_cluster2 d-flex justify-content-around align-items-center ">
				<div className="info_cont4">
					<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "3s" }}>
						<h1>Be part of the family!</h1>
						<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "6s" }}>
							<h4>Join the many different topics and decusion</h4>
							<h4>so whether from animals to politics, go as far as your mind takes you!</h4>
						</ScrollAnimation>
					</ScrollAnimation>
				</div>
				<ScrollAnimation animateIn="bounceIn" style={{ animationDuration: "7s", animationDelay: "3s" }}>
					<Link to="/register">
						<div className="info_cont5">
							<button className="b1" variant="light">
								<p>Join Now!</p>
							</button>
						</div>
					</Link>
				</ScrollAnimation>
			</div>
			<ScrollUpButton />
		</div>
		<Footer />
	</div>
);
