"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

const TransitionVarient = {
	initial: {
		x: "-100%",
		width: "100%",
	},
	animate: {
		x: "0%",
		width: "0%",
	},
	exit: {
		x: ["0%", "100%"],
		width: ["0%", "100%"],
	},
};

const Transition = () => {
	return (
		<div>
			<motion.div
				className="fixed top-0 left-full h-screen w-screen z-[30] bg-[#2e2257]"
				variants={TransitionVarient}
				initial="initial"
				exit="exit"
				animate="animate"
				transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
			/>
			<motion.div
				className="fixed top-0 left-full h-screen w-screen z-[20] bg-[#3b2d71]"
				variants={TransitionVarient}
				initial="initial"
				exit="exit"
				animate="animate"
				transition={{ delay: 0.3, duration: 0.6, ease: easeInOut }}
			/>
			<motion.div
				className="fixed top-0 left-full h-screen w-screen z-[10] bg-[#4b3792]"
				variants={TransitionVarient}
				initial="initial"
				exit="exit"
				animate="animate"
				transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
			/>
		</div>
	);
};

export default Transition;
