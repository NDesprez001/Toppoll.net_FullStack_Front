import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";

export function ToppollCard() {
	return (
		<div className="toppollLayout">
			<Card style={{ width: "18rem", "border-radius": "10px" }}>
				<div className="tImage">
					<img
						src="https://images.pexels.com/photos/1126373/pexels-photo-1126373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						style={{ width: "286px", "border-radius": "10px" }}
					/>
				</div>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						{
							"Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					</Card.Text>
					<div className="toppollButton">
						<button className="topicButton" variant="primary">
							Discuss
						</button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
