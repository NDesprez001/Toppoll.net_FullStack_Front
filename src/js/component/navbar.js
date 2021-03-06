import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Dropdown, DropdownButton } from "react-bootstrap";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light sticky-top mb-0">
			<div className="container">
				<Link to="/">
					<div className="d-flex justify-content-start align-items-center">
						<div className="logo">
							<img
								className="TPlogo"
								src="https://files.slack.com/files-pri/T0BFXMWMV-FNJUVAP7D/tplogo.png"
								alt="toppollLogo"
							/>
						</div>
						<span className="navbar-brand mb-0 h1">
							<div className="word_logo">
								<strong>T</strong>
								<span>oppoll.net</span>
							</div>
						</span>
					</div>
				</Link>
				<Link to="/">
					<Button variant="light">Home</Button>{" "}
				</Link>
				<Link to="/toppolls">
					<Button variant="light">Toppolls</Button>{" "}
				</Link>

				<div className="ml-auto">
					<Link to="/login">
						<Button variant="light">Login</Button>{" "}
					</Link>
					<Link to="/register">
						<Button variant="light">Sign Up</Button>{" "}
					</Link>
					<div className="socialMediaRef" style={{ display: "inline-block" }}>
						<DropdownButton id="dropdown-basic-button" variant="primary" title="Connect or contact">
							<Dropdown.Item href="https://www.instagram.com/toppoll_official/">Instagram</Dropdown.Item>
							<Dropdown.Item href="https://www.facebook.com/">Facebook</Dropdown.Item>
							<Dropdown.Item href="https://twitter.com/Toppoll1">Twitter</Dropdown.Item>
							<hr className="mt-0 mb-0" />
							<Dropdown.Item href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp">
								Toppoll@gmail.com
							</Dropdown.Item>
						</DropdownButton>
					</div>
				</div>
			</div>
		</nav>
	);
};
