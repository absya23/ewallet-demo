import React from "react";
import "./userItem.style.css";
import { formatPhoneToString } from "../../handler";

const UserItem = ({ data, onClick = () => {} }) => {
	return (
		<button onClick={onClick} className="user-item">
			<img src={data.image} alt="" className="avt" />
			<div className="title">
				<p className="name">{data.name}</p>
				<p className="phone">{formatPhoneToString(data.phone)}</p>
			</div>
		</button>
	);
};

export default UserItem;
