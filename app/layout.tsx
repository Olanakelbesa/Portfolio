import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import Navbar from "@/components/Navbar";
import Navigations from "@/components/Navigations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Oli Portfolio",
	description: "My portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/png" href="/assets/online-resume.png" />
			</head>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Navigations />
			</body>
		</html>
	);
}
