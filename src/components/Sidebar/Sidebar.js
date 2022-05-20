import { React, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { Button, Row, Col } from "react-bootstrap";

import "./Sidebar.css";

function Sidebar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="sidebar">
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				<Row className="menu-bar-row">
					<Col xs={4} sm={7} md={8}>
						<h1
							className=""
							style={{
								fontSize: "30px",
								textAlign: "center",
								color: "white",
							}}
						>
							GemSidebar
						</h1>
					</Col>
					<Col xs={8} sm={5} md={4}>
						<Button variant="none" className="menu-bar-row-button">
							Connect Wallet
						</Button>
					</Col>
				</Row>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul onClick={showSidebar} className="nav-menu-items">
						<li className="sidebar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Sidebar;
