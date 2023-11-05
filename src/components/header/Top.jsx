import React from "react";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

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

export const Top2 = ({ title = "", children }) => {
	const navigate = useNavigate();
	return (
		<div className="group-top group-top-2">
			<div className="container">
				<div className="top row">
					<div className="icon col-2">
						<button className="btn" onClick={() => navigate(-1)}>
							<i className="bx bx-left-arrow-alt"></i>
						</button>
					</div>
					<div className="col-8 text-center">
						<h6 className="title">{title}</h6>
					</div>
					<div className="col-2"></div>
				</div>
				<div className="row">{children}</div>
			</div>
		</div>
	);
};
