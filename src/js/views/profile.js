import React, { useState, useEffect, useContext } from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { ToppollCard } from "../component/toppollCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollUpButton from "react-scroll-up-button";
import { ToppollCarousel } from "../component/toppollCarousel.js";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer.js";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<div className="profilePage">
			<div className="container profilePicBack">
				<img src="https://www.freeiconspng.com/uploads/account-profile-icon-2.png" />
			</div>
			<div className="container profilePic" style={{ position: "relative", bottom: "10%", left: "2%" }}>
				<img src="https://www.freeiconspng.com/uploads/account-profile-icon-2.png" />
				<h1 className="mt-3">Username</h1>
				<h5>Date</h5>
			</div>
			<div className="container favPollsHead">
				<h3>Polls you saved</h3>
			</div>
			<div className="container favPolls">
				<TakeSpace />
				<TakeSpace />
				<TakeSpace />
				<TakeSpace />
				<TakeSpace />
				<TakeSpace />
				<div className="" />
			</div>

			<Footer />
		</div>
	);
};
