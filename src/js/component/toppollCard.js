import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export function ToppollCard(props) {
	return (
		<div className="toppollLayout text-center mt-5" style={{ width: "400px" }}>
			<ScrollAnimation animateIn="fadeInUp" style={{ animationDuration: "3s" }}>
				<Card style={{ width: "400px", borderRadius: "10px", height: "550px" }}>
					<div className="tImage">
						<img
							src={props.data.image_link}
							style={{ width: "400px", height: "300px", borderRadius: "10px" }}
						/>
					</div>
					<Card.Body>
						<Card.Title>{props.data.poll_question}</Card.Title>
						<Card.Text>{props.data.poll_description}</Card.Text>
						<Link to={"/pollPage/" + props.index}>
							<div className="toppollButton">
								<button className="topicButton" variant="primary">
									Discuss
								</button>
							</div>
						</Link>
					</Card.Body>
				</Card>
			</ScrollAnimation>
		</div>
	);
}

ToppollCard.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number
};
