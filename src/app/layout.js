import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
});

export const metadata = {
	title: "DashStack",
	description: "Admin dashboard.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={nunitoSans.variable}>
			<head>
				<link
					rel="stylesheet"
					href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
				/>
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}
