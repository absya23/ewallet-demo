import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { Home, Login, NoPage, Register, Setting, TransferHome } from "./screen";
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
		<BrowserRouter>
			<Routes>
				{user ? (
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="setting" element={<Setting />} />
						<Route path="transfer" element={<TransferHome />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				) : (
					<Route path="/">
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
