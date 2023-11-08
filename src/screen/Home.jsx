import React, { useEffect } from "react";
import "./home.style.css";
import formatNumber from "../handler";
import { Link } from "react-router-dom";
import { Top } from "../components";
import { playVoiceAPI } from "../api";
import Voice from "../components/Voice";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate()
	const user = JSON.parse(window.localStorage.getItem("user") || {})
	const name = user?.name || "";
	const account_balance = user?.balance || 0;

	useEffect(() => {
		playVoiceAPI.welcome();
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
			command: 'chuyển (tiền)',
			callback: () => navigate("transfer")
		},
		{
			command: 'nạp (tiền)',
			callback: () => navigate("/bank/deposit")
		},
		{
			command: 'rút (tiền)',
			callback: () => navigate("/bank/withdraw")
		},
		{
			command: 'lịch sử (giao dịch)',
			callback: () => navigate("statement")
		},
	] 

	return (
		<div className="page-container home-page">
			<Top name={name}></Top>
			<div className="content">
				<div className="container">
					<div className="box quick-action">
						<div className="top">
							<p>Số dư:</p>
							<p className="money">{formatNumber(account_balance)}</p>
						</div>
						<div className="list-action">
							<div className="item">
								<Link to="transfer">
									<i className="bx bx-dollar-circle"></i>
									<p>Chuyển tiền</p>
								</Link>
							</div>
							<div className="item">
								<Link>
									<i className="bx bx-qr"></i>
									<p>Mã thanh toán</p>
								</Link>
							</div>
							<div className="item">
								<Link to="bank">
									<i className="bx bx-wallet"></i>
									<p>Nạp/Rút</p>
								</Link>
							</div>
							<div className="item">
								<Link>
									<i className="bx bx-gift"></i>
									<p>Ưu đãi</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Voice commands={commands}/>
		</div>
	);
};

export default Home;
