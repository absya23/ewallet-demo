import React, { useState } from "react";
import { BankList, ButtonBottom, MoneySuggest, Top2 } from "../../components";
import { useNavigate } from "react-router-dom";
import formatNumber from "../../handler";
import { images } from "../../constants";
import { Form } from "react-bootstrap";
import "./bank.style.css";

const Withdraw = () => {
	const [money, setMoney] = useState(null);
	const [bank, setBank] = useState(1);
	const account_balance = 120000;
	const navigate = useNavigate(null);
	const handleClick = () => {
		navigate(`/bank/confirm`, { state: { type: 2, data: { money, bank } } });
	};
	return (
		<div className="page-container bank-page">
			<Top2 title="Rút tiền">
				<div className="mb-5"></div>
			</Top2>
			<div className="container">
				<div className="box group-action p-4">
					<div className="account-balance mb-3">
						<div className="d-flex flex-row align-items-end">
							<img src={images.logo} alt="" className="logo" />
							<p className="ms-2">Số dư ví:</p>
						</div>
						<p className="money">{formatNumber(account_balance)}</p>
					</div>
					<Form.Control
						type="number"
						placeholder="Nhập số tiền"
						value={money}
						className="input mb-2"
						onChange={(e) => setMoney(e.target.value)}
					/>
					<MoneySuggest setMoney={setMoney}></MoneySuggest>
				</div>
				<div className="box group-action p-4 mt-1">
					<p className="title fw-bold mb-2">Rút tiền về</p>
					<BankList chosen={bank} setChooseBank={setBank}></BankList>
				</div>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>Tiếp tục</ButtonBottom>
		</div>
	);
};

export default Withdraw;
