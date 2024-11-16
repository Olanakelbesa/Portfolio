"use client";

import { NavLink } from "@/mockData";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Transition from "./Transition";

const Navigations = () => {
	const [isRouting, setIsRounting] = useState(false);
	const path = usePathname();
	const [prevPath, setPrevPath] = useState("/");

	useEffect(() => {
		if (prevPath != path) {
			setIsRounting(true);
			setPrevPath(path);
		}
	}, [prevPath, path]);

	useEffect(() => {
		if (isRouting) {
			const timeout = setTimeout(() => {
				setIsRounting(false);
			}, 1200);

			return () => clearTimeout(timeout);
		}
	}, [isRouting]);

	return (
		<div className="absolute  flex justify-evenly rounded-full items-center border-2 border-solid border-white -bottom-10 w-80 h-24 bg-gray-900 left-80 z-[50] ">
			{isRouting && <Transition />}
			{NavLink.map((nav) => (
				<Link key={nav.name} href={nav.link} className="mb-14 pt-8">
					<nav.icon
						width={28}
						height={28}
						className={path === nav.link ? "text-purple-400" : "text-white"}
					/>
				</Link>
			))}
		</div>
	);
};

export default Navigations;
