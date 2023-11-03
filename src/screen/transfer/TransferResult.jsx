import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBottom, TopShort } from "../../components";
import { images } from "../../constants";

const TransferResult = () => {
	const navigate = useNavigate();

	return (
		<div className="page-container">
			<TopShort>Kết quả</TopShort>
			<div className="container">
				<div className="content">
					<div className="img">
						<img src={images.success} alt="" />
					</div>
				</div>
			</div>
			<ButtonBottom handleClick={() => navigate("/")}>
				Quay lại trang chủ
			</ButtonBottom>
		</div>
	);
};

export default TransferResult;
