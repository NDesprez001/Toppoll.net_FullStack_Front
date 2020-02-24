import React from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl } from "react-bootstrap";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="TPlogo"
					src="https://files.slack.com/files-pri/T0BFXMWMV-FNJUVAP7D/tplogo.png"
					alt="toppollLogo"
				/>
				<span className="navbar-brand mb-0 h1">
					<strong>T</strong>
					oppoll.net
				</span>
			</Link>
			<Link to="/">
				<Button variant="light">Home</Button>{" "}
			</Link>
			<Link to="/">
				<Button variant="light">Disqus</Button>{" "}
			</Link>

			<div className="ml-auto">
				<Link to="/">
					<Button variant="light">Login</Button>{" "}
				</Link>
				<Link to="/">
					<Button variant="light">Sign Up</Button>{" "}
				</Link>
			</div>
		</nav>
	);
};
