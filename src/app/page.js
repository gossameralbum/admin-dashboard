"use client";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Layout, Menu, theme, Flex, Tooltip, Input, Space } from "antd";
import "@ant-design/v5-patch-for-react-19";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SearchOutlined,
	AudioOutlined,
} from "@ant-design/icons";
import {
	AddressBookIcon,
	CalendarAltIcon,
	CogIcon,
	CommentsIcon,
	FileInvoiceDollarIcon,
	GiftIcon,
	ListIcon,
	SignOutIcon,
	StreamIcon,
	TableIcon,
	TachometerAltIcon,
	TagIcon,
	TasksIcon,
	ThumbsUpIcon,
	UsersIcon,
} from "react-line-awesome";

const { Search } = Input;
const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: "#4880FF",
		}}
	/>
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Sider, Header, Content } = Layout;

const siderStyle = {
	overflow: "auto",
	height: "100vh",
	position: "sticky",
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: "thin",
	scrollbarGutter: "stable",
	backgroundColor: "#fff",
	color: "#202224",
	width: 300,
};

const logoStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "20px 0",
	position: "sticky",
	top: 0,
	zIndex: 1,
	backgroundColor: "#fff",
	height: "64px",
};

const dividerStyle = {
	height: "1px",
	backgroundColor: "#E0E0E0",
	margin: "10px 0",
};

const items = [
	{ key: "1", icon: <TachometerAltIcon />, label: "Dashboard" },
	{ key: "2", icon: <TagIcon />, label: "Products" },
	{ key: "3", icon: <ThumbsUpIcon />, label: "Favorites" },
	{ key: "4", icon: <CommentsIcon />, label: "Inbox" },
	{ key: "5", icon: <ListIcon />, label: "Order Lists" },
	{ key: "6", icon: <StreamIcon />, label: "Product Stock" },
	{ key: "divider1", type: "divider", style: dividerStyle },
	{ key: "7", icon: <GiftIcon />, label: "Pricing" },
	{ key: "8", icon: <CalendarAltIcon />, label: "Calendar" },
	{ key: "9", icon: <TasksIcon />, label: "Wishlist" },
	{ key: "10", icon: <AddressBookIcon />, label: "Contact" },
	{ key: "11", icon: <FileInvoiceDollarIcon />, label: "Invoices" },
	{ key: "12", icon: <UsersIcon />, label: "Team" },
	{ key: "13", icon: <TableIcon />, label: "Tables" },
	{ key: "divider2", type: "divider", style: dividerStyle },
	{ key: "14", icon: <CogIcon />, label: "Settings" },
	{ key: "15", icon: <SignOutIcon />, label: "Logout" },
];

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

const App = () => {
	const [selectedKey, setSelectedKey] = useState("4");
	const [hoveredKey, setHoveredKey] = useState(null);
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const handleSelect = ({ key }) => {
		setSelectedKey(key);
	};

	const handleMouseEnter = (key) => {
		setHoveredKey(key);
	};

	const handleMouseLeave = () => {
		setHoveredKey(null);
	};

	const menuItems = items.map((item) => {
		if (item.type === "divider") {
			return {
				...item,
				style: dividerStyle,
			};
		}
		return {
			...item,
			onMouseEnter: () => handleMouseEnter(item.key),
			onMouseLeave: handleMouseLeave,
			style: {
				height: "48px",
				width: "90%",
				backgroundColor:
					item.key === selectedKey
						? "#4880FF"
						: item.key === hoveredKey
						? "#E0E0E0"
						: "transparent",
				color:
					item.key === selectedKey
						? "#FFFFFF"
						: item.key === hoveredKey
						? "#202224"
						: "#202224",
				transition: "background-color 0.3s, color 0.3s",
				alignItems: "center",
			},
		};
	});

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={siderStyle}>
				{!collapsed && (
					<div style={logoStyle}>
						<Image
							src="/dashlogo.svg"
							alt="Dashboard Logo"
							width={100}
							height={100}
						/>
					</div>
				)}
				<Menu
					mode="inline"
					defaultSelectedKeys={[selectedKey]}
					onSelect={handleSelect}
					items={menuItems}
					style={{ color: "#202224" }}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: "16px",
								width: 64,
								height: 64,
							}}
						/>
						<Search
							placeholder="Search..."
							onSearch={onSearch}
							enterButton
							style={{
								width: 388,
								height: 38,
								borderRadius: 19,
								color: "#D5D5D5",
								marginLeft: 16,
								marginTop: 6,
								fontWeight: 600,
							}}
						/>
					</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}>
					Content
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
