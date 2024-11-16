import { Socials } from "@/mockData";
import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className=" py-2 fixed bg-transparent pl-20 flex justify-between w-full z-[40] ">
			<div className=" p-2 flex items-center gap-3">
				<Image
					src="/assets/horseLogo.jpg"
					alt="horse logo"
					width={40}
					height={40}
					className=" rounded-full "
				/>
				<h1 className="text-white text-[24px] font-semibold ">
					Oli{" "}
					<span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
						Portfolio
					</span>
				</h1>
			</div>
			<div className="flex gap-5 pr-28 ">
				{Socials.map((social) => (
					<Image
						key={social.name}
						src={social.src}
						alt={social.name}
						width={25}
						height={25}
						className="cursor-pointer"
					/>
				))}
			</div>
		</div>
	);
};

export default Navbar;
