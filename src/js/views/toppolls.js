import React, { useState, useEffect, useContext } from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { ToppollCard } from "../component/toppollCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollUpButton from "react-scroll-up-button";
import { ToppollCarousel } from "../component/toppollCarousel.js";
import { Context } from "../store/appContext";

export const Toppolls = () => {
	const { store } = useContext(Context);

	return (
		<div
			className="toppollBody"
			style={{
				width: "100%"
			}}>
			<ToppollCarousel />
			<div className="headingPick text-center mt-5 mb-5">
				<hr />
				<h1>Pick a poll, any poll!</h1>
				<hr />
			</div>
			<div
				className="topics card-group d-flex justify-content-between align-items-center"
				style={{ width: "1222px", margin: "auto" }}>
				{store.polls.map((item, index) => {
					return <ToppollCard key={index} data={item} index={index} />;
				})}
			</div>
			<ScrollUpButton />
		</div>
	);
};
