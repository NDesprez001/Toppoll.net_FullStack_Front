import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";

export function RegisterCard() {
	return (
		<div className="registerLayout" style={{ width: "500px" }}>
			<div className="subLogo d-flex justify-content-center">
				<img
					className="TPlogo"
					src="https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg"
					alt="toppollLogo"
					style={{
						width: "100px",
						height: "100px",
						"border-radius": "100px",
						position: "absolute",
						top: "14%",
						"z-index": "1"
					}}
				/>
			</div>
			<div className="registerContents">
				<CardDeck>
					<Card>
						<Card.Body>
							<Card.Title>Join the fun!</Card.Title>
							<p>Enter email:</p>
							<InputGroup className="mb-3">
								<InputGroup.Prepend>
									<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl placeholder="Email" aria-label="User's email" aria-describedby="email" />
							</InputGroup>
							<p>Enter your first name:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="First name"
									aria-label="User's first name"
									aria-describedby="first_name"
									style={{ "border-radius": "50px" }}
								/>
							</InputGroup>
							<p>Enter you last name:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Last name"
									aria-label="User's last name"
									aria-describedby="last_name"
									style={{ "border-radius": "50px" }}
								/>
							</InputGroup>
							<p>Create your username:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Username"
									aria-label="User's username"
									aria-describedby="username"
									style={{ "border-radius": "50px" }}
								/>
							</InputGroup>
							<p>Create your password:</p>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Password"
									aria-label="User's password"
									aria-describedby="uassword"
									style={{ "border-radius": "50px" }}
								/>
							</InputGroup>
							<div className="d-flex justify-content-center">
								<Button variant="primary" style={{ margin: "auto", borderRadius: "50px" }}>
									Create account!
								</Button>
							</div>
						</Card.Body>
						<div className="registerFooter" style={{ "text-align": "center" }}>
							<Card.Footer>
								<small className="redirect1">{"Already have an account?"}</small>
								<small className="redirect2">{" Log in"}</small>
								<a href="/login"> Here!</a>
							</Card.Footer>
						</div>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
