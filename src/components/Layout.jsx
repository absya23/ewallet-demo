import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Voice from "./Voice";
import { ChatBot } from "../screen";

const Layout = () => {
	return (
		<>
			<div
				style={{
					width: "100%",
					height: "calc(100% - 60px)",
					position: "absolute",
				}}
			>
				<Outlet />
				<Voice></Voice>
				<ChatBot></ChatBot>
			</div>

			<nav className="bottom-navigation">
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<i className="bx bx-home-alt"></i>
							<p>Trang chủ</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/wallet"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<i className="bx bx-wallet"></i>
							<p>Ví</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/transfer"
							className={({ isActive, isPending }) =>
								isPending
									? "pending center"
									: isActive
									? "active center"
									: "center"
							}
						>
							<i className="bx bxs-plus-circle"></i>
							<p>Chuyển tiền</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/statement"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<i className="bx bx-history"></i>
							<p>Lịch sử</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/setting"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<i className="bx bxs-cog"></i>
							<p>Cài đặt</p>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Layout;
