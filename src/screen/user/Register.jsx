import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import api from "../../api"
import "./user.style.css";
const Register = () => {
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [userArr, setUserArr] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const users = await api.getAllUser()
			setUserArr(users);
		}
		getData();
	}, [])

	const handleSignup = async () => {
		const isExisting = !!userArr.find((item) => item.phoneNumber == phone);
		if (!isExisting) {
			const payload = {
				phoneNumber: phone,
				pin: password,
				name: username,
				balance: 0,
			}
			const response = await api.postUser(payload)
			if (response) {
				const local = window.localStorage;
				local.setItem("user", JSON.stringify(response))
				toast.success('Register successfully');
				navigate("/");	
			}
			else toast.error("Network error")
		}
		else {
			toast.error("Already exist")
		}
	};
	return (
		<div className="page-container user-page-bg">
			<div className="container">
				<Form className="form">
					<Form.Group className="form-group mb-3" controlId="formBasicPhone">
						<Form.Label>Số điện thoại</Form.Label>
						<Form.Control type="phone" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} />
						<Form.Text className="text-muted">
							Số điện thoại mà bạn đăng kí.
						</Form.Text>
					</Form.Group>
					<Form.Group className="form-group mb-3" controlId="formBasicName">
						<Form.Label>Tên Người Dùng</Form.Label>
						<Form.Control type="text" placeholder="Nhập tên người dùng" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<Form.Text className="text-muted">
							Tên người dùng
						</Form.Text>
					</Form.Group>
					<Form.Group className="form-group mb-3" controlId="formBasicPassword">
						<Form.Label>Mật khẩu</Form.Label>
						<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					</Form.Group>
					<Form.Group className="form-group mb-3">
						<p>
							Bạn chưa có tài khoản? <Link to="/login">Đăng nhập</Link>
						</p>
					</Form.Group>
					<Button variant="primary" type="submit" onClick={() => handleSignup()}>
						Đăng kí
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Register;
