import React from "react";
import "./userItem.style.css";
import { images } from "../../constants";
import { formatPhoneToString } from "../../handler";

const UserItem = ({ data, onClick = () => {} }) => {
	console.log(data)
	return (
		<button onClick={onClick} className="user-item">
			<img src={images.avatar} alt="" className="avt" />
			<div className="title">
				<p className="name">{data.name}</p>
				<p className="phone">{formatPhoneToString(data.phoneNumber)}</p>
			</div>
		</button>
	);
};

export default UserItem;
