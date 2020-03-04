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
				height: "100%",
				backgroundImage:
					"url('https://www.xmple.com/wallpaper/gradient-white-blue-linear-1920x1080-c2-ffffff-87cefa-a-150-f-14.svg')",
				backgroundSize: "cover"
			}}>
			<ToppollCarousel />
			<div className="topics d-flex justify-content-around mt-5" style={{ margin: "auto" }}>
				{polls.map((item, index) => {
					return (
						<div key={index}>
							<ToppollCard data={item} index={index} />
						</div>
					);
				})}
				{/* <ToppollCard data={{ name: "idk" }} /> */}
				{/* <ToppollCard />
				<ToppollCard /> */}
			</div>
		</div>
	);
};
