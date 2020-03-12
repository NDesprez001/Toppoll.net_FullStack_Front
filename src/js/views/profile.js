import React from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollUpButton from "react-scroll-up-button";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Footer } from "../component/footer.js";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<div className="profilePage">
			<div className="container profilePicBack">
				<img
					src="https://www.freeiconspng.com/uploads/account-profile-icon-2.png"
					style={{ width: "100%", height: "400px" }}
				/>
			</div>
			<div className="container profilePic">
				<img src="https://www.freeiconspng.com/uploads/account-profile-icon-2.png" />
			</div>

			<Footer />
		</div>
	);
};
