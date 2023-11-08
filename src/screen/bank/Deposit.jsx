import React, { useState, useEffect } from "react";
import { BankList, ButtonBottom, MoneySuggest, Top2 } from "../../components";
import formatNumber from "../../handler";
import { Form } from "react-bootstrap";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import "./bank.style.css";
import { playVoiceAPI } from "../../api";
import Voice from "../../components/Voice";
import { mapMoney } from "../../services";

const Deposit = () => {
	const navigate = useNavigate();
	const [money, setMoney] = useState(0);
	const [bank, setBank] = useState(1);
	const [user, setUser] = useState({})
	const [userId, setUserId] = useState("")

	useEffect(() => {
		const getData = async () => {
			playVoiceAPI.deposit();
			const user = await JSON.parse(window.localStorage.getItem("user") || {})
			const userId = user?.userId;
			setUser(user)
			setUserId(userId)
		}
		getData()
	}, [])

	const handleClick = () => {
		navigate(`/bank/confirm`, { state: { type: 1, data: { money, bank } } });
	};

	const commands = [
		{
		  command: 'kiểm tra tài khoản',
		  callback: () => playVoiceAPI.checkBalance(user.balance)
		},
		{
		  command: 'kiểm tra số dư',
		  callback: () => playVoiceAPI.checkBalance(user?.balance || 0)
		},
		{
		  command: 'nạp *',
		  callback: (amount) => {
			setMoney(mapMoney(amount))
			setTimeout(() => document.querySelector(".btn.btn-gradient").click(), 1000)
		  }
		},
	] 

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
						<p className="money">{formatNumber(user?.balance || 0)}</p>
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
			<Voice commands={commands}/>
		</div>
	);
};

export default Deposit;
