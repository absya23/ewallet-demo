import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { images } from "../constants";

const DATA = [
	{
		id: 1,
		image: images.avatar,
		name: "Linh Đan",
		phone: "0123 456 789",
	},
	{
		id: 2,
		image: images.avatar,
		name: "Đan Trường",
		phone: "0123 456 113",
	},
];

const TransferHome = () => {
	const [key, setKey] = useState("hey");
	useEffect(() => {
		console.log(key);
	}, [key]);
	return (
		<div className="page-container transfer-page">
			<div className="container">
				<div className="search">
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							value={key}
							onChange={(e) => setKey(e.target.value)}
						/>
						<Button variant="outline-secondary" id="button-addon2">
							<i className="bx bx-search-alt"></i>
						</Button>
					</InputGroup>
				</div>
				<div className="list-user"></div>
			</div>
		</div>
	);
};

export default TransferHome;
