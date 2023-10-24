import { useState } from "react";
import logo from "../assets/images/logo.png";

const navs = [
	{ id: 1, title: "Home", distenation: "#hero", target: false, current: true },
	{
		id: 3,
		title: "Sister Companies",
		distenation: "#siscomps",
		target: false,
		current: false,
	},
	{
		id: 2,
		title: "Services",
		distenation: "#services",
		target: false,
		current: false,
	},
	{
		id: 4,
		title: "Governance",
		distenation: "#",
		target: true,
		current: false,
	},
	{
		id: 5,
		title: "CEO Message",
		distenation: "#",
		target: true,
		current: false,
	},
	{
		id: 6,
		title: "Contact Us",
		distenation: "#",
		target: true,
		current: false,
	},
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<nav className="bg-[#FFFFFF]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center justify-between w-full h-full">
						<a href="#" className="flex-shrink-0 text-white h-10 w-10">
							<img src={logo} alt="" className="w-full h-full object-contain" />
						</a>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{navs.map(({ id, title, current, distenation, target }) => (
									<a
										key={id}
										href={`/${distenation}`}
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										{title}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							type="button"
							className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
							onClick={handleToggle}
						>
							<span className="sr-only">Open main menu</span>

							<svg
								className={`block h-6 w-6 ${isOpen ? "hidden" : "block"}`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<svg
								className={`hidden h-6 w-6 ${isOpen ? "block" : "hidden"}`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div
				className={`md:hidden ${isOpen ? "block" : "hidden"} id="mobile-menu`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<a
						href="#"
						className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Home
					</a>
					<a
						href="#"
						className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						About
					</a>
					<a
						href="#"
						className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded"
					></a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
