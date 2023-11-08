import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { images } from "../../constants";
import { ButtonBottom, MoneySuggest, TopShort } from "../../components";
import { Form } from "react-bootstrap";
import api, { playVoiceAPI }from "../../api";
import Voice from "../../components/Voice";
import { mapMoney } from "../../services";
import "./transfer.style.css";

const Transfer = () => {
	const navigate = useNavigate();
	const { receiverId } = useParams();
	const { state } = useLocation();
	const [money, setMoney] = useState(0);
	const [user, setUser] = useState({})
	const [userId, setUserId] = useState("")
	const receiver = state?.user;
	const data = {
		user: receiver,
	};

	useEffect(() => {
		const getData = async () => {
			playVoiceAPI.transferNumber()
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
		  command: 'chuyển *',
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

	const handleClick = async () => {
		const senderNewBalance = Number(user?.balance || 0) - Number(money)
		const receiverNewBalance = Number(user?.balance || 0) + Number(money)
		const receiverResponse = await api.updateUser(receiverId, {
			balance: receiverNewBalance
		})
		const senderResponse = await api.updateUser(userId, {
			balance: senderNewBalance
		})

		const result = senderResponse[0]
		window.localStorage.setItem("user", JSON.stringify(result))
		
		await api.postTransaction({
			"type": "Transfer",
			"description": "",
			"amount": money,
			"senderId": userId,
			"receiverId": receiverId,
		})
		// navigate(`/transfer/${receiver.id}/otp`, { state: { data } });
		navigate(`/transfer/${receiver.id}/result`, { state: { data } });
	};
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
						<img src={images.avatar} />
					</div>
					<p className="name">{receiver?.name || ""}</p>
				</div>
			</div>
			<ButtonBottom handleClick={() => handleClick()}>Chuyển tiền</ButtonBottom>
			<Voice commands={commands}/>
		</div>
	);
};

export default Transfer;
