"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/mockData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const page = () => {
	return (
		<div
			className=" w-screen h-screen flex flex-col items-center justify-center  "
			style={{ backgroundImage: "url(/assets/bg-2.jpg)" }}
		>
			<div className="max-w-[80%] ">
				<div className="flex flex-col items-center justify-center pb-10  ">
					<h1 className="text-white font-semibold text-[46px]">
						Skills{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
							&
						</span>{" "}
						Technologies
					</h1>
					<p className="text-[18px] text-gray-400 py-2">
						Using the latest tech this world has to offer
					</p>
				</div>
				<Swiper
					slidesPerView={5}
					loop={true}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					speed={5000}
					modules={[Autoplay]}
					className="max-w-[60%] py-10"
				>
					{SkillData.map((skill, index) => (
						<SwiperSlide key={index}>
							<Image
								src={skill.image}
								alt={skill.name}
								width={skill.width}
								height={skill.height}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					slidesPerView={5}
					loop={true}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
						reverseDirection: true,
					}}
					speed={5000}
					modules={[Autoplay]}
					className="max-w-[60%]"
				>
					{SkillData.map((skill, index) => (
						<SwiperSlide key={index}>
							<Image
								src={skill.image}
								alt={skill.name}
								width={skill.width}
								height={skill.height}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default page;
