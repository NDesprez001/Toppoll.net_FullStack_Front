import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export function Welcome() {
	return (
		<div className="greetings" style={{ position: "absolute", width: "100%" }}>
			<div className="head-greetings" style={{ "text-align": "center", "padding-top": 200 }}>
				<div className="animated fadeIn delay-1s" style={{ animationDuration: "3s" }}>
					<h1>
						WELCOME TO
						<ScrollAnimation animateIn="bounce">
							<strong>T</strong>
							OPPOLL
						</ScrollAnimation>
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
