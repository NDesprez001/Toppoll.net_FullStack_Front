import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TakeSpace } from "../component/opener";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<TakeSpace />
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
