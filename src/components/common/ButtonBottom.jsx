import React from "react";

const ButtonBottom = ({ children, handleClick = () => {} }) => {
	return (
		<div className="button-bottom">
			<button onClick={handleClick} className="btn btn-gradient">
				{children}
			</button>
		</div>
	);
};

export default ButtonBottom;
