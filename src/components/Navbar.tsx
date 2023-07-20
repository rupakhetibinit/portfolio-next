"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

type Props = {};

interface NavItem {
	label: string;
	page: string;
}

const NAV_ITEMS: NavItem[] = [
	{ label: "Home", page: "home" },
	{ label: "About", page: "about" },
	{ label: "Projects", page: "projects" },
];

const Navbar = (props: Props) => {
	const { systemTheme, setTheme, theme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	console.log(theme)
	const [navbar, setNavbar] = useState(false);
	return (
		<header className="w-full mx-auto px-4 sm:px-20 shadow fixed bg-white top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
			<div className="justify-between md:items-center md:flex">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<div className="container flex items-center space-x-2">
							<h2 className="text-2xl font-bold">Binit Rupakheti</h2>
						</div>
						<div className="md:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}>
								{navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? "block" : "hidden"
						}`}>
						<div className="items-center justify-center md:flex md:space-x-6 space-y-8 md:space-y-0">
							{NAV_ITEMS.map((item, idx) => (
								<Link
									key={idx}
									to={item.page}
									activeClass="active"
									spy={true}
									offset={-100}
									smooth={true}
									duration={500}
									onClick={() => setNavbar(!navbar)}
									className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 select-none cursor-pointer">
									{item.label}
								</Link>
							))}
							{currentTheme === "dark" ? (
								<button
									className="bg-slate-100 p-2 rounded-xl"
									onClick={() => setTheme("light")}>
									<RiSunLine size={25} color="black" />
								</button>
							) : (
								<button
									className="bg-slate-100 p-2 rounded-xl"
									onClick={() => setTheme("dark")}>
									<RiMoonFill size={25} color="black" />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
