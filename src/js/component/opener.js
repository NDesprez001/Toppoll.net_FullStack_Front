import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export function Welcome() {
	return (
		<div className="greetings" style={{ position: "absolute", width: "100%" }}>
			<div className="head-greetings" style={{ "text-align": "center", "padding-top": 200 }}>
				<div className="animated fadeIn delay-1s" style={{ animationDuration: "3s" }}>
					<h1>
						Welcome to <strong>T</strong>
						oppoll
					</h1>
					<h2 className="animated fadeInUp delay-1s" style={{ animationDuration: "8s" }}>
						The bowl to flood your thoughts into!
					</h2>
					<h3 className="animated fadeInUp delay-1s" style={{ animationDuration: "10s" }}>
						Express yourself!!
					</h3>
				</div>
			</div>
		</div>
	);
}

export function Info2() {
	return (
		<div className="info2_sub" style={{ position: "absolute", bottom: "-160%", right: "30%" }}>
			<hr />
			<ScrollAnimation animateIn="fadeIn" style={{ animationDuration: "5s" }}>
				<h1>Diverse Opinions</h1>
				<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "7s" }}>
					<h4>With tons of people to converseate with, you can find many conversations,</h4>
					<h4>debates, or even explainations. The discussion can be endless!</h4>
				</ScrollAnimation>
			</ScrollAnimation>
			<hr />
		</div>
	);
}

export function TakeSpace() {
	return (
		<div className="placeHolder">
			<h4>space</h4>
			<h3>space</h3>
			<h2>space</h2>
			<h1>space</h1>
		</div>
	);
}
