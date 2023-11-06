import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import {
	BankConfirm,
	BankHome,
	BankResult,
	Deposit,
	Home,
	Login,
	NoPage,
	Register,
	Setting,
	Statement,
	Transfer,
	TransferHome,
	TransferOtp,
	TransferResult,
	Wallet,
	Withdraw,
} from "./screen";
import { ToastContainer } from 'react-toastify';
import Layout from "./components/Layout";
import { useEffect } from "react";

function App() {
	let user = true;
	useEffect(() => {
		if (!user) {
			redirect("/login");
		}
	}, [user]);
	return (
		<>
		<BrowserRouter>
			<Routes>
				{user ? (
					<>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
							<Route path="setting" element={<Setting />} />
							<Route path="wallet" element={<Wallet />} />
							<Route path="transfer" element={<TransferHome />} />
							<Route path="statement" element={<Statement />} />
							<Route path="bank" element={<BankHome />} />
							<Route path="*" element={<NoPage />} />
						</Route>
						<Route path="/transfer/:receiverId" element={<Transfer />} />
						<Route path="/transfer/:receiverId/otp" element={<TransferOtp />} />
						<Route
							path="/transfer/:receiverId/result"
							element={<TransferResult />}
						/>
						<Route path="/bank/deposit" element={<Deposit />} />
						<Route path="/bank/withdraw" element={<Withdraw />} />
						<Route path="/bank/confirm" element={<BankConfirm />} />
						<Route path="/bank/result" element={<BankResult />} />
					</>
				) : (
					<Route path="/">
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				)}
			</Routes>
		</BrowserRouter>
		<ToastContainer />
		</>
	);
}

export default App;
