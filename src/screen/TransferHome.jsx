import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { images } from "../constants";
import { UserItem } from "../components";
import { useNavigate } from "react-router-dom";
import "./transferHome.style.css";

const DATA = [
	{
		id: 1,
		image: images.avatar,
		name: "Linh Đan",
		phone: "0123456789",
	},
	{
		id: 2,
		image: images.avatar,
		name: "Đan Trường",
		phone: "0123456113",
	},
];

const TransferHome = () => {
	const [key, setKey] = useState("hey");
	const navigate = useNavigate();
	const handleClick = (data) => {
		console.log(data);
		//
		navigate(`/transfer/${data.id}`, { state: { user: data } });
	};
	useEffect(() => {
		console.log(key);
	}, [key]);
	return (
		<div className="page-container transfer-page">
			<div className="container">
				<div className="search">
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Tìm kiếm..."
							aria-label="Tìm kiếm..."
							aria-describedby="basic-addon2"
							value={key}
							onChange={(e) => setKey(e.target.value)}
						/>
						<Button id="button-addon2">
							<i className="bx bx-search-alt"></i>
						</Button>
					</InputGroup>
				</div>
				<div className="list-user mt-3">
					{DATA.length > 0 &&
						DATA.map((item, index) => (
							<UserItem
								key={index}
								data={item}
								onClick={(e) => handleClick(item)}
							></UserItem>
						))}
				</div>
			</div>
		</div>
	);
};

export default TransferHome;
