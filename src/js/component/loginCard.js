import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";

export function LoginCard() {
	return (
		<div className="loginLayout">
			<div className="loginContents">
				<CardDeck>
					<Card>
						<Card.Body style={{ width: "500px", "text-align": "center", "border-radius": "50px" }}>
							<Card.Title>Login In!</Card.Title>
							<p>Enter you username:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Username"
									aria-label="User's username"
									aria-describedby="username"
								/>
							</InputGroup>
							<p>Enter your password:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Password"
									aria-label="User's password"
									aria-describedby="password"
								/>
							</InputGroup>
							<Button variant="primary" style={{ "border-radius": "50px" }}>
								Log in!
							</Button>
						</Card.Body>
						<Card.Footer>
							<small className="redirect1">{"Don't have an account?"}</small>
							<small className="redirect2">{" Create one"}</small>
							<a href="/register"> Here!</a>
						</Card.Footer>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
