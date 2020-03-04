import React, { useState, useEffect, useContext } from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ToppollCard } from "../component/toppollCard.js";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PollTopic = () => {
	const { store } = useContext(Context);
	const [poll, setPoll] = useState(store.polls[props.match.params.index]);

	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
};

PollTopic.propTypes = {
	match: PropTypes.object
};
