import React from "react";
import { useNavigate } from "react-router-dom";

const TopShort = ({ children }) => {
	const navigate = useNavigate();
	return (
		<div className="top-header">
			<div className="container">
				<div className="top row">
					<div className="icon col-2">
						<button className="btn" onClick={() => navigate(-1)}>
							<i className="bx bx-left-arrow-alt"></i>
						</button>
					</div>
					<div className="col-8 text-center">
						<h6 className="title">{children}</h6>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</div>
	);
};

export default TopShort;
