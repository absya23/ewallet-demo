import React, { useState } from "react";
import { BankList, ButtonBottom, MoneySuggest, Top2 } from "../../components";
import formatNumber from "../../handler";
import { Form } from "react-bootstrap";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import "./bank.style.css";

const Deposit = () => {
	const [money, setMoney] = useState(undefined);
	const [bank, setBank] = useState(1);
	const account_balance = 120000;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/bank/confirm`, { state: { type: 1, data: { money, bank } } });
	};
	return (
		<div className="page-container bank-page">
			<Top2 title="Nạp tiền">
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
					<p className="note mt-2">
						<i className="bx bxs-info-circle"></i> Miễn phí nạp tiền từ thẻ/ tài
						khoản nội địa.{" "}
						<a href="javascript:;" alt="">
							Xem chi tiết
						</a>
					</p>
				</div>
				<div className="box group-action p-4 mt-1">
					<p className="title fw-bold mb-2">Nguồn tiền</p>
					<BankList chosen={bank} setChooseBank={setBank}></BankList>
				</div>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>Tiếp tục</ButtonBottom>
		</div>
	);
};

export default Deposit;
