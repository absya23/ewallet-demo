import React from "react";
import { ButtonBottom, TopShort } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../../constants";
import formatNumber from "../../handler";
import "./bank.style.css";

const bankData = [
	{
		id: 1,
		logo: images.acb,
		name: "ACB",
		account_number: "*****1410",
	},
	{
		id: 2,
		logo: images.vcb,
		name: "Vietcombank",
		account_number: "*****2314",
	},
	{
		id: 3,
		logo: images.tpbank,
		name: "TPBank",
		account_number: "*****5672",
	},
];

const type = [
	{
		id: 1,
		type: "deposit",
	},

	{
		id: 2,
		type: "withdraw",
	},
];

const BankConfirm = ({}) => {
	const navigate = useNavigate();
	const { state } = useLocation();
	// type : 1 là nạp, 2 là rút
	const type = state.type;
	// transaction data
	const data = state.data;
	// bank
	const bank = bankData.find((item) => item.id === data.bank) ?? 1;
	// handle
	const handleClick = () => {
		navigate("/bank/result");
	};
	return (
		<div className="page-container">
			<TopShort>Xác nhận giao dịch</TopShort>
			<div className="container">
				<div className="box d-flex flex-column box-data">
					<div className="top d-flex flex-column align-items-center">
						{type === 1 ? (
							<img src={images.nap} alt="" />
						) : (
							<img src={images.rut} alt="" />
						)}
						<h3 className="money text-center fs-1">
							{formatNumber(data.money ?? 0)}
						</h3>
						<p className="note text-center mb-4">
							{type === 1
								? "Nạp tiền vào tài khoản Ví"
								: `Xác nhận rút tiền về ngân hàng ${bank.name}`}
						</p>
					</div>
					<div className="description d-flex justify-content-between align-items-center">
						<p>Phí giao dịch</p>
						<b>Miễn phí</b>
					</div>
				</div>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>
				Xác nhận giao dịch
			</ButtonBottom>
		</div>
	);
};

export default BankConfirm;
