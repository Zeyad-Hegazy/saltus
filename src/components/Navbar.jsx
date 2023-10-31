import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/icons/menu.webp";
import close from "../assets/icons/close.webp";

const linkClass =
	"text-[#333333] hover:bg-[#128c76] hover:text-white px-3 py-2 rounded-md text-[16px] font-medium duration-500";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<nav className="shadow-xl">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center justify-center w-full h-full">
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<NavLink
									to={`/`}
									className={({ isActive }) =>
										`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
									}
									onClick={() => setIsOpen(false)}
								>
									Home
								</NavLink>
								<NavLink
									to="/governance"
									className={({ isActive }) =>
										`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
									}
									onClick={() => setIsOpen(false)}
								>
									Governance
								</NavLink>
								<NavLink
									to="/about"
									className={({ isActive }) =>
										`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
									}
									onClick={() => setIsOpen(false)}
								>
									About Us
								</NavLink>
								<NavLink
									to="/ceoMessage"
									className={({ isActive }) =>
										`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
									}
									onClick={() => setIsOpen(false)}
								>
									CEO Message
								</NavLink>
								<NavLink
									to="/contact"
									className={({ isActive }) =>
										`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
									}
									onClick={() => setIsOpen(false)}
								>
									Contact Us
								</NavLink>
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							type="button"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
							onClick={handleToggle}
						>
							<img
								src={menu}
								alt="menu icon"
								className={`block h-10 w-10 ${isOpen ? "hidden" : "block"}`}
							/>
							<img
								src={close}
								alt="menu icon"
								className={`block h-6 w-6 ${isOpen ? "block" : "hidden"}`}
							/>
						</button>
					</div>
				</div>
			</div>
			<div
				className={`md:hidden ${isOpen ? "block" : "hidden"} id="mobile-menu`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
					<NavLink
						to={`/`}
						className={({ isActive }) =>
							`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
						}
						onClick={() => setIsOpen(false)}
					>
						Home
					</NavLink>
					<NavLink
						to="/governance"
						className={({ isActive }) =>
							`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
						}
						onClick={() => setIsOpen(false)}
					>
						Governance
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
						}
						onClick={() => setIsOpen(false)}
					>
						About Us
					</NavLink>
					<NavLink
						to="/ceo-message"
						className={({ isActive }) =>
							`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
						}
						onClick={() => setIsOpen(false)}
					>
						CEO Message
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`${isActive ? "bg-[#128c76] text-white" : ""} ${linkClass}`
						}
						onClick={() => setIsOpen(false)}
					>
						Contact Us
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
