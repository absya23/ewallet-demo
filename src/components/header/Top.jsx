import React from "react";
import { images } from "../../constants";

const Top = ({ name }) => {
	return (
		<div className="group-top">
			<div className="container">
				<div className="top">
					<div className="name">Chào, {name}!</div>
					<div className="img">
						<img src={images.avatar} className="avatar" />
						<span className="dot"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
