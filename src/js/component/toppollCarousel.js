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
			style={{ width: "800px", height: "400px", margin: "auto" }}>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
						style={{ height: "400px" }}
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="Third slide"
						style={{ height: "400px" }}
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
						style={{ height: "400px" }}
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
