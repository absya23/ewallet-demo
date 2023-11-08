import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { images } from "../constants";
import { UserItem } from "../components";
import { useNavigate } from "react-router-dom";
import api, {playVoiceAPI} from "../api";
import "./transferHome.style.css";
import Voice from "../components/Voice";

const TransferHome = () => {
	const [key, setKey] = useState("hey");
	const [users, setUsers] = useState([])
	const [allUsers, setAllUsers] = useState([])
	const [searchUsers, setSearchUsers] = useState([])
	const [user, setUser] = useState({})
	const navigate = useNavigate();
	const handleClick = (data) => {
		navigate(`/transfer/${data.userId}`, { state: { user: data } });
	};
	useEffect(() => {
		const getData = async () => {
			playVoiceAPI.transfer()
			const user = await JSON.parse(window.localStorage.getItem("user") || {})
			const userId = user?.userId;
			const friends = await api.getFriends()
			const allUsers = await api.getAllUser()
			let myFriendsId = [] 
			friends.forEach((item) => {
				if (item?.user1Id == userId) {
					if (item?.user2Id) {
						// const friend = await api.getUserById(item.user2Id)
						myFriendsId.push(item.user2Id)
					}
				}
				if (item?.user2Id == userId) {
					if (item?.user1Id) {
						// const friend = await api.getUserById(item.user1Id)
						myFriendsId.push(item.user1Id)
					}
				}
			});

			const myFriends = allUsers.filter((item) => myFriendsId.includes(item.userId))
			console.log(userId, friends, myFriends)
			setUsers(myFriends)
			setUser(user)
			setAllUsers(allUsers)
		}
		getData()
	}, []);

	const commands = [
		{
		  command: 'kiểm tra tài khoản',
		  callback: () => playVoiceAPI.checkBalance(user?.balance || 0)
		},
		{
		  command: 'kiểm tra số dư',
		  callback: () => playVoiceAPI.checkBalance(user?.balance || 0)
		},
		{
		  command: 'xác nhận',
		  callback: () => {
			setTimeout(() => document.querySelector(".btn.btn-gradient").click(), 500)
		  }
		},
		{
			command: 'chuyển (cho) *',
			callback: (name) => {
			  if (searchUsers.length > 0) {
				const receiver = searchUsers.find((item) => item.name.toLowerCase() == name.trim().toLowerCase())
				if (receiver) {
				  navigate(`/transfer/${receiver.userId}`, { state: { user: receiver } });
				}
				else playVoiceAPI.cannotFind()
			  }
			  else {
				  const receiver = users.find((item) => item.name.toLowerCase() == name.trim().toLowerCase())
				  if (receiver) {
					  navigate(`/transfer/${receiver.userId}`, { state: { user: receiver } });
				  }
				  else playVoiceAPI.cannotFind()
				  }
			  }
		  },
	] 

	const handleSearch = () => {
		const searchResult = allUsers.filter((item) => item.name.includes(key) || item.phoneNumber.includes(key))
		setSearchUsers(searchResult)
	}

	return (
		<div className="page-container transfer-page">
			<div className="container">
				<div className="search">
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Tìm kiếm..."
							aria-label="Tìm kiếm..."
							aria-describedby="basic-addon2"
							value={key}
							onChange={(e) => setKey(e.target.value)}
						/>
						<Button id="button-addon2" onClick={() => handleSearch()}>
							<i className="bx bx-search-alt"></i>
						</Button>
					</InputGroup>
				</div>
				<div className="list-user mt-3">
					{searchUsers.length > 0 ?
						searchUsers.map((item, index) => (
							<UserItem
								key={index}
								data={item}
								onClick={(e) => handleClick(item)}
							></UserItem>
						)) :

						users.map((item, index) => (
							<UserItem
								key={index}
								data={item}
								onClick={(e) => handleClick(item)}
							></UserItem>
						))
					}
				</div>
			</div>
			<Voice commands={commands}/>
		</div>
	);
};

export default TransferHome;
