import React from "react";
import "./home.style.css";
import formatNumber from "../handler";
import { Link } from "react-router-dom";
import { Top } from "../components";

const Home = () => {
	const user = JSON.parse(window.localStorage.getItem("user") || {})
	const name = user?.name || "";
	const account_balance = user?.balance || 0;

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
								<Link>
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
								<Link>
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
		</div>
	);
};

export default Home;
