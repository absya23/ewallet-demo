import React, { useState } from "react";
import "./statement.style.css";
import { Tab, Tabs } from "react-bootstrap";

import { images } from "../../constants";
import formatNumber from "../../handler";

const image = [
	images.naptien,
	images.ruttien,
	images.chuyentien,
	images.nhantien,
];

const data = [
	{
		id: 1,
		type: 1,
		title: "Nạp tiền vào Ví",
		money: 20000,
	},
	{
		id: 2,
		type: 2,
		title: "Rút tiền về ngân hàng",
		money: 10000,
	},
	{
		id: 3,
		type: 3,
		title: "Chuyển tiền đến Trần Tuấn",
		money: 1540000,
	},
	{
		id: 4,
		type: 4,
		title: "Nhận tiền từ Minh Vy",
		money: 200000,
	},
	{
		id: 2,
		type: 2,
		title: "Rút tiền về ngân hàng",
		money: 13000,
	},
];

const Statement = () => {
	const [key, setKey] = useState("all");
	const account_balance = 120000;
	return (
		<div className="page-container statement-page page-bg-2">
			<h3 className="text-left fw-bold mt-4 ms-4">Lịch sử giao dịch</h3>
			<div className="container">
				<div className="account-balance mt-3 d-flex justify-content-between align-items-center">
					<p>Số dư:</p>
					<p className="money fw-bolder fs-1">
						{formatNumber(account_balance)}
					</p>
				</div>
				<div className="box-2 mt-3">
					<Tabs
						id="controlled-tab-example"
						activeKey={key}
						onSelect={(k) => setKey(k)}
						className="border-0"
					>
						<Tab eventKey="all" title="Tất cả">
							{data.length > 0 &&
								data.map((item) => (
									<Item
										type={item.type}
										key={item.id}
										title={item.title}
										content={item.content}
										money={item.money}
									></Item>
								))}
						</Tab>
						<Tab eventKey="deposit" title="Nạp tiền">
							{data.length > 0 &&
								data.map((item) =>
									item.type === 1 ? (
										<Item
											type={item.type}
											key={item.id}
											title={item.title}
											content={item.content}
											money={item.money}
										></Item>
									) : (
										<></>
									)
								)}
						</Tab>
						<Tab eventKey="withdraw" title="Rút tiền">
							{data.length > 0 &&
								data.map((item) =>
									item.type === 2 ? (
										<Item
											type={item.type}
											key={item.id}
											title={item.title}
											content={item.content}
											money={item.money}
										></Item>
									) : (
										<></>
									)
								)}
						</Tab>
						<Tab eventKey="send" title="Chuyển tiền">
							{data.length > 0 &&
								data.map((item) =>
									item.type === 3 ? (
										<Item
											type={item.type}
											key={item.id}
											title={item.title}
											content={item.content}
											money={item.money}
										></Item>
									) : (
										<></>
									)
								)}
						</Tab>
						<Tab eventKey="receive" title="Nhận tiền">
							{data.length > 0 &&
								data.map((item) =>
									item.type === 4 ? (
										<Item
											type={item.type}
											key={item.id}
											title={item.title}
											content={item.content}
											money={item.money}
										></Item>
									) : (
										<></>
									)
								)}
						</Tab>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

const Item = ({ type, title, money }) => {
	return (
		<div className="d-flex justify-content-between align-items-center item-statement">
			<div className="d-flex align-items-center">
				<img src={image.at(Number(type) - 1)} alt="" />
				<h6 className="mb-0">{title}</h6>
			</div>
			<div className="d-flex flex-column ms-3">
				<p className="fw-bold">
					{type === 1 || type === 4 ? "+" : "-"}
					{formatNumber(money)}
				</p>
			</div>
		</div>
	);
};

export default Statement;
