import React from "react";

const Voice = () => {
	const handleOpen = (e) => {
		e.target.nextSibling.classList.add("show");
	};
	return (
		<button className="voice-bot" onClick={(e) => handleOpen(e)}>
			<i className="bx bxs-microphone"></i>
		</button>
	);
};

export default Voice;
