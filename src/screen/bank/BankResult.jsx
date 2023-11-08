import React, {useEffect} from "react";
import { ButtonBottom, TopShort } from "../../components";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import "./bank.style.css";
import { playVoiceAPI } from "../../api";

const BankResult = () => {
	const navigate = useNavigate();
	useEffect(() => {
		playVoiceAPI.success()
	}, [])

	return (
		<div className="page-container">
			<TopShort>Giao dịch</TopShort>
			<div className="container">
				<div className="content mt-5 d-flex flex-column justify-content-center align-items-center">
					<div className="img">
						<img src={images.success} alt="" />
					</div>
					<h4 className="text-center mt-3">Giao dịch thành công</h4>
				</div>
			</div>
			<ButtonBottom handleClick={() => navigate("/")}>
				Quay lại trang chủ
			</ButtonBottom>
		</div>
	);
};

export default BankResult;
