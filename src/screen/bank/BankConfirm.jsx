import React, {useEffect, useState} from "react";
import { ButtonBottom, TopShort } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../../constants";
import formatNumber from "../../handler";
import api, { playVoiceAPI } from "../../api";
import "./bank.style.css";
import Voice from "../../components/Voice";

const bankData = [
	{
		id: 1,
		logo: images.acb,
		name: "ACB",
		account_number: "*****1410",
	},
	// {
	// 	id: 2,
	// 	logo: images.vcb,
	// 	name: "Vietcombank",
	// 	account_number: "*****2314",
	// },
	// {
	// 	id: 3,
	// 	logo: images.tpbank,
	// 	name: "TPBank",
	// 	account_number: "*****5672",
	// },
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

	const [user, setUser] = useState({})
	const [userId, setUserId] = useState("")

	useEffect(() => {
		const getData = async () => {
			playVoiceAPI.confirm();
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
		  command: 'xác nhận',
		  callback: () => {
			setTimeout(() => document.querySelector(".btn.btn-gradient").click(), 500)
		  }
		},
	] 

	// type : 1 là nạp, 2 là rút
	const type = state.type;
	// transaction data
	const data = state.data;
	// bank
	const bank = bankData.find((item) => item.id === data.bank) ?? 1;
	//money
	const money = data?.money || 0;
	// handle
	const handleClick = async () => {
		if (type == 1) {
			const newBalance = Number(money) + Number(user?.balance || 0);
			const response = await api.updateUser(userId, {
				balance: newBalance
			})
			const result = response[0]
			
			window.localStorage.setItem("user", JSON.stringify(result))
			await api.postTransaction({
				"type": "Deposit",
				"description": "",
				"amount": money,
				"senderId": null,
				"receiverId": userId,
			})
		}
		if (type == 2) {
			const newBalance = Number(user?.balance || 0) - Number(money);
			const response = await api.updateUser(userId, {
				balance: newBalance
			})
			const result = response[0]
			
			window.localStorage.setItem("user", JSON.stringify(result))
			await api.postTransaction({
				"type": "Withdraw",
				"description": "",
				"amount": money,
				"senderId": userId,
				"receiverId": null,
			})
		}
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
								: `Rút tiền về ngân hàng ${bank.name}`}
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
			<Voice commands={commands}/>
		</div>
	);
};

export default BankConfirm;
