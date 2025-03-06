"use client";

import React from "react";
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,
	AppstoreOutlined,
	TeamOutlined,
	ShopOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const siderStyle = {
	overflow: "auto",
	height: "1070px",
	width: "240px",
	position: "sticky",
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: "thin",
	scrollbarGutter: "stable",
};

const items = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,
	AppstoreOutlined,
	TeamOutlined,
	ShopOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));

const App = () => {
	return (
		<Sider style={siderStyle}>
			<div className="demo-logo-vertical" />
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={["4"]}
				items={items}
			/>
		</Sider>
	);
};

export default App;
