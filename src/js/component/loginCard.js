import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";

export function LoginCard() {
	return (
		<div className="loginLayout" style={{ width: "300px" }}>
			<div className="loginContents">
				<CardDeck>
					<Card>
						<Card.Body>
							<Card.Title>Login In!</Card.Title>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Username here"
									aria-label="Recipient's username"
									aria-describedby="Username"
								/>
							</InputGroup>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Password here"
									aria-label="Recipient's password"
									aria-describedby="Password"
								/>
							</InputGroup>
						</Card.Body>
						<Card.Footer>
							<small className="redirect">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
