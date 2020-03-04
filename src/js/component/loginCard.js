import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";

export function LoginCard() {
	return (
		<div className="loginLayout">
			<div className="subLogo d-flex justify-content-center">
				<img
					className="TPlogo"
					src="https://files.slack.com/files-pri/T0BFXMWMV-FNJUVAP7D/tplogo.png"
					alt="toppollLogo"
					style={{
						width: "100px",
						height: "100px",
						borderRadius: "100px",
						position: "absolute",
						top: "26%",
						"z-index": "1"
					}}
				/>
			</div>

			<div className="loginContents">
				<CardDeck>
					<Card>
						<Card.Body style={{ width: "500px", "text-align": "center", borderRadius: "50px" }}>
							<Card.Title>Login In!</Card.Title>
							<p>Enter you username:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Username"
									aria-label="User's username"
									aria-describedby="username"
									style={{ borderRadius: "50px" }}
								/>
							</InputGroup>
							<p>Enter your password:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Password"
									aria-label="User's password"
									aria-describedby="password"
									style={{ borderRadius: "50px" }}
								/>
							</InputGroup>
							<Button variant="primary" style={{ borderRadius: "50px" }}>
								Log in!
							</Button>
						</Card.Body>
						<div className="loginFooter" style={{ "text-align": "center" }}>
							<Card.Footer>
								<small className="redirect1">{"Don't have an account?"}</small>
								<small className="redirect2">{" Create one"}</small>
								<a href="/register"> Here!</a>
							</Card.Footer>
						</div>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
