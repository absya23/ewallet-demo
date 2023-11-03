import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { images } from "../../constants";
import "./transfer.style.css";
import { ButtonBottom, TopShort } from "../../components";
import { Form } from "react-bootstrap";
import { formatPhoneToString } from "../../handler";

const TransferOtp = () => {
	const navigate = useNavigate();
	const { receiverId } = useParams();
	const { state } = useLocation();
	const receiver = state.data.user;
	const [otp, setOtp] = useState();
	const data = {
		receiver,
		otp,
	};

	const handleClick = () => {
		navigate(`/transfer/${receiver.id}/result`, { state: { data } });
	};

	return (
		<div className="page-container otp-screen">
			<TopShort>Chuyển tiền</TopShort>
			<div className="container">
				<div className="img mt-5">
					<img src={images.OTP} alt="" />
				</div>
				<Form className="otp mt-5">
					<Form.Group className="form-group mb-3 text-center">
						<Form.Label className="input-label text-center mb-4">
							Nhập mã OTP
						</Form.Label>
						<Form.Label className="input-label-desc text-center mb-3">
							Xác nhận gửi <b>{"5.000.000đ"} </b>đến <b>{"name"}</b>
						</Form.Label>
						<Form.Label className="input-label-desc text-center mb-3">
							Chúng tôi sẽ gửi mã OTP đến số điện thoại{" "}
							{formatPhoneToString("8522464846")}
						</Form.Label>
						<Form.Control
							type="number"
							placeholder="XX-XX-XX"
							value={otp}
							className="input"
							onChange={(e) => setOtp(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>Xác nhận</ButtonBottom>
		</div>
	);
};

export default TransferOtp;
