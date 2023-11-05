import React from "react";
import { Top2 } from "../../components";
import formatNumber from "../../handler";
import { images } from "../../constants";
import "./bank.style.css";
import { Link } from "react-router-dom";

const BankHome = () => {
	const account_balance = 120000;
	return (
		<div className="page-container bank-page">
			<Top2 title="Nạp/rút tiền">
				<div className="account-balance mt-3">
					<p>Số dư:</p>
					<p className="money">{formatNumber(account_balance)}</p>
				</div>
			</Top2>
			<div className="container">
				<div className="box group-action">
					<Link to="/bank/deposit" className="action-item">
						<img src={images.wallet_plus} alt="" />
						<div className="title">
							<p className="heading">Nạp tiền</p>
							<p className="note">Từ ngân hàng vào Ví</p>
						</div>
					</Link>
					<Link to="/bank/withdraw" className="action-item">
						<img src={images.wallet_minus} alt="" />
						<div className="title">
							<p className="heading">Rút tiền</p>
							<p className="note">Rút từ Ví về ngân hàng</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BankHome;
