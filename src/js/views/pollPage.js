import React, { useState, useEffect, useContext } from "react";
import { Welcome, Take_space, TakeSpace } from "../component/opener.js";
import { Container, NavDropdown, Nav, Button, Form, FormControl, Jumbotron } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { ToppollCard } from "../component/toppollCard.js";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function PollTopic(props) {
	const { store } = useContext(Context);
	const [poll, setPoll] = useState(store.polls[props.match.params.index]);

	return (
		<div className="pollBody">
			{poll && (
				<div className="container text-center mt-5 pt-5">
					<div className="containContent">
						<hr />
						<h1>{poll.poll_question}</h1>
						<hr />
						<img src={poll.image_link} />
						<h5>{poll.poll_description}</h5>
					</div>

					<div className="pollOptions align-items-center" style={{ margin: "auto" }}>
						<Button className="option" variant="outline-primary" style={{ width: "400px" }}>
							{poll.option1}
						</Button>
						<br />
						<Button className="option" variant="outline-primary" style={{ width: "400px" }}>
							{poll.option2}
						</Button>
						<br />
						<Button className="option" variant="outline-primary" style={{ width: "400px" }}>
							{poll.option3}
						</Button>
						<br />
						<Button className="option" variant="outline-primary" style={{ width: "400px" }}>
							{poll.option4}
						</Button>
					</div>
					<Link to="/toppolls">
						<div className="navBack" style={{ borederRadius: "10px" }}>
							<button className="b1">
								<p>Return to Toppolls</p>
							</button>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}

PollTopic.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
	match: PropTypes.object
};
