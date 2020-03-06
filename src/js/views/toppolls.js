import React, { useState, useEffect, useContext } from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { ToppollCard } from "../component/toppollCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ToppollCarousel } from "../component/toppollCarousel.js";
import { Context } from "../store/appContext";

export const Toppolls = () => {
	const { store } = useContext(Context);

	return (
		<div
			className="container"
			style={{
				width: "100%",
				height: "100%"
			}}>
			<ToppollCarousel />
			<div
				className="topics card-group d-flex justify-content-around"
				style={{ width: "1222px", margin: "auto" }}>
				{store.polls.map((item, index) => {
					return <ToppollCard key={index} data={item} index={index} />;
				})}
				{/* <ToppollCard data={{ name: "idk" }} /> */}
				{/* <ToppollCard />
				<ToppollCard /> */}
			</div>
		</div>
	);
};
