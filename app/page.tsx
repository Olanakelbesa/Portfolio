import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className=" w-screen h-screen ">
			<div
				className="flex items-center w-full h-full bg-cover bg-center"
				style={{ backgroundImage: "url(/assets/main-bg.webp)" }}
			>
				<div className="flex flex-col p-10 md:pl-40 pb-56 md:w-[56%] ">
					<h1 className="text-white text-[40px] md:text-[56px] font-semibold z-[15]">
						Make anything possible with{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
							Web Development
						</span>{" "}
					</h1>

					<p className="text-gray-300 py-5 hidden md:block ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						omnis in repellendus id atque, recusandae est accusantium laborum
						error temporibus veritatis! Doloribus et velit beatae iure possimus
						eaque iusto magnam.
					</p>

					<div className=" flex flex-col right-5  gap-3 absolute bottom-10 md:relative md:flex-row md:bottom-0 md:right-0 z-[20]">
						<Link
							href="/my-skills"
							className=" p-2 px-6 relative text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 "
						>
							My Skills
						</Link>
						<Link
							href="/my-project"
							className=" p-2 px-6 relative text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 "
						>
							My Project
						</Link>
						<Link
							href="/contact-me"
							className=" p-2 px-6 relative text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 "
						>
							Contact Me
						</Link>
					</div>
				</div>
				<div className=" absolute bottom-0 right-0 z-[15] ">
					<Image
						src="/assets/horse.png"
						alt="horse"
						width={300}
						height={300}
						className="absolute top-40 right-48 "
					/>
					<Image
						src="/assets/cliff.webp"
						alt="cliff"
						width={480}
						height={480}
					/>
				</div>
				<div className=" absolute bottom-0 z-[10] w-full h-auto">
					<Image
						src="/assets/trees.webp"
						alt="tree"
						width={2000}
						height={2000}
					/>
				</div>
			</div>
			<Image
				src="/assets/stars.png"
				alt="star"
				width={300}
				height={300}
				className="absolute top-10 left-0 z-[10] "
			/>
		</main>
	);
}
