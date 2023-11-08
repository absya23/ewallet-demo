import React, { useState, useEffect } from "react";
import { BankList, ButtonBottom, MoneySuggest, Top2 } from "../../components";
import { useNavigate } from "react-router-dom";
import formatNumber from "../../handler";
import { images } from "../../constants";
import { Form } from "react-bootstrap";
import "./bank.style.css";
import { playVoiceAPI } from "../../api";
import Voice from "../../components/Voice";
import { mapMoney } from "../../services";

const Withdraw = () => {
	const navigate = useNavigate(null);
	const [money, setMoney] = useState(0);
	const [bank, setBank] = useState(1);
	const [user, setUser] = useState({})
	const [userId, setUserId] = useState("")

	useEffect(() => {
		const getData = async () => {
			playVoiceAPI.withdraw();
			const user = await JSON.parse(window.localStorage.getItem("user") || {})
			const userId = user?.userId;
			setUser(user)
			setUserId(userId)
		}
		getData()
	}, [])

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
		  command: 'rút *',
		  callback: (amount) => {
			if (user?.balance < mapMoney(amount)) {
				playVoiceAPI.notEnough()
				return;
			}
			setMoney(mapMoney(amount))
			setTimeout(() => document.querySelector(".btn.btn-gradient").click(), 1000)
		  }
		},
	] 
	
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
				</div>
				<div className="box group-action p-4 mt-1">
					<p className="title fw-bold mb-2">Rút tiền về</p>
					<BankList chosen={bank} setChooseBank={setBank}></BankList>
				</div>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>Tiếp tục</ButtonBottom>
			<Voice commands={commands}/>
		</div>
	);
};

export default Withdraw;
