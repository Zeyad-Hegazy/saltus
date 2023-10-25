import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import menu from "../assets/icons/menu.webp";
import close from "../assets/icons/close.webp";

const linkClass =
	"text-[#333333] hover:bg-[#128c76] hover:text-white px-3 py-2 rounded-md text-[16px] font-medium focus:bg-[#128c76] focus:text-white";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<nav className="shadow-xl">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center justify-between w-full h-full">
						<a href="#" className="flex-shrink-0 text-white h-12 w-12">
							<img src={logo} alt="" className="w-full h-full object-contain" />
						</a>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<Link
									to={`/`}
									className={linkClass}
									onClick={() => setIsOpen(false)}
								>
									Home
								</Link>
								<a
									href="#siscomps"
									className={linkClass}
									onClick={() => setIsOpen(false)}
								>
									Sister Companies
								</a>
								<a
									href="#services"
									className={linkClass}
									onClick={() => setIsOpen(false)}
								>
									Services
								</a>
								<a
									href="#governance"
									className={linkClass}
									onClick={() => setIsOpen(false)}
								>
									Governance
								</a>
								<Link
									to="/ceo-message"
									className={linkClass}
									onClick={() => setIsOpen(false)}
								>
									CEO Message
								</Link>
								<Link
									to="/contact"
									className={linkClass}
									onClick={() => setIsOpen(false)}
								>
									Contact Us
								</Link>
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
								className={`block h-6 w-6 ${isOpen ? "hidden" : "block"}`}
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
					<Link to={`/`} className={linkClass} onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<a
						href="#siscomps"
						className={linkClass}
						onClick={() => setIsOpen(false)}
					>
						Sister Companies
					</a>
					<a
						href="#services"
						className={linkClass}
						onClick={() => setIsOpen(false)}
					>
						Services
					</a>
					<a
						href="#governance"
						className={linkClass}
						onClick={() => setIsOpen(false)}
					>
						Governance
					</a>
					<Link
						to="/ceo-message"
						className={linkClass}
						onClick={() => setIsOpen(false)}
					>
						CEO Message
					</Link>
					<Link
						to="/contact"
						className={linkClass}
						onClick={() => setIsOpen(false)}
					>
						Contact Us
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
