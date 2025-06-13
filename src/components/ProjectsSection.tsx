import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "Breakout Game",
		description:
			"Breakout Game built with Rust + Wasm. Deployed to Github Pages",
		image: "/breakout.png",
		github: "https://github.com/rupakhetibinit/breakout-game",
		link: "https://rupakhetibinit.github.io/breakout-game/",
	},
	{
		name: "Reddit Clone",
		description:
			"Reddit Clone is built with the T3 Stack using Nextjs, Typescript, trpc and tailwindcss, and contains the basic functionality of reddit. Demo is currently broken.",
		image: "/reddit.png",
		github: "https://github.com/rupakhetibinit/reddit-clone-nextjs-trpc",
		link: "https://reddit-clone-nextjs-trpc.vercel.app",
	},
	{
		name: "Recipe To Home",
		description:
			"Recipe To Home is a React Native Mobile Application that can be used to favorite recipes, and bulk order ingredients. The entire project contains the Mobile App, the Backend and an Admin Panel. Unfortunately backend is broken due to heroku free tier changes.",
		image: "/recipe-app.png",
		github: "https://github.com/rupakhetibinit/recipetohome",
		link: "https://github.com/rupakhetibinit/recipetohome",
	},
	{
		name: "Worlde Clone",
		description: "A Wordle clone built with vanilla js.",
		link: "https://wordle-js-silk.vercel.app/",
		github: "https://github.com/rupakhetibinit/wordle-js",
		image: "/wordle.png",
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-sm"></hr>
			</h1>

			<div className="flex flex-col space-y-28 mb-20">
				{projects.map((project, idx) => {
					return (
						<div key={idx}>
							<SlideUp offset="-50px 0px -50px 0px">
								<div className="flex flex-col animate-slide-up-cubi-bezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={project.link}>
											<Image
												src={project.image}
												alt=""
												width={1000}
												height={1000}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className="mt-8 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{project.description}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link href={project.github} target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link href={project.link} target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
