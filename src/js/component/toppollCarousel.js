import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	NavDropdown,
	Nav,
	Button,
	Form,
	FormControl,
	CardDeck,
	Card,
	InputGroup,
	Carousel
} from "react-bootstrap";

export function ToppollCarousel() {
	return (
		<div
			className="carouselContent d-flex justify-content-center"
			style={{ width: "100%", height: "800px", margin: "auto" }}>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/55825/gold-bear-gummi-bears-bear-yellow-55825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
						style={{ height: "800px" }}
					/>
					<Carousel.Caption>
						<h3>Be a winner</h3>
						<p>{'be announced as "Most active Toppoller on our upcoming leaderboard"!'}</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/906018/pexels-photo-906018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="Third slide"
						style={{ height: "800px" }}
					/>

					<Carousel.Caption>
						<h3>Stay AWARE!!</h3>
						<p>
							Be sure not to give out any of your personal information. In case of an individual posing as
							an administrator, notify us IMMEDIATELY at @toppoll.gmail.com!
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/623046/pexels-photo-623046.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
						alt="Third slide"
						style={{ height: "800px" }}
					/>

					<Carousel.Caption>
						<h3>{"A little briefing"}</h3>
						<p>
							{
								"Don't know much about the topic? No worries, each toppoll is designed to give a short description and references about the topic so you can build prior knowlege about it!"
							}
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
