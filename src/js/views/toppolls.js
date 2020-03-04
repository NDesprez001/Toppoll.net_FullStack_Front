import React, { useState, useEffect, useContext } from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { ToppollCard } from "../component/toppollCard.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ToppollCarousel } from "../component/toppollCarousel.js";
import { Context } from "../store/appContext";

export const Toppolls = () => {
	const { store } = useContext(Context);
	const [polls, setPolls] = useState(store.polls);

	useEffect(() => {
		console.log(polls);
		// fetch("https://3000-d74dd462-eefd-4f5e-ac59-8dbd53a34abb.ws-us02.gitpod.io/polls", {
		// 	method: "GET",
		// 	cache: "no-cache"
		// })
		// 	.then(resp => resp.json())
		// 	.then(data => {
		// 		console.log(data);
		// 	});
	}, []);

	return (
		<div
			style={{
				width: "100%",
				height: "100%"
			}}>
			<ToppollCarousel />
			<div
				className="topics card-group d-flex justify-content-around"
				style={{ width: "1222px", margin: "auto" }}>
				{polls.map((item, index) => {
					return <ToppollCard key={index} data={item} index={index} />;
				})}
				{/* <ToppollCard data={{ name: "idk" }} /> */}
				{/* <ToppollCard />
				<ToppollCard /> */}
			</div>
		</div>
	);
};
