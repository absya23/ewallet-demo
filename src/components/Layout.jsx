import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Outlet />

			<nav class="bottom-navigation">
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<i class="bx bx-home-alt"></i>
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
							<i class="bx bx-wallet"></i>
							<p>Ví</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/wallet"
							className={({ isActive, isPending }) =>
								isPending
									? "pending center"
									: isActive
									? "active center"
									: "center"
							}
						>
							<i class="bx bxs-plus-circle"></i>
							<p>Chuyển tiền</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<i class="bx bx-history"></i>
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
							<i class="bx bxs-cog"></i>
							<p>Cài đặt</p>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Layout;
