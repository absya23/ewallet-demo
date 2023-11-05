import React from "react";
import { images } from "../../constants";

const bankData = [
	{
		id: 1,
		logo: images.acb,
		name: "ACB",
		account_number: "*****1410",
	},
	{
		id: 2,
		logo: images.vcb,
		name: "Vietcombank",
		account_number: "*****2314",
	},
	{
		id: 3,
		logo: images.tpbank,
		name: "TPBank",
		account_number: "*****5672",
	},
];

const BankList = ({ chosen = 1, setChooseBank = () => {} }) => {
	//get user's list banks

	//handle
	const handleClick = (item) => {
		setChooseBank(item.id);
	};
	return (
		<div className="d-flex flex-column">
			{bankData.length > 0 &&
				bankData.map((item) => (
					<button
						className={`bank-item ${item.id === chosen ? "active" : ""}`}
						key={item.id}
						onClick={() => handleClick(item)}
					>
						<img src={item.logo} alt="" />
						<p>
							{item.name}
							{item.account_number}
						</p>
					</button>
				))}
		</div>
	);
};

export default BankList;
