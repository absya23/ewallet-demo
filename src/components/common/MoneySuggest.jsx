import React from "react";

const MoneySuggest = ({ setMoney = () => {} }) => {
	return (
		<div className="options">
			<button className="option" onClick={() => setMoney(10000)}>
				10.000đ
			</button>
			<button className="option" onClick={() => setMoney(50000)}>
				50.000đ
			</button>
			<button className="option" onClick={() => setMoney(100000)}>
				100.000đ
			</button>
			<button className="option" onClick={() => setMoney(200000)}>
				200.000đ
			</button>
			<button className="option" onClick={() => setMoney(500000)}>
				500.000đ
			</button>
			<button className="option" onClick={() => setMoney(1000000)}>
				1.000.000đ
			</button>
		</div>
	);
};

export default MoneySuggest;
