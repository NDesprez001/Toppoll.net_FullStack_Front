import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Button, Form, FormControl, CardDeck, Card, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export function ToppollCard(props) {
	return (
		<div className="toppollLayout text-center" style={{ width: "400px" }}>
			<Card style={{ width: "18rem", borderRadius: "10px", height: "488px" }}>
				<div className="tImage">
					<img
						src="https://images.pexels.com/photos/1126373/pexels-photo-1126373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						style={{ width: "286px", borderRadius: "10px" }}
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
		</div>
	);
}

ToppollCard.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number
};
