import React from "react";
import { Top2 } from "../../components";
import { Link } from "react-router-dom";
import formatNumber from "../../handler";
import "./wallet.style.css";

const Wallet = () => {
	const account_balance = 120000;
	return (
		<div className="page-container wallet-page">
			<Top2 title="Ví của tôi">
				<div className="account-balance mt-3">
					<p>Số dư:</p>
					<p className="money">{formatNumber(account_balance)}</p>
				</div>
			</Top2>
			<div className="container">
				<div className="mt-5 check-statement">
					<Link to="/statement" className="text-left">
						Kiểm tra lịch sử giao dịch
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Wallet;
