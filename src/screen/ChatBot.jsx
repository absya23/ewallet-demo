import React, { useEffect } from "react";

const ChatBot = () => {
	const handleClose = (e) => {
		e.target.closest(".chat-box-page").classList.remove("show");
	};
	return (
		<div className="chat-box-page">
			<div className="group-top group-top-2 rounded-0">
				<div className="container">
					<div className="top row pb-2">
						<div className="icon col-2">
							<button className="btn" onClick={(e) => handleClose(e)}>
								<i className="bx bx-x-circle"></i>
							</button>
						</div>
						<div className="col-8 text-center">
							<h6 className="title">Trợ lý ảo</h6>
						</div>
						<div className="col-2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
