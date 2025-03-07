"use client";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Layout, Menu, Tag } from "antd";
import {
	AddressBookIcon,
	CalendarAltIcon,
	CogIcon,
	CommentsIcon,
	FileInvoiceDollarIcon,
	GiftIcon,
	HeartIcon,
	ListIcon,
	SignOutAltIcon,
	StreamIcon,
	TableIcon,
	TachometerAltIcon,
	TagIcon,
	TasksIcon,
	ThumbsUpIcon,
	UsersIcon,
} from "react-line-awesome";

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
	backgroundColor: "#fff",
	color: "#202224",
};

const items = [
	{ key: "1", icon: <TachometerAltIcon />, label: "Dashboard" },
	{ key: "2", icon: <TagIcon />, label: "Products" },
	{ key: "3", icon: <ThumbsUpIcon />, label: "Favorites" },
	{ key: "4", icon: <CommentsIcon />, label: "Inbox" },
	{ key: "5", icon: <ListIcon />, label: "Order Lists" },
	{ key: "6", icon: <StreamIcon />, label: "Product Stock" },
	{ key: "7", icon: <GiftIcon />, label: "Pricing" },
	{ key: "8", icon: <CalendarAltIcon />, label: "Calendar" },
	{ key: "9", icon: <TasksIcon />, label: "Wishlist" },
	{ key: "10", icon: <AddressBookIcon />, label: "Contact" },
	{ key: "11", icon: <FileInvoiceDollarIcon />, label: "Invoices" },
	{ key: "12", icon: <UsersIcon />, label: "Team" },
	{ key: "13", icon: <TableIcon />, label: "Tables" },
	{ key: "14", icon: <CogIcon />, label: "Settings" },
	{ key: "15", icon: <SignOutAltIcon />, label: "Logout" },
];

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

const App = () => {
	const [selectedKey, setSelectedKey] = useState("4");
	const [hoveredKey, setHoveredKey] = useState(null);

	const handleSelect = ({ key }) => {
		setSelectedKey(key);
	};

	const handleMouseEnter = (key) => {
		setHoveredKey(key);
	};

	const handleMouseLeave = () => {
		setHoveredKey(null);
	};

	const menuItems = items.map((item) => ({
		...item,
		onMouseEnter: () => handleMouseEnter(item.key),
		onMouseLeave: handleMouseLeave,
		style: {
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
		},
	}));

	return (
		<main className={nunitoSans.className}>
			<Sider style={siderStyle}>
				<div className="demo-logo-vertical" />
				<Menu
					mode="inline"
					defaultSelectedKeys={[selectedKey]}
					onSelect={handleSelect}
					items={menuItems}
					style={{ color: "#202224" }}
				/>
			</Sider>
		</main>
	);
};

export default App;
