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
			style={{ width: "900px", height: "600px", margin: "auto" }}>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
						style={{ height: "600px" }}
					/>
					<Carousel.Caption>
						<h3>Be a winner</h3>
						<p>{'be announced as "Most active Toppoller on our upcoming leaderboard"!'}</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="Third slide"
						style={{ height: "600px" }}
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="Third slide"
						style={{ height: "600px" }}
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
