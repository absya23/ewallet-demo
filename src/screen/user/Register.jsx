import React from "react";
import { Button, Form } from "react-bootstrap";
import "./user.style.css";
import { Link } from "react-router-dom";
const Register = () => {
	return (
		<div className="page-container user-page-bg">
			<div className="container">
				<Form className="form">
					<Form.Group className="form-group mb-3" controlId="formBasicPhone">
						<Form.Label>Số điện thoại</Form.Label>
						<Form.Control type="phone" placeholder="Nhập số điện thoại" />
						<Form.Text className="text-muted">
							Số điện thoại mà bạn đăng kí.
						</Form.Text>
					</Form.Group>

					<Form.Group className="form-group mb-3" controlId="formBasicPassword">
						<Form.Label>Mật khẩu</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="form-group mb-3">
						<p>
							Bạn chưa có tài khoản? <Link to="/login">Đăng nhập</Link>
						</p>
					</Form.Group>
					<Button variant="primary" type="submit">
						Đăng kí
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Register;
