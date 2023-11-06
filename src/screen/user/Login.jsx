import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import api from "../../api"
import "./user.style.css";
const Login = () => {
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [userArr, setUserArr] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const users = await api.getAllUser()
			setUserArr(users);
		}
		getData();
	}, [])

	const handleLogin = async () => {
		const result = userArr.find((item) => item.phoneNumber == phone && item.pin == password)
		if (result) {
			const local = window.localStorage;
			local.setItem("user", JSON.stringify(result))
			toast.success('Login successfully');
			navigate("/");
		}
		else {
			toast.error('Please check your phone and password');
		}	
	};

	return (
		<div className="page-container user-page-bg">
			<div className="container">
				<Form className="form">
					<Form.Group className="form-group mb-3" controlId="formBasicPhone">
						<Form.Label>Số điện thoại</Form.Label>
						<Form.Control type="phone" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)}/>
						<Form.Text className="text-muted">
							Số điện thoại mà bạn đăng kí.
						</Form.Text>
					</Form.Group>

					<Form.Group className="form-group mb-3" controlId="formBasicPassword">
						<Form.Label>Mật khẩu</Form.Label>
						<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Form.Group className="form-group mb-3">
						<p>
							Bạn chưa có tài khoản? <Link to="/register">Đăng kí</Link>
						</p>
					</Form.Group>
					<Button variant="primary" type="submit" onClick={() => handleLogin()}>
						Đăng nhập
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Login;
