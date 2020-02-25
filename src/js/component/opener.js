import React from "react";

export function Welcome() {
	return (
		<div className="greetings" style={{ position: "absolute", width: "100%" }}>
			<div className="head-greetings" style={{ "text-align": "center", "padding-top": 200 }}>
				<div className="animated fadeIn slower-5s">
					<h1>
						Welcome to <strong className="animated rubberBand delay-2s">T</strong>
						oppoll
					</h1>
					<h2 className="animated fadeUp delay-4s">The bowl to flood your thoughts into!</h2>
					<h3>Express yourself!!</h3>
				</div>
			</div>
		</div>
	);
}
