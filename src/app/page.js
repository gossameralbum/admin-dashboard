"use client";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const siderStyle = {
	overflow: "auto",
	height: "100vh",
	position: "sticky",
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: "thin",
	scrollbarGutter: "stable",
};

const items = [
	{ icon: UserOutlined, label: "User" },
	{ icon: VideoCameraOutlined, label: "Video Camera" },
	{ icon: UploadOutlined, label: "Upload" },
	{ icon: BarChartOutlined, label: "Bar Chart" },
	{ icon: CloudOutlined, label: "Cloud" },
	{ icon: AppstoreOutlined, label: "App Store" },
	{ icon: TeamOutlined, label: "Team" },
	{ icon: ShopOutlined, label: "Shop" },
].map((item, index) => ({
	key: String(index + 1),
	icon: React.createElement(item.icon),
	label: item.label,
}));

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

const App = () => {
	return (
		<main className={nunitoSans.className}>
			<Sider style={siderStyle}>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["4"]}
					items={items}
				/>
			</Sider>
		</main>
	);
};

export default App;
