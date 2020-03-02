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

export function LoginCarousel() {
	return (
		<div className="carouselContent" style={{ width: "300px" }}>
			<Carousel
				className="alterCarousel"
				controls={false}
				indicators={false}
				interval="10000"
				style={{ height: "351px" }}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
						style={{ height: "351px" }}
					/>
					<Carousel.Caption>
						<h3>Discuss</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="Third slide"
						style={{ height: "351px" }}
					/>

					<Carousel.Caption>
						<h3>Learn</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/2054362/pexels-photo-2054362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="Third slide"
						style={{ height: "351px" }}
					/>

					<Carousel.Caption>
						<h3>Share</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
