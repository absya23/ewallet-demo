import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { images } from "../../constants";
import { ButtonBottom, MoneySuggest, TopShort } from "../../components";
import { Form } from "react-bootstrap";
import "./transfer.style.css";

const Transfer = () => {
	const navigate = useNavigate();
	const { receiverId } = useParams();
	const { state } = useLocation();
	const [money, setMoney] = useState(0);
	const receiver = state.user;
	const data = {
		user: receiver,
	};
	const handleClick = () => {
		navigate(`/transfer/${receiver.id}/otp`, { state: { data } });
	};
	useEffect(() => {
		// get receiver by receiverId
	}, []);
	return (
		<div className="page-container transfer-page">
			<TopShort>Giao dịch</TopShort>
			<Form className="transfer">
				<Form.Group className="form-group mt-4 mb-3 text-center">
					<Form.Label className="input-label text-center">
						Nhập số tiền
					</Form.Label>
					<Form.Control
						type="number"
						placeholder="0đ"
						value={money}
						className="input"
						onChange={(e) => setMoney(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<MoneySuggest setMoney={setMoney}></MoneySuggest>
			<div className="content mt-5">
				<p>Đến</p>
				<div className="title">
					<div className="avt">
						<img src={receiver.image} />
					</div>
					<p className="name">{receiver.name}</p>
				</div>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>Chuyển tiền</ButtonBottom>
		</div>
	);
};

export default Transfer;
