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
							<p>Enter username here:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Username"
									aria-label="Recipient's username"
									aria-describedby="Username"
								/>
							</InputGroup>
							<p>Enter password here:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Password"
									aria-label="Recipient's password"
									aria-describedby="Password"
								/>
							</InputGroup>
						</Card.Body>
						<Card.Footer>
							<small className="redirect1">{"Don't have an account?"}</small>
							<small className="redirect2">{" Create one"}</small>
							<a href="https://www.pexels.com/"> Here!</a>
						</Card.Footer>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
